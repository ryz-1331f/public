let isGiven = localStorage.getItem("userID") !== null                            
if (isGiven === false) {                                                          
    alert("権限が付与されていないため、権限付与ページに遷移します")
    location.href('https://')
}