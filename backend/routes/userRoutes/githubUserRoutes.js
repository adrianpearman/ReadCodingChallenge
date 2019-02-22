const express = require('express')
const router = express.Router()
const request = require('request')
const qs = require('querystring') // node core module, construct query string
const randomString = require('randomstring') // generates a random string for the session secret
const { CLIENT_ID, CLIENT_SECRET, redirect_uri } = require('../../config/gitHubOAuth')
const UserSchema = require('../../models/userModel')

// REGISTERING AND LOG-IN FOR GITHUB USER
router.get('/register/github', (req, res) => {
    req.session.csrf_string = randomString.generate()
    const githubAuthUrl =
        'https://github.com/login/oauth/authorize?' +
        qs.stringify({
            client_id: CLIENT_ID,
            redirect_uri: redirect_uri,
            state: req.session.csrf_string,
            scope: 'user:email'
        });
    // redirect user with express
    // console.log(githubAuthUrl)
    res.redirect(githubAuthUrl);
})
// Handle the response your application gets.
// Using app.all make sures no matter the provider sent you
// get or post request, they will all be handled
router.all('/redirect', (req, res) => {
    // Here, the req is request object sent by GitHub
    console.log('Request sent by GitHub: ');
    console.log(req.query);

    const code = req.query.code;
    const returnedState = req.query.state;

    if (req.session.csrf_string === returnedState) {
        // Remember from step 5 that we initialized
        // If state matches up, send request to get access token
        // the request module is used here to send the post request
        const oauthURL = 'https://github.com/login/oauth/access_token?' +
            qs.stringify({
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                code: code,
                redirect_uri: redirect_uri,
                state: req.session.csrf_string
            })
        request.post({ url: oauthURL }, (error, response, body) => {
            // The response will contain your new access token
            // this is where you store the token somewhere safe
            // for this example we're just storing it in session
            console.log('Your Access Token: ');
            console.log(qs.parse(body));
            req.session.access_token = qs.parse(body).access_token;

            // Redirects user to /user page so we can use
            // the token to get some data.
            res.redirect('/api/user/user');
        }
        );
    } else {
        // if state doesn't match up, something is wrong
        // just redirect to homepage
        res.redirect('/');
    }
})
router.get('/user', (req, res) => {
    // GET request to get emails
    // this time the token is in header instead of a query string
    request.get(
        {
            url: 'https://api.github.com/user/public_emails',
            headers: {
                Authorization: 'token ' + req.session.access_token,
                'User-Agent': 'Login-App'
            }
        },
        (error, response, body) => {
            res.send(
                "<p>You're logged in! Here's all your emails on GitHub: </p>" +
                body +
                '<p>Go back to <a href="/">log in page</a>.</p>'
            );
        }
    );
    // res.status(200).json('req')
    // console.log(req.session)
})

module.exports = router
