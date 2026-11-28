const baseLink = "/public/keiba/accounts/assignment.html"
const nowLink = location.href




let isGiven = localStorage.getItem("userID") !== null
//←コメントアウト12/05まで外さない
//if (isGiven === false) {                                                          
//    alert("権限が付与されていないため、権限付与ページに遷移します")
//    location.href = (`${baseLink}?from=${nowLink}`)
//}
const currentUserID = users[userID]?.[id]
const currentUserName = users[userID]?.["ja_name"]