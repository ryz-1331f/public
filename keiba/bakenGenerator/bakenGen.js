//constant def
let ticketType = ""


//functions below
function menuHideToggle() {
    document.getElementById("menuToggleBtn").classList.toggle("is-active")
    document.getElementById("hamburgerMenues").classList.toggle("is-active")

}
function typeChosen(enteredText) {
    ticketType = enteredText
    document.getElementById('ticketType').value = ticketType
}