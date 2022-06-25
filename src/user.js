class User {

    constructor(id, firstName, lastName, address, phone, email, hight, weight) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address
        this.phone = phone;
        this.email = email;
        this.hight = hight;
        this.weight = [];
        this.weight.push(weight);
    }


   post(newUser) {

    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText);
            console.log(response);
        }
    };
    xhr.open('POST', '../data/users.json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(newUser));
    }
}
