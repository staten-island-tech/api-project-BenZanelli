
const URL = `https://www.dnd5eapi.co/api/spells`;
async function getData(URL){
    try {
        const response = await fetch(URL);
        response.foreach((el)=>console.log(el.index))}
    catch(error){}
}
getData(URL)

