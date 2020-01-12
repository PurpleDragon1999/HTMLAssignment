function saveInWebStorage(){
    var name = document.getElementById("naam").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var msg = document.getElementById("msg").value;
    var gM = document.getElementById("m");
    var gF = document.getElementById("f");
    var gO = document.getElementById("o");

    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        localStorage.setItem("Name", name);
        localStorage.setItem("Email", email);
        localStorage.setItem("Phone", phone);
        localStorage.setItem("Msg", msg);
        if(gM.checked == true)  localStorage.setItem("Gender", "MALE");
        else if(gF.checked ==true) localStorage.setItem("Gender", "FEMALE");
        else localStorage.setItem("Gender", "OTHER");
        alert("Yippeee-ki-Yay");
    } else {
        // Sorry! No Web Storage support..
        alert("Sorry ! Your browser is not cool.");
    }
}