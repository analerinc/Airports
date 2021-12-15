function proveraForme(forma) {
    if (forma.ime.value === "" || forma.ime.value[0] !== forma.ime.value[0].toUpperCase()) {
        return false;
    }
    if (forma.prezime.value === "" || forma.prezime.value[0] !== forma.prezime.value[0].toUpperCase()) {
        return false;
    }

    return true;
}


window.onload = () => {
    document.getElementById("premium").onchange = function () {
        if (document.getElementById("premium").checked) {
            document.getElementById("sel1").disabled = false;
            promeniBoju();
        } else {
            document.getElementById("sel1").disabled = true;
            document.getElementById("submitbtn").style.backgroundColor = "white";
        }
    }

    document.getElementById("sel1").onchange = function () {
        promeniBoju();
    }
}

function promeniBoju() {
    if (document.getElementById("sel1").value === "1") {
        document.getElementById("submitbtn").style.backgroundColor = "silver";
    } else if (document.getElementById("sel1").value === "2") {
        document.getElementById("submitbtn").style.backgroundColor = "gold";
    } else if (document.getElementById("sel1").value === "3") {
        document.getElementById("submitbtn").style.backgroundColor = "skyblue";
    }
}

