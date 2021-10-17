const axios = require("axios");

// "https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=" + format + "&date=" + today + "&stockNo=" + stockCode
// `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=${format}&date=${today}&stockNo=${stockCode}`


// 安裝 npm moment 控制日期 <--好用
// const momnet = require("moment");
// let today = moment().format("YYYYMMDD");

// 控制股票代碼
// const fs = require("fs");
// 


let stockCode = "2330";
let today = "20211011"
let format = "json";

async function getData() {
  try {
    const testAwait = await axios.get(
      "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
      {
        params: {
          response: format,
          date: today,
          stockNo: stockCode,
        },
      }
    );
    console.log("await成功", testAwait.data);
  } catch (e) {
    console.log("發生錯誤", e);
  }
}

getData();
