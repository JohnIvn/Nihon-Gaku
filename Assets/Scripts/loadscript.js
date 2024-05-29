function err404() {
    setTimeout(function() {
        window.location.href = "Pages/EN-JP/en-jp-home.html"; 
    }, 1000); 
}


window.onload = err404;