const getDataCallback = (callback) =>{
    setTimeout(() => {
    callback('This is my callback error', undefined)
    }, 2000)
}

getDataCallback((err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

//Promise
const getDataPrimise = (data) => Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(`This is my success data: ${data}`)
        //reject('This is my promises error')
    }, 2000)
})

const myPromise = 

myPromise.then((data) => {
    console.log(data)
}, (err) =>{
    console.log(err)
})