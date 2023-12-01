DOMSelectors ={
    form: document.querySelector("#form"),
    itemname: document.querySelector("#item-name"),

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
    document.querySelector("h1").textContent= data.name;
    document.querySelector("h2").textContent= data.desc;
    } catch (error){
      
    }
   
}

DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    getData();
});


