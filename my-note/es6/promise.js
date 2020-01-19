setTimeout(() => {
    console.log("...我是第一层...")
    setTimeout(() => {
        console.log("...我是第二层...")
        setTimeout(() => {
            console.log("...我是第三层...")
            setTimeout(() => {
                console.log("...我是第四层...")
            }, 2000);
        }, 1000);
    }, 3000);
}, 2000);


function getPromise(time,str){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(str)
        }, time);
    })
}

/**
// 又陷入了回调地狱
getPromise(2000,'...第一层...').then(result=>{
    console.log(result)

    getPromise(3000,'...第二层...').then(result2=>{
        console.log(result2)
    })
})
**/

getPromise(2000,'...第一层...').then(result=>{ //...第一层相当于result
    console.log(result)
    return getPromise(3000,'...第二层...')  //利用return一个promise
}).then(result2=>{
    console.log(result2)

    return getPromise(1000,'...第三层...')
}).then(result3=>{
    console.log(result3)

    return getPromise(2000,'...第四层...')
}).then(result4=>{
    console.log(result4)
})

// modules/user.js

// login( userInfo ){
//     return new Promise((resolve, reject) => {
//         validCode().then(res => {
//             const {validCode, requestId} = res.data.data
//             const {username, password} = userInfo
//             return login({username: username.trim(), password, validCode, requestId})
//         }).then(res => {
//             resolve(res)
//         })
//     })
// }