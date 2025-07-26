let friends = [];
let newFriendName = document.getElementById("friend");
let listAddedFriends = document.getElementById("listFriends");
let secretFriend = document.getElementById("secretFriend");

function addFriend(){
    addingName = newFriendName.value;
    if (addingName == "") {
        alert("Por favor, inserte un nombre");
    } else {
        friends.push(addingName);
        newFriendName.value = "";
        updateFriendList();
    }
}

function updateFriendList(){
    listAddedFriends.innerHTML = "";
    for (let i = 0; i  < friends.length; i++) {
        let li = document.createElement("li");
        li.textContent = friends[i];
        listAddedFriends.appendChild(li);
        
    }
}

function drawFriend(){
    if (friends.length == 0) {
        alert("Primero agrega amigos para sortear");
    } else {
        secretFriend.innerHTML = "";
        let randomSortNumber = Math.floor(Math.random() * friends.length);
        let li = document.createElement("li");
        li.textContent = `El amigo secreto es ${friends[randomSortNumber]}`
        secretFriend.appendChild(li);
    }
}