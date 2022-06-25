const searchParams = new URLSearchParams(location.search);
const id = parseInt(searchParams.get('id'));
if (!id) {
    location.href = '/index.html';
}

// const user = null;


const findUser = () => {
    const request = new XMLHttpRequest()
    request.open('GET', './data/users.json');
    request.send();
    request.onload = () => {
        if (request.status != 200) {
            alert(`Error ${request.status}: ${request.statusText}`);
        } else {
            let users = JSON.parse(request.responseText).users;
            const user = users.find(u => u.id === id);
            showUserDetails(user);
        }
    }
}

const showUserDetails = (user) => {
    document.getElementById('firstName').innerHTML = user.firstName;
    document.getElementById('lastName').innerHTML = user.lastName;
    document.getElementById('address').innerHTML = user.address.city + ", " + user.address.street + " " + user.address.number;
    document.getElementById('phone').innerHTML = user.phone;
    document.getElementById('email').innerHTML = user.email;
    document.getElementById('hight').innerHTML = user.hight;
    document.getElementById('currentWeight').innerHTML = user.weight[user.weight.length - 1];
    let weights = "";
    for (let i = 0; i < user.weight.length-1; i++){
        weights += "<br/>" + user.weight[i];
    }
    document.getElementById('weightHistory').innerHTML = weights;
    document.getElementById('BMI').innerHTML = user.weight[user.weight.length - 1] / (user.hight * user.hight);
}
findUser();