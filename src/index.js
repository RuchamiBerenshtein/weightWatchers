
const onload = () => {
    a = new Address("street", "debugger", 8);
    m = new Manager(1, "firstName", "lastName", a, 454567, "gh@gmail.com");
    m.getAll();
}

const newUser = () =>{
    document.getElementById("newUser").style.display = "block"
}

 function createUser() {
    debugger
    var firstName = document.getElementById("lname").value;
    var lastName = document.getElementById("fname").value;
    var city = document.getElementById("city").value;
    var street = document.getElementById("street").value;
    var number = document.getElementById("number").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var hight = document.getElementById("hight").value;
    var weight = document.getElementById("weight").value;
    const newAddress = new Address(city, street, number)
    const newUser = new User(firstName, lastName, newAddress, phone, email, hight, weight);
    newUser.post(newUser);

}  

