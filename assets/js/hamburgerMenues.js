function menuHideToggle() {
    document.getElementById("menuToggleBtn").classList.toggle("is-active")
    document.getElementById("hamburgerMenues").classList.toggle("is-active")

}
let accountID = "0331"
let accountName = "岩瀬 龍三"

const headerItems = `
<div>
    <div class="accountDisplayH">
        <img class="accDisFav" src="./accountID${accountID}.png" alt="accountID:${accountID}のアイコン画像">
        <h3>${accountName}</h3>
    </div>
    <h2>メニュー</h2>
    <button class="aMenuLink" onclick="goToLink('/public/keiba/keiso-taisaku/')">競馬総合テスト対策</button>
    <br>
    <button class="aMenuLink" onclick="goToLink('/public/keiba/bakenGenerator/')">馬券ジェネレーター</button>
    <br>
    <button class="aMenuLink" onclick="goToLink('/public/keiba/accounts/assignment.html')">権限制御</button>
</div>
`

const hbm = document.getElementById('hamburgerMenues')
if(hbm) {
    hbm.innerHTML = headerItems
}