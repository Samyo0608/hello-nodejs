# event loop 作業

## 程式 1

```
function readData(idx) {
  for (let i = 0; i < 100; i++) {
    idx++;
    console.log(idx);
  }
  if (idx < 500) {
    readData(idx);
  }
}

readData(0);
console.log("after");
```

- 結果會先列出 1~500，最後再出現 after

```
1
2
3
.
.
.
499
500
after
```

程式執行後會先呼叫 readData(0)，待 idx 到 100 後會變成 100 帶入 if 內，再由 100 跑入 for，結束後變成 200 跑入 if，
這樣循環到 500 結束，最後在 console 出 after

---

## 程式 2

```
function readData(idx) {
  for (let i = 0; i < 100; i++) {
    idx++;
    console.log(idx);
  }
  if (idx < 500) {
    setTimeout(function () {
      readData(idx);
    }, 0);
  }
}

readData(0);
console.log("after");
```

- 程式執行時會先列出 1~100
- 再跳出 after
- 最後再列出 101~500

```
1
2
3
.
.
.
100
after
101
102
.
.
.
499
500
```

再執行時 setTimeout、ajax 等非同步會移至 call 做處理，剩下的鮮再 stack 執行，等到 readData(0)內的 for 和最後的 console.log 跑完後，最後才會繼續 callback，執行 if 內的 setTimeout，至於 stack 內的 for 和 console.log("after")，則依順序執行。
