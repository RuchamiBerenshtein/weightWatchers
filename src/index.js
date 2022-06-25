
const onload = () => {
    a = new Address("street", "debugger", 8);
    m = new Manager(1, "firstName", "lastName", a, 454567, "gh@gmail.com");
    m.getAll();
}
function option() {
    var e = document.getElementById("selectSearch");
    var strUser = e.value;
    alert(strUser) 
    filterByType(strUser);
}

function filterByType(strUser) {

    if (strUser === "searchByFName") {
        document.getElementById("firstName").style.display = "block"
        document.getElementById("lastName").style.display = "none" 
        document.getElementById("BMI").style.display = "none"
    }
    if (strUser === "searchByLName") {
        document.getElementById("lastName").style.display = "block"
        document.getElementById("firstName").style.display = "none"
        document.getElementById("BMI").style.display = "none"
    }
    if (strUser === "searchByBMI") {
        document.getElementById("BMI").style.display = "block"
        document.getElementById("firstName").style.display = "none"
        document.getElementById("lastName").style.display = "none"
    }

}
function searchByFName(){
    m.searchByFName();
}

function searchByLName(){
    m.searchByLName();
}

function searchByBMI(){
    m.searchByBMI();
}