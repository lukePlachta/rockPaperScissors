document.getElementById("nameChanger").onclick = function() {
    var nameEntered;
    nameEntered = document.getElementById("playerName").value;
    document.getElementById("enteredName").innerHTML = nameEntered;
}