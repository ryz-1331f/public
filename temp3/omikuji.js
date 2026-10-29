let enteredNewTitle = "おみくじ"
let toggleReNameBoxOpened = 0
let toggleChangeLogsOpened = 0
document.getElementById('reName').style.display = 'none'
document.getElementById('changeLogs').style.display = 'none'
document.getElementById('selectOmikuji').style.display = 'none'
document.getElementById('result').style.display = "none"
const header = document.getElementById('header')
document.getElementById('header').style.background = " #f0f0f0"
document.getElementById('header').style.color = "#000"
document.getElementById('colorBand').style.background = "#f0f0f0"
document.getElementById('header').style.height = "auto"
header.style.position = "sticky"
document.getElementById('titleName').style.fontSize = "1rem"
document.getElementById('exp01').textContent = "1つ選んでね"
document.getElementById('exp02').textContent = ""
document.getElementById('expBox01').style.display = "flex"
document.getElementById('expBox02').style.display = "flex"
document.getElementById('expBox01').style.justifyContent = "center"
document.getElementById('expBox02').style.justifyContent = "center"
let userNickName = ""

function refreshTitleBox(enteredTitle) {
    document.getElementById('titleNameBox').value = enteredTitle
}

function applyTitleName() {
    enteredNewTitle = document.getElementById('titleNameBox').value
    document.getElementById('pageTitle').innerText = enteredNewTitle
    document.getElementById('titleName').innerText = enteredNewTitle

    const omikujiUnit = document.querySelectorAll('.omikuji')

    omikujiUnit.forEach(unit => {
        unit.textContent = enteredNewTitle

    })



    if (enteredNewTitle == "恋みくじ") {
        koimikuji()
    } else {
        removeKoimikuji()
    }
}

function toggleReNameBox() {
    if (toggleReNameBoxOpened == 0) {
        toggleReNameBoxOpened = 1
    }else if (toggleReNameBoxOpened == 1){
        toggleReNameBoxOpened = 0
    }

    if (toggleReNameBoxOpened == 0) {
        document.getElementById('reName').style.display = 'none'
    }else if (toggleReNameBoxOpened == 1) {
        document.getElementById('reName').style.display = 'block'
    }
}

function koimikuji() {
    const header = document.getElementById('header')
    const headers = header.style
    headers.background = "#f00"
    headers.color = "#ffa500"
    document.getElementById('colorBand').style.background = "#ffa500"
    headers.height = "11rem"
    headers.position = "relative"
    document.getElementById('titleName').style.fontSize = "2rem"
    document.getElementById('exp01').textContent = "恋みくじを引く"
    document.getElementById('exp02').textContent = "心を穏やかにし、恋みくじをタップしてください。"
    document.getElementById('expBox01').style.display = "flex"
    document.getElementById('expBox02').style.display = "flex"
    document.getElementById('expBox01').style.justifyContent = "center"
    document.getElementById('expBox02').style.justifyContent = "center"
}

function removeKoimikuji() {
    const header = document.getElementById('header')
    document.getElementById('header').style.background = " #f0f0f0"
    document.getElementById('header').style.color = "#000"
    document.getElementById('colorBand').style.background = "#f0f0f0"
    document.getElementById('header').style.height = "auto"
    header.style.position = "sticky"
    document.getElementById('titleName').style.fontSize = "1rem"
    document.getElementById('exp01').textContent = "1つ選んでね"
    document.getElementById('exp02').textContent = ""
    document.getElementById('expBox01').style.display = "flex"
    document.getElementById('expBox02').style.display = "flex"
    document.getElementById('expBox01').style.justifyContent = "center"
    document.getElementById('expBox02').style.justifyContent = "center"
}

function toggleChangeLogsBox() {
    if (toggleChangeLogsOpened == 0) {
        toggleChangeLogsOpened = 1
    }else if (toggleChangeLogsOpened == 1){
        toggleChangeLogsOpened = 0
    }

    if (toggleChangeLogsOpened == 0) {
        document.getElementById('changeLogs').style.display = 'none'
    }else if (toggleChangeLogsOpened == 1) {
        document.getElementById('changeLogs').style.display = 'block'
    }
}

function getStartOmikuji() {
    userNickName = document.getElementById('nickNameEntry').value
    userGender = document.getElementById('genderEntry').value
    userLoveStatus = document.getElementById('loveStatusEntry').value
    document.getElementById('nameEntry').style.display = 'none'
    document.getElementById('selectOmikuji').style.display = 'block'
    document.getElementById('result').style.display = 'none'
}

function omikujiSelected() {
    document.getElementById('resultTitle').textContent = `${userNickName}さんの${enteredNewTitle}の結果`


    document.getElementById('nameEntry').style.display = "none"
    document.getElementById('selectOmikuji').style.display = "none"
    document.getElementById('result').style.display = "block"
}