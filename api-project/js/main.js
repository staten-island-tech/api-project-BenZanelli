
DOMSelectors ={
    form: document.querySelector("#form"),
    itemname: document.querySelector("#item-name"),
    parent: document.querySelector(".container"),
    bye:document.querySelectorAll(".remove"),
}
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
    let id= "adosfhadskf"
    function dmg(x){
        x = data.damage.damage_type.index;
        console.log(x)
    if(x == ""){
        x = "hi"
        console.log("Hi")
    }
console.log(x)
}
    dmg(id)
    console.log(id)
    console.log(data.name, data.damage.damage_type.index);
    DOMSelectors.parent.insertAdjacentHTML(
        "beforeend",
        `<div class='card' id=${data.damage.damage_type.index}>
        <h2 id="name" class="name">${data.name}</h2>
        <h3 id="price" class="name">${data.desc}</h3>
        <button class="but">REMOVE</button>
        </div>`
    )} catch (error){
        DOMSelectors.parent.insertAdjacentHTML(
            "beforeend",
            `<div class='card'>
            <h2 id="name" class="name">Not Found</h2>
            <button class="but">REMOVE</button>
            </div>`
        )}
}
function clearfields(){
    DOMSelectors.itemname.value = ''
}
DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    getData();
    clearfields();
    getrid();
});
function getrid(){
    let buttons = document.querySelectorAll(".but")
    buttons.forEach((btn)=> btn.addEventListener('click', function(event){
        btn.parentElement.remove();
    }))
} 