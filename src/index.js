
const onload = () => {
    a = new Address("street", "debugger", 8);
    m = new Manager(1, "firstName", "lastName", a, 454567, "gh@gmail.com");
    m.getAll();
}
function option() {
    const e = document.getElementById("selectSearch");
    const type = e.value;
    alert(type) 
    filterByType(type);
}

function filterByType(type) {

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

function toFoodPage(){
    window.location.href = "food.html";
}