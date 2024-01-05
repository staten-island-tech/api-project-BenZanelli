/* export async function getData(x){

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
        <p id="price" class="name">${data.desc}</p>
        <h3 id="school" class="name">${data.school.name}${dmg}</h3>
        <h4 id="time" class="name">${data.casting_time}</h4>
        <button class="btn">BACK</button>
        </div>`
    )
    } catch (error){
       alert("Spell not Found")
    }
} */