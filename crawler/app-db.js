const axios = require("axios");
const moment = require("moment");
const mysql = require("mysql");
const fs = require("fs/promises");

require("dotenv").config();

// 安裝 npm moment 控制日期 <--好用
// const momnet = require("moment");
// let today = moment().format("YYYYMMDD");

const connection = mysql.createConnection({
  post: process.env.DB_POST,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
});

connection.connect();

function AwaitStock(stockData) {
  // 1. 建立物件(new promise)
  // 2. 建構式參數(resolvem reject)
  return new Promise((resolve, reject) => {
    // 3. 搬入非同步工作
    connection.query(
      "INSERT INTO stock (stock_no, date, deal, amount, count) VALUES (?,?,?,?,?);",
      stockData,
      (result, error) => {
        if (resolve) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );
  });
}

async function awaitDB() {
  let today = moment().format("YYYYMMDD");
  let format = "json";

  try {
    let stockCode = await fs.readFile("stock.txt", "utf-8");

    let res = await axios.get(
      "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
      {
        params: {
          response: format,
          date: today,
          stockNo: stockCode,
        },
      }
    );

    let StockItem = res.data.data[0];

    let stockData = [
      stockCode,
      StockItem[0],
      StockItem[1],
      StockItem[2],
      StockItem[8],
    ];

    const result = await AwaitStock(stockData);
    console.log("上傳成功");
  } catch (e) {
    console.error(e);
  } finally {
    connection.end();
  }
}

awaitDB();
