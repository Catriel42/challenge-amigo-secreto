let friends = [];
let newFriendName = document.getElementById("friend");

function addFriend(){
    addingName = newFriendName.value;
    if (addingName == "") {
        alert("Por favor, inserte un nombre");
    } else {
        friends.push(addingName);
        newFriendName.value = "";
        console.log(addingName);
    }   
}