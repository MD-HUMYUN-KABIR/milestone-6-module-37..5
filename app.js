// https://openweathermap.org/api    Built-in API request by city name  
// Units of measurement
//NEWS 9e880a54c1c7444282db2aa0fe9dd04c

//API KEY IS SECTrete do not show on js file
const api_key = `d6cecf1187395d3225a6df68443486ed`;

const loadTemperature = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    const res = await fetch(url)
    const data = await res.json()
    displayTemperature(data);
}

const displayTemperature = data => {
  setInnerText('temperature',data.main.temp);
  setInnerText('condition', data.weather[0].main);
}

const setInnerText = (id,text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}
document.getElementById('btn-search').addEventListener('click',function(){
  const city =  document.getElementById('input-field').value;
  document.getElementById('city').innerText = city;

  loadTemperature(city);
})

loadTemperature('dhaka');