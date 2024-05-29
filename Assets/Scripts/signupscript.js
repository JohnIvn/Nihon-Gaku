function validateForm(event) {
    var email = document.getElementById("floatingInput").value;
    var password = document.getElementById("floatingPassword").value;
    if (email === "" || password === "") {
        alert("Please fill in both fields.");
        event.preventDefault(); 
    } else {
        window.location.href = "en-jp-create.html";
    }
}