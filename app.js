
const config ={
  apiUrl : 'https://api.countrystatecity.in/v1/countries',
  apiKey : 'YOUR API KEY'
}


var selectCountry = document.querySelector('.country'),
    selectState = document.querySelector('.state')


function loadCountries(){
  selectState.disabled = true;

  fetch(config.apiUrl,{headers:{"X-CSCAPI-KEY": config.apiKey}})
  .then(response => response.json())
  .then(data =>{
    // console.log(data)
    
    data.forEach(country => {
      const option = document.createElement('option')
      option.value = country.iso2
      option.textContent = country.name
      selectCountry.appendChild(option)
    });
  })
  .catch(error => console.log('Error loading countries, ', error))
 
}


function loadStates(){
  selectState.disabled = false;

  const selectedCountryCode = selectCountry.value;
  // console.log(selectedCountryCode)

  fetch(`${config.apiUrl}/${selectedCountryCode}/states`,{headers:{"X-CSCAPI-KEY": config.apiKey}})
  .then(response => response.json())
  .then(data =>{
    // console.log(data)

    data.forEach(state =>{
      const option = document.createElement('option')
      option.value = state.iso2
      option.textContent = state.name
      selectState.appendChild(option) 
    })
  })
  .catch(error => console.error('Error loading states: ',error))
}


window.onload = loadCountries;


