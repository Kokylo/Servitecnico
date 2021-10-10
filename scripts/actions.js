var ingr = document.getElementById("ingreso");
var creat = document.getElementById("creacion");
creat.hidden = true;

function hider() {
    if (ingr.hidden == true)
        ingr.hidden = false;
    else
        ingr.hidden = true;
    if (creat.hidden == true)
        creat.hidden = false;
    else
        creat.hidden = true;
}

function later() {
    alert("En construcción...")
}

function validator() {
    var i = 0;
    var perso =
        document.getElementsByName("btnradio");
    var name =
        document.getElementById("nombreC");
    var docu =
        document.getElementsByName("btnradio2");
    var identi =
        document.getElementById("identif");
    var pass1 =
        document.getElementById("pass1");
    var pass2 =
        document.getElementById("pass2");
    var email =
        document.getElementById("email1");
    var depart =
        document.getElementById("depart");
    var phone =
        document.getElementById("telef");

    if (perso[0].checked || perso[1].checked) {
        document.getElementById("juri").style.color = "#ffffff";
        document.getElementById("natu").style.color = "#ffffff";
    } else {
        i = 1;
        document.getElementById("juri").style.color = "red";
        document.getElementById("natu").style.color = "red";
    }

    if (name.value == "") {
        name.style.backgroundColor = "#FF040446";
        i = 1;
    } else name.style.backgroundColor = "#FFFFFFFF";

    if (docu[0].checked || docu[1].checked) {
        document.getElementById("nit").style.color = "#ffffff";
        document.getElementById("cedu").style.color = "#ffffff";
    } else {
        i = 1;
        document.getElementById("nit").style.color = "red";
        document.getElementById("cedu").style.color = "red";
    }

    if (identi.value == "") {
        identi.style.backgroundColor = "#FF040446";
        i = 1;
    } else identi.style.backgroundColor = "#FFFFFFFF";

    if (pass1.value == "") {
        pass1.style.backgroundColor = "#FF040446";
        i = 1;
    } else pass1.style.backgroundColor = "#FFFFFFFF";

    if (pass2.value == "") {
        pass2.style.backgroundColor = "#FF040446";
        i = 1;
    } else pass2.style.backgroundColor = "#FFFFFFFF";

    if (email.value == "") {
        email.style.backgroundColor = "#FF040446";
        i = 1;
    } else email.style.backgroundColor = "#FFFFFFFF";

    if (depart.selectedIndex < 1) {
        depart.style.backgroundColor = "#FF040446";
        i = 1;
    } else depart.style.backgroundColor = "#FFFFFFFF";

    if (phone.value == "") {
        phone.style.backgroundColor = "#FF040446";
        i = 1;
    } else phone.style.backgroundColor = "#FFFFFFFF";

    if (i == 1) {
        window.alert("No deje espacios sin diligenciar.");
        return false;
    } else {
        i = 0;
        return true;
    }


}