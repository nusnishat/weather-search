const weatherLoad = () =>{
    // get the searched text
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // api connection
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=075a7af654343d5a13026226dc0a891b`)
    .then(response => response.json())
    .then(data => weatherDisplay(data,searchText))
    .catch(error => errorDisplay());
    // clean the searchField
    searchField.value = '';
}

const weatherDisplay = (weather, city) =>{
    const weatherDisplayField = document.getElementById('wather-display');
    weatherDisplayField.textContent = '';
    const tempFloat = parseFloat(weather.main.temp)-273.15;
    const temp = Math.ceil(tempFloat);
    console.log(temp);

    const div = document.createElement('div');
    div.classList.add('text-center','text-white');
    div.innerHTML= `
      <h3 class="fs-1 text-capitalize">${city}</h3>
      <h3 class="fs-3">${temp}°C</h3>
      <p class="fs-5">${weather.weather[0].main}</p>
    `
    weatherDisplayField.appendChild(div);
}
const errorDisplay = () => {
    alert('Somenthing went wrong. Try with a valid city name.');
}
