let enteredNewTitle = ""
let toggleReNameBoxOpened = 0
document.getElementById('reName').style.display = 'none'

function refreshTitleBox(enteredTitle) {
    document.getElementById('titleNameBox').value = enteredTitle
}

function applyTitleName() {
    enteredNewTitle = document.getElementById('titleNameBox').value
    document.getElementById('pageTitle').innerText = enteredNewTitle
    document.getElementById('titleName').innerText = enteredNewTitle
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
    document.getElementById('header').style.background = "#f00"
    document.getElementById('header').style.color = "#fff"
}

function removeKoimikuji() {
    document.getElementById('header').style.background = " #f0f0f0"
    document.getElementById('header').style.color = "#000"
}