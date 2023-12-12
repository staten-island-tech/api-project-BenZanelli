DOMSelectors ={
    form: document.querySelector("#form"),
    itemname: document.querySelector("#item-name"),
    parent1: document.querySelector(".container1"),
    parent2: document.querySelector(".container2"),
}
let URL2 = `https://www.dnd5eapi.co/api/spells/`; 
async function populate(){
    console.log(URL2)
    const response = await fetch(URL2);
    const data = await response.json();
    try {
        console.log(response);
    if (response.status !=200){
        throw new Error(response.statusText);
    }
    data.results.forEach((link)=> thing(link.url));
   async function thing(x){
        let id ="ok"
        let url = "https://www.dnd5eapi.co"+x;
        const response2 = await fetch(url);
        const data2 = await response2.json();
        console.log(data2)
        if(data2.hasOwnProperty("damage")){
           id= data2.damage.damage_type.index

        }else if(data2.hasOwnProperty("heal_at_slot_level")){
            id= "heal"
        }else{
            id= data2.school.index
        } DOMSelectors.parent1.insertAdjacentHTML(
        "beforeend",
        `<div class='catalouges' id="${id}">
        <h2 id="asdf" class="title">${data2.name}</h2>
        </div>`
    );}
    
}
catch (error){alert("Enter a valid spell")}} 
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
function byebye() {
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
});
function expand(){
    let btn = document.querySelectorAll(".catalouges")
    btn.forEach((el)=> el.addEventListener("click", function(){
        console.log("hi")
    }))
}
expand()