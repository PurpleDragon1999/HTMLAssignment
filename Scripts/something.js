function saveInWebStorage(){
    var name = document.getElementById("naam").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var msg = document.getElementById("msg").value;

    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        localStorage.setItem("Name", name);
        localStorage.setItem("Email", email);
        localStorage.setItem("Phone", phone);
        localStorage.setItem("Msg", msg);
        alert("Yippeee-ki-Yay");
    } else {
        // Sorry! No Web Storage support..
        alert("Sorry ! Your browser is not cool.");
    }
}