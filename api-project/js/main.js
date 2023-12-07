DOMSelectors ={
    form: document.querySelector("#form"),
    itemname: document.querySelector("#item-name"),
    parent1: document.querySelector(".container1"),
    parent2: document.querySelector(".container2")
}
async function populate(){
    let URL = `https://www.dnd5eapi.co/api/spells/`; 
    
    console.log(URL)
    const response = await fetch(URL);
    const data = await response.json();
    let index = 
    let URL2 = `https://www.dnd5eapi.co/api/spells/`;
    const response2 = await fetch(URL2)
    const data2 = await response2.json(); 
    
    try {
        console.log(response);
        console.log(response2)
    if (response.status !=200){
        throw new Error(response.statusText);
    }

        let id = ""
     /* if(data.hasOwnProperty("damage")){
        id = data.damage.damage_type.index
    }else if(data.hasOwnProperty("heal_at_slot_level")){
        id= "heal"
    }else{
        id=data.school.index
    } */ 
    data.results.forEach(element => DOMSelectors.parent1.insertAdjacentHTML(
        "beforeend",
        `<div class='catalouges' id="hi">
        <h2 id="asdf" class="title">${element.name}</h2>
        </div>`
    ));
}
catch (error){
        alert("Enter a valid spell")
     }
    
    



} 
populate()
async function getData(){
    let thing = DOMSelectors.itemname.value.toLowerCase();
    thing = thing.replaceAll(' ','-')
    let URL = `https://www.dnd5eapi.co/api/spells/${thing}`; 
    console.log(URL)
    try {
        const response = await fetch(URL);
        console.log(response);
    if (response.status !=200){
        throw new Error(response.statusText);
    }
    const data = await response.json(); 
    let id = ""
    if(data.hasOwnProperty("damage")){
        id = data.damage.damage_type.index
    }else if(data.hasOwnProperty("heal_at_slot_level")){
        id= "heal"
    }else{
        id=data.school.index
    }
    console.log(data.name, id);
   DOMSelectors.parent2.insertAdjacentHTML(
        "afterbegin",
        `<div class='card' id=${id}>
        <h2 id="name" class="name">${data.name}</h2>
        <h3 id="price" class="name">${data.desc}</h3>
        <button class="btn">REMOVE</button>
        </div>`
    )
    } catch (error){
       alert("Enter a valid spell")
    }
}
function clearfields(){
    DOMSelectors.itemname.value = ''
}
function byebye(){
    let buttons = document.querySelectorAll(".btn")
    buttons.forEach((btn)=> btn.addEventListener('click', function(event){
        btn.parentElement.remove();
    }))
}
DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    getData();
    clearfields();
    byebye()
});

