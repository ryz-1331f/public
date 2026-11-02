function startKeisan() {
// HTML要素から値を取得
const topVal = document.getElementById('topNum').value.trim();
const rigVal = document.getElementById('rigNum').value.trim();
const undVal = document.getElementById('undNum').value.trim();
const resultInput = document.getElementById('resultDisplay');
// 「k=」を取り除いて数値に変換
const bottomStr = undVal.replace(/^k\s*=\s*/i, '');
const bottom = parseInt(bottomStr, 10);
const top = parseInt(topVal, 10);
// 簡易入力チェック
if (isNaN(top) || isNaN(bottom) || !rigVal) {
resultInput.value = "入力が正しくありません";
return;
}
let totalSum = 0;
// シグマのループ計算
for (let k = bottom; k <= top; k++) {
try {
// 文字列の式に変数kを渡して計算を実行
const calculate = new Function('k', `return ${rigVal};`);
totalSum += calculate(k);
} catch (error) {
resultInput.value = "式のエラー：k以外の文字や不正な記号があります";
return;
}
}
// 計算結果を入力欄に表示
resultInput.value = totalSum;
}