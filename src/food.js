const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '071fae810amshb706a2052da6b94p190cadjsnf53c140ff392',
        'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
    }
};
function getNutritionalValues(){
    const food = document.getElementById('nutritionalValues').value;
    document.getElementById('nutritionalValues').value = "";
    if (food != ""){
        fetch(`https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${food}`, options)
        .then(response => response.json())
        .then(response => drew(response.items[0]))
        .catch(err => console.error(err));
    }
}


 function drew(food){
    let table = '';
    table+=`
    <tr class= "item">
    <th>${food.name}</th>
    <th>${food.calories}</th>
    <th>${food.cholesterol_mg}</th>
    <th>${food.sugar_g}</th>
    <th>${food.fiber_g}</th>
    <th>${food.serving_size_g}</th>
    <th>${food.sodium_mg}</th>
    <th>${food.potassium_mg}</th>
    <th>${food.fat_saturated_g}</th>
    <th>${food.fat_total_g}</th>
    <th>${food.protein_g}</th>
    <th>${food.carbohydrates_total_g}</th>
    </tr> `
    const container = document.querySelector('.foodTable')
    container.innerHTML +=table;
}