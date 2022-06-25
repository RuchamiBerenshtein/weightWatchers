class Manager {

    constructor(id, firstName, lastName, address, phone, email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = new Address(address.city, address.street, address.number);
        this.phone = phone;
        this.email = email;
        this.users = [];
    }

    getAll() {
        const request = new XMLHttpRequest()
        request.open('GET', './data/users.json');
        request.send();
        request.onload = () => {
            if (request.status != 200) {
                alert(`Error ${request.status}: ${request.statusText}`);
            } else {
                let users = JSON.parse(request.responseText).users;
                this._displayUsers(users);
            }
        }
    }


    _displayUsers(users) {
        const tBody = document.getElementById('users');
        tBody.innerHTML = '';

        const button = document.createElement('button');

        users.forEach(user => {

            let userDetails = button.cloneNode(false);
            userDetails.innerText = 'Details';
            userDetails.setAttribute('onclick', `changePage(${user.id})`);

            let tr = tBody.insertRow();

            let td1 = tr.insertCell(0);
            let textNodeFirstName = document.createTextNode(user.firstName);
            td1.appendChild(textNodeFirstName);

            let td2 = tr.insertCell(1);
            let textNodeLastName = document.createTextNode(user.lastName);
            td2.appendChild(textNodeLastName);
            let td3 = tr.insertCell(2);
            let textNodeBMI = document.createTextNode(user.weight[user.weight.length - 1] / (user.hight * user.hight));
            if (user.weight.length > 1) {
                if (user.weight[user.weight.length - 1] / (user.hight * user.hight) >= user.weight[user.weight.length - 2] / (user.hight * user.hight)) {
                    td3.style.color = 'red';
                } else {
                    td3.style.color = 'green';
                }
            }
            td3.appendChild(textNodeBMI);

            let td4 = tr.insertCell(3);
            td4.appendChild(userDetails);
        });
    }
}

const changePage = (id) => {
    location.href = `/userDetails.html?id=${id}`
}