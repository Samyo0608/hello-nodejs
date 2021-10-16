const fs = require('fs');

// 1. 物件 => new Promise
// 2. 製作執行函式(new Promise(function(resolve, reject) {}))
// 3. 把非同步函式放進去
// 4.1 成功的地方，呼叫 resolve 把資料傳出來
// 4.2 失敗的地方，呼叫 reject 把錯誤傳出來 


function readFilePromise(){
    return new Promise(function(resolve, reject){
        fs.readFile("input.txt", "utf-8", (err, data) => {
            if(err){
                // console.error("發生錯誤哦", err);
                reject(err);
            }else{
                resolve(data);
                console.log("拿到資料", data);
            }
        })
    })
}
readFilePromise()
.then((data) => {
    console.log("promise讀檔成功", data)
})
.catch((err) =>{
    console.log("promise讀檔失敗", err)
})