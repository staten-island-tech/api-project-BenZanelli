/* import { getData } from "./expands";*/
DOMSelectors ={
    form: document.querySelector("#form"),
    itemname: document.querySelector("#item-name"),
    parent1: document.querySelector(".container1"),
    parent2: document.querySelector(".container2"),
    h2s: document.querySelectorAll(".h2s"),
    filtering: document.querySelectorAll(".spells"),
    allcards: document.querySelectorAll(".card"),
    thing: document.querySelectorAll(".title")
}
let URL2 = `https://www.dnd5eapi.co/api/spells/`; 
async function populate(x){
    console.log(x)
    const response = await fetch(x);
    const data = await response.json();
    try {
        console.log(response);
    if (response.status !=200){
        throw new Error(response.statusText);
    }
   data.results.forEach((el)=>DOMSelectors.parent1.insertAdjacentHTML(
        "beforeend",
        `<div class='card' id=${el.index}>
        <h3 id="asdf" class="title">${el.name}</h3>
        <img class="img" alt="plus-sign">
        </div>`
    ));
    expands()
}
catch (error){alert("404 not found")}} 
populate(URL2)

function clearfields(){
    DOMSelectors.itemname.value = ''
} 

/* function byebye() {
    DOMSelectors.parent2.addEventListener('click', function(event) {
        if (event.target.classList.contains('btn')) {
            event.target.parentElement.remove();
        }
    })}
    
DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    getData();
    clearfields();
    byebye()
}); */
function filters(){
    DOMSelectors.filtering.forEach((el) => el.addEventListener("click", wabungus));
function wabungus(){
    let category = this.id
async function real(){
    if(category==="all"){
    DOMSelectors.parent1.innerHTML = ""
    DOMSelectors.parent2.innerHTML = ""
    populate(URL2)
}else{
    let newURL =  `https://www.dnd5eapi.co/api/classes/${category}/spells`;
    DOMSelectors.parent1.innerHTML = ""
    DOMSelectors.parent2.innerHTML = ""
    populate(newURL)
}}
real()
}}
filters()
function expands(){
    let x = document.querySelectorAll(".card")
    x.forEach((el)=>el.addEventListener("click", async function(){
        getData(this.id)
    }))
}
expands()
async function getData(x){

    let URL = `https://www.dnd5eapi.co/api/spells/${x}`; 
    console.log(URL)
    try {
        const response = await fetch(URL);
        console.log(response);
    if (response.status !=200){
        throw new Error(response.statusText);
    }  
    DOMSelectors.parent1.innerHTML="";
    DOMSelectors.parent2.innerHTML="";
    const data = await response.json(); 
    let id = ""
    let dmg = ""
    if(data.hasOwnProperty("damage")){
        id = data.damage.damage_type.index.toLowerCase()
        dmg = ", "+data.damage.damage_type.name+" Damage"
   
    }else if(data.hasOwnProperty("heal_at_slot_level")){
        id= "heal"
        dmg= ", Healing"
     
    }else{
        id=data.school.index
        dmg=""
    }
    console.log(data.name, id);
   DOMSelectors.parent2.insertAdjacentHTML(
        "afterbegin",
        `<div class='newcard' id=${id}>
        <h2 id="name" class="name">${data.name}</h2>
        <h3 id="price" class="name">${data.desc}</h3>
        <h4 id="school" class="name">${data.school.name}${dmg}</h4>
        <h5 id="time" class="name">${data.casting_time}</h5>
        <button class="btn">BACK</button>
        </div>`
    )
    } catch (error){
       alert("Spell not Found")
    }
}
function insert(){
    DOMSelectors.form.addEventListener('submit',function(event){
        event.preventDefault()
        let x = DOMSelectors.itemname.value.toLowerCase()
        let y = x.replaceAll(' ','-')
        console.log(y)
        getData(y)
        clearfields()
    })
}
insert()
function byebye() {
    DOMSelectors.parent2.addEventListener('click', function(event) {
        if (event.target.classList.contains('btn')) {
        DOMSelectors.parent2.innerHTML=""
        populate(URL2)
        }
})}
byebye()