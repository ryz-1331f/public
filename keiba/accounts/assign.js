let userID = 0
let userPW = 0
let enteredKey = ""

function assign() {
    userID = document.getElementById('userId').value
    userPW = document.getElementById('userPw').value
    enteredKey = document.getElementById('cC').value
    if (enteredKey == commonKey && users[userID]?.["password"] === userPW) {
        give()
    } else {
        alert('入力要項が間違っているか、エラーが発生しました\nもう一度ご確認ください')
    }
}

function give() {
    remove()
    localStorage.setItem("userID",userID)
    alert('権限が付与されました')
    const params = new URLSearchParams(location.search);
    if (params.has("from")) {
        location.href = params.get("from")
    }
}

function remove() {
    localStorage.removeItem("userID")
}

function check() {
    let isGiven = localStorage.getItem("userID") !== null
    if (isGiven === true) {
        let detectedUserId = localStorage.getItem('userID')
        alert('既に登録済みです : [' + users[detectedUserId]?.["ja_name"] + "] さん")
    } else if (isGiven === false) {
        alert('未登録です')
    } else {
        alert('エラーが発生しました')
    }
}