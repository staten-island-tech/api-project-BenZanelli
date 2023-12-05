
DOMSelectors ={
    form: document.querySelector("#form"),
    itemname: document.querySelector("#item-name"),
    parent: document.querySelector(".container"),
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
    console.log(data.name, data.damage.damage_type.index);
    DOMSelectors.parent.insertAdjacentHTML(
        "beforeend",
        `<div class='card'>
        <h2 id="name" class="name">${data.name}</h2>
        <h3 id="price" class="name">${data.desc}</h3>
        </div>`
    )} catch (error){
        DOMSelectors.parent.insertAdjacentHTML(
            "beforeend",
            `<div class='card'>
            <h2 id="name" class="name">Not Found</h2>
            </div>`
        )}
}
function clearfields(){
    DOMSelectors.itemname.value = ''
}
DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    getData();
    clearfields()
});
