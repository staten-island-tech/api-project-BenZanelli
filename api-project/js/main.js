DOMSelectors ={
    form: document.querySelector("#form"),
    itemname: document.querySelector("#item-name"),
    parent: document.querySelector(".container"),
}
async function getData(){
    let thing = DOMSelectors.itemname.value.toLowerCase();
    thing = thing.replaceAll(' ','-')
    let URL = `https://www.dnd5eapi.co/api/spells/${thing}`; 
    try {
        const response = await fetch(URL);
        console.log(response);
    if (response.status !=200){
        throw new Error(response.statusText);
    }
    const data = await response.json();
    
    } catch (error){
      
    }
   
}

DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    getData();
});


