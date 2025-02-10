let friends = [];

function addFriend() {
    const name = document.getElementById('friend').value;

    if (name === '') {
        return alert('Enter a name');        
    }

    if (friends.indexOf(name) !== -1) {
        return alert('Duplicate names cannot be added');        
    }

    friends.push(name);
    updateFriendList();
}

function updateFriendList() {
    const addList = document.getElementById('friendList');
    addList.innerHTML = ''; 

    for (let i = 0; i < friends.length; i++) {
        const li = document.createElement('li');
        li.textContent = friends[i];
        addList.appendChild(li);
    }
}

function drawFriend(){
    if (friends.length === 0) {
        return alert('Add friends before drawing');
    }

    const draw = Math.floor(Math.random() * friends.length);
    const drawn = friends[draw];

    const addList = document.getElementById('result');
    addList.innerHTML = '<li>' + drawn + '</li>';
}