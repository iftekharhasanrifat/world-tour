fetch('https://restcountries.eu/rest/v2/all')
.then(res=> res.json())
.then(data=>displayCountries(data));

const displayCountries = countries=>{
    const countriesDiv=document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv= document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo =`
            <h3 class = "country-name">${country.name}</h3>
            <p>${country.capital}</p>
            <button onClick="displayCountryDetail('${country.name}')">Show details</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });


    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     // console.log(country.name);
        // const countryDiv= document.createElement('div');
        // countryDiv.className = 'country';
        // const countryInfo =`
        //     <h3 class = "country-name">${country.name}</h3>
        //     <p>${country.capital}</p>
        // `;
        // countryDiv.innerHTML = countryInfo;
    //     // const h3 = document.createElement('h3');
    //     // const p = document.createElement('p');
    //     // h3.innerText = country.name;
    //     // p.innerText = country.capital;
    //     // countryDiv.appendChild(h3);
    //     // countryDiv.appendChild(p);
    //     countriesDiv.appendChild(countryDiv);
    // }
}
const displayCountryDetail = name=>{
    const url=`https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>renderCountryInfo(data[0]));
}

const renderCountryInfo = country=>{
    const countryDiv =document.getElementById('countryDetail');
    countryDiv.innerHTML=`
        <h1>${country.name}</h1>
        <p>population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <img src="${country.flag}">
    `;
}
