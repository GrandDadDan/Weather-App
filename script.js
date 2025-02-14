const cityInput = document.querySelector('.city-input');
const searchBtn = document.querySelector('.search-btn');

const apiKey = '8dbc722b1ba22c52e526eb9b6fa43e87'

const notFoundSection = document.querySelector('.not-found')
const searchCitySection = document.querySelector('.search-city');

searchBtn.addEventListener('click', ()=>{
    if (cityInput.value.trim() != ''){
        updateWeatherInfo(cityInput.value)
        cityInput.value = '';
        cityInput.blur()
    }
})

cityInput.addEventListener('keydown',(event) =>{
    if (event.key == 'Enter' && cityInput.value.trim() != ''){
        updateWeatherInfo(cityInput.value)
        cityInput.value = '';
        cityInput.blur()
    }
    
})

async function getFetchData(endPoint, city){
   const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`

   const response =await fetch(apiUrl)
    
   return response.json()
}

async function updateWeatherInfo(city){
    const weatherData = await getFetchData('weather', city)

    if (weatherData.weatherData.cod != 200){
        showDisplaySection(notFoundSection)
        return
    }
    
}

function showDisplaySection(section) {

}