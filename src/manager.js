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
        request.onload =  () => {
            if (request.status != 200) {
                alert(`Error ${request.status}: ${request.statusText}`);
            } else {
                let users = JSON.parse(request.responseText).users;
                JSON.stringify(sessionStorage.setItem("users", users));
                console.log(users);
                users.forEach(user => {
                    this.users.push(user);
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
            console.log(this.users);
        }
    }


    searchByFName(){
        var data = document.getElementById("fname").value;   
        console.log(this.users)
        let filteredUser = this.users.filter((user) => {
            return user.firstName === data;
          });
          console.log(filteredUser);
          console.log(filteredUser[0].lastName);
        alert(filteredUser);
    }
    
    searchByLName(){
        var data = document.getElementById("lname").value;
        console.log(data);
       let filteredUser = this.users.filter((user) => {
            return user.lastName === data;
          });
          console.log(filteredUser);
          console.log(filteredUser[0].firstName);
        alert(filteredUser);
    }

    
    byBMIFunc = (arr, bmiMin, bmiMax) => {
        const ans = arr.filter(f => (f.weight.start / (f.hight * f.hight) > bmiMin) &&
            (f.weight.start / (f.hight * f.hight) < bmiMax));
        return ans;
    }
    searchByBMI(){
        debugger
        var minBMI = document.getElementById("minBMI").value;
        var maxBMI = document.getElementById("maxBMI").value;
      let arr = this.byBMIFunc(this.users,minBMI, maxBMI); 
          console.log(arr);
        //   console.log(filteredUser[0].firstName);
        alert(arr);
    };

}