let friends = [];
let newFriendName = document.getElementById("friend");
let listAddedFriends = document.getElementById("listFriends");

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