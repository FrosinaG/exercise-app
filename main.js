fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((json) => country(json));
var box = "";

function country(items) {

    for (var i = 0; i < items.length; i++)
        for (var key in items[i].languages) {
            box += `<div class="card">
       
        <div class="row">
        <div class="img-wrap">
        <img src="${items[i].flags.png}"/></div>
        <div class="text-wrap">
        <h2>${items[i].name.common}</h2>
        <p>${items[i].name.official}</p>
        <p>Capital city: ${items[i].capital}</p>
        <p> Region:${items[i].region}</p>
        <a href class="link">${items[i].maps.googleMaps}</a>
     <p class="time"> Time zones: ${items[i].timezones} </p>
     <p>languages:${items[i].languages[key]}</p>`
            box += `</div>
     </div></div>`;
        }
    console.log(box)
    document.getElementById('demo').innerHTML = box;



}