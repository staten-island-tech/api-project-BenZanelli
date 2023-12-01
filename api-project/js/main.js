DOMSelectors ={
    form: document.querySelector("#form"),
    itemname: document.querySelector("#item-name"),

}
function test(){
    let thing = DOMSelectors.itemname.value;
    thing = thing.replaceAll(' ','-')
    const URL = `https://www.dnd5eapi.co/api/spells/${thing}`; 
    console.log(URL)
}

DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    test()
});


