document.getElementById('dialog001').style.display = "none"

let currentGrade = -1
let currentGradeName = "no"
const gradeOptions = ["全て","ジュニア級","クラシック級"]
const numberOfGrade = gradeOptions.length - 1

let currentNOQ = -1
let currentNOQName = "no"
const NOQOptions = ["あるだけ","1問","10問","20問"]
const numberOfNOQ = NOQOptions.length - 1

let currentOOQ = -1
let currentOOQName = "no"
const OOQOptions = ["昇順","降順","ランダム"]
const numberOfOOQ = OOQOptions.length - 1

let currentDFC = 0
let currentDFCName = "no"

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

function check() {
    if (currentGradeName == "no" || currentNOQName == "no" || currentOOQName == "no" || currentDFCName == "no") {
        document.getElementById('warningMessage').style.color = "#f00"
        document.getElementById('warningMessage').innerText = "未選択の項目があります"
        if (currentDFCName == "no") {
           document.getElementById('warningMessage').innerText = "未選択の項目があります \n 難易度は1つ以上選択してください" 
        }
    } else {
        document.getElementById('chosenGrade').innerText = currentGradeName
        document.getElementById('chosenNOQ').innerText = currentNOQName
        document.getElementById('chosenOOQ').innerText = currentOOQName
        document.getElementById('chosenDFC').innerText = currentDFCName


        document.getElementById('dialog001').style.display = "block"
    }
}

function dialogCLS() {
    document.getElementById('dialog001').style.display = "none"
}

function start() {
    location.href = `./questions/?grd=${currentGrade}&noq=${currentNOQ}&ooq=${currentOOQ}&dfc=${currentDFC}`
}

let DFCALLState = 0
let DFC01State = 0
let DFC02State = 0

function DFCAll() {
    if (DFCALLState == 0) {
        DFCALLState = 1
        DFC01State = 1
        DFC02State = 1
    } else if (DFCALLState == 1) {
        DFCALLState = 0
        DFC01State = 0
        DFC02State = 0
    }
    DFCReload()
}
function DFC01() {
    if (DFC01State == 0) {
        DFC01State = 1
    } else if (DFC01State == 1) {
        DFC01State = 0
    }
    DFCReload()
}
function DFC02() {
    if (DFC02State == 0) {
        DFC02State = 1
    } else if (DFC02State == 1) {
        DFC02State = 0
    }
    DFCReload()
}
function DFCReload() {
    currentDFCName = ""
    if (DFC01State == 0) {
        document.getElementById('DFCSW01').style.background = '#fff'
        currentDFCName = currentDFCName
    } else if (DFC01State == 1) {
        document.getElementById('DFCSW01').style.background = '#faa'
        currentDFCName = currentDFCName + "基礎"
        currentDFC = 1
    }

    if (DFC02State == 0) {
        document.getElementById('DFCSW02').style.background = '#fff'
        currentDFCName = currentDFCName
    } else if (DFC02State == 1) {
        document.getElementById('DFCSW02').style.background = '#faa'
        if (currentDFCName == "") {
            currentDFCName = currentDFCName + "応用"
            currentDFC = 3
        } else if (currentDFCName != "") {
            currentDFCName = currentDFCName + ",応用"
            currentDFC = 2
        }
    }
    if (currentDFCName == "") {
        currentDFCName = "no"
    }
}