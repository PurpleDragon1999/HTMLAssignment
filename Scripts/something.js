function saveInWebStorage(){
    var name = document.getElementById("naam").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var msg = document.getElementById("msg").value;
    var gM = document.getElementById("m");
    var gF = document.getElementById("f");
    var gO = document.getElementById("o");
    var cE = document.getElementById("em");
    var cP = document.getElementById("ph");

    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        localStorage.setItem("Name", name);
        localStorage.setItem("Email", email);
        localStorage.setItem("Phone", phone);
        localStorage.setItem("Msg", msg);
        if(gM.checked == true)  localStorage.setItem("Gender", "MALE");
        else if(gF.checked ==true) localStorage.setItem("Gender", "FEMALE");
        else localStorage.setItem("Gender", "OTHER");

        if(cE.checked == true) localStorage.setItem("Contact", "Email");
        else if(cP.checked == true) localStorage.setItem("Contact", "Phone");
        else if(cE.checked == true && cP.checked == true) localStorage.setItem("Contact", "Email & Phone");
        else localStorage.setItem("Contact", "None");
        
        alert("Yippeee-ki-Yay");
    } else {
        // Sorry! No Web Storage support..
        alert("Sorry ! Your browser is not cool.");
    }
}