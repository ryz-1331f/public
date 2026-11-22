document.getElementById('dialog001').style.display = "none"

let currentGrade = -1
let currentGradeName = "no"
const gradeOptions = ["全て","ジュニア級","クラシック級"]
const numberOfGrade = gradeOptions.length - 1

let currentNOQ = -1
let currentNOQName = "no"
const NOQOptions = ["あるだけ","1問","10問","20問"]
const numberOfNOQ = gradeOptions.length - 1

let currentOOQ = -1
let currentOOQName = "no"
const OOQOptions = ["昇順","降順","ランダム"]
const numberOfOOQ = gradeOptions.length - 1

function selectGrade() {
    currentGrade = currentGrade + 1
    if (currentGrade > numberOfGrade) {
        currentGrade = 0
    }
    currentGradeName = gradeOptions[currentGrade]

    document.getElementById('gradeSW').innerText = currentGradeName
    document.getElementById('warningMessage').innerText = ""
}

function selectNOQ() {
    currentNOQ = currentNOQ + 1
    if (currentNOQ > numberOfNOQ) {
        currentNOQ = 0
    }
    currentNOQName = NOQOptions[currentNOQ]

    document.getElementById('NOQSW').innerText = currentNOQName
    document.getElementById('warningMessage').innerText = ""
}

function selectOOQ() {
    currentOOQ = currentOOQ + 1
    if (currentOOQ > numberOfOOQ) {
        currentOOQ = 0
    }
    currentOOQName = OOQOptions[currentOOQ]

    document.getElementById('OOQSW').innerText = currentOOQName
    document.getElementById('warningMessage').innerText = ""
}

function start() {
    console.log(currentGradeName)

    if (currentGradeName == "no" || currentNOQName == "no" || currentOOQName == "no") {
        document.getElementById('warningMessage').style.color = "#f00"
        document.getElementById('warningMessage').innerText = "未選択の項目があります"
    } else {
        document.getElementById('chosenGrade').innerText = currentGradeName
        document.getElementById('chosenNOQ').innerText = currentNOQName
        document.getElementById('chosenOOQ').innerText = currentOOQName


        document.getElementById('dialog001').style.display = "block"
    }
}

function dialogCLS() {
    document.getElementById('dialog001').style.display = "none"
}