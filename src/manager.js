class Manager {

    url = "http://localhost:3000/users";

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
                this.showUsers(users);
            }
        }
    }

    showUsers = (users) => {
        users.forEach(user => {

            const tmp = document.getElementsByTagName("template")[0];
            let element = tmp.content.cloneNode(true);

            element.querySelector(".firstName").innerText = user.firstName;
            element.querySelector(".lastName").innerText = user.lastName;
            element.querySelector(".city").innerText = user.address.city;
            element.querySelector(".phone").innerText = user.phone;
            element.querySelector(".email").innerText = user.email;
            element.querySelector(".hight").innerText = user.hight;
            element.querySelector(".weight").innerText = user.weight[user.weight.length - 1];
            element.querySelector(".BMI").innerText = user.weight[user.weight.length - 1] / (user.hight * user.hight);
            if (user.weight.length > 1) {
                if (user.weight[user.weight.length - 1] / (user.hight * user.hight) >= user.weight[user.weight.length - 2] / (user.hight * user.hight)) {
                    element.querySelector(".BMI").style.color = 'red';
                } else {
                    element.querySelector(".BMI").style.color = 'green';
                }
            }

            const userTable = document.getElementById('users');
            userTable.appendChild(element)
        });
    }

}