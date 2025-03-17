// Delay Execution
// Write a function delayedHello that takes a callback and calls it after 2 seconds.

function delayedHello(callback) {
    setTimeout(()=> {
        callback()
    }, 2000)
}
