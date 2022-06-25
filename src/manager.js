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
//url = "http://localhost:3000/users";
        request.open('GET', './data/users.json');
        request.send();
        request.onload =  () => {
            if (request.status != 200) {
                alert(`Error ${request.status}: ${request.statusText}`);
            } else {
                let users = JSON.parse(request.responseText).users;
                console.log(users);
                users.forEach(user => {
        
                    const tmp = document.getElementsByTagName("template")[0];
                    let element = tmp.content.cloneNode(true);
                
                    element.querySelector(".firstName").innerText = user.firstName; 
                    element.querySelector(".lastName").innerText = user.lastName; 
                    element.querySelector(".city").innerText = user.city; 
                    element.querySelector(".phone").innerText = user.phone; 
                    element.querySelector(".email").innerText = user.email; 
                    element.querySelector(".hight").innerText = user.hight; 
                    element.querySelector(".weight").innerText = user.weight[user.weight.length - 1]; 
                    element.querySelector(".BMI").innerText = user.weight[user.weight.length - 1]/(user.hight * user.hight); 

                    const c = document.getElementById('users');
                    c.appendChild(element)
                });
            }
        }
    }

}