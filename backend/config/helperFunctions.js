const isItEditted = (oldInfo, newInfo) => {
    if (oldInfo === newInfo || newInfo === undefined) {
        return oldInfo
    } else {
        return newInfo
    }
}

module.exports = isItEditted