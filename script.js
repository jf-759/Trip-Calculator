// Here are three references for the elements above.

const travelDistance = document.querySelector('#travelDistance')
const travelSpeedUnit = document.querySelector('#travelSpeedUnit')
const transportationType = document.querySelector('#transportationType')
const timeTraveled = document.querySelector('#timeTraveled')
const display = document.querySelector('#displayTimeTraveled')
const calculateButton = document.querySelector('#calculateButton')

// average speeds in miles per hour (mph)
const mph = {
  
  flight : 550, //average speed of a passenger plane
  car : 65, // average speed of a car on the highway
  train : 59, // average speed of a passenger train
  bulletTrain : 124,
  charterBus : 65,
  cityBus : 11,
  bike : 15,
  walk : 3,
}

// average speeds in kilometers per hour (km)

const km = {
  
  flight : 885.139, //average speed of a passenger plane, converted from mph
  car : 104.607, // average speed of a car on the highway, converted from mph
  train : 94.951, // average speed of a passenger train, converted from mph
  bulletTrain : 199.559,
  charterBus : 104.607,
  cityBus : 17.703,
  bike : 24.140,
  walk : 4.828,

}

// Function for calculating time.
// startLocation and Destination

const travelTime = (travelDistance, travelSpeedUnit) => {
  return travelDistance / travelSpeedUnit

}

function updateDisplay() {

    const distance = parseFloat(travelDistance.value) 
    const transportType = transportationType.value
    
    let speed

    if (travelSpeedUnit.value === 'mph') {
      speed = mph[transportType]; // Use mph speeds
      const time = travelTime(distance, speed);
      display.innerHTML = `Estimated Time Traveled in Miles: ${time.toFixed(2)} hours at ${speed.toFixed(2)} mph`
    } else if (travelSpeedUnit.value === 'km') {
      speed = km[transportType]; // Use km speeds
      const time = travelTime(distance, speed);
      display.innerHTML = `Estimated Time Traveled in Kilometers: ${time.toFixed(2)} hours at ${speed.toFixed(2)} km/h`
    } else {
      display.innerHTML = "Please select a valid speed unit (mph or km)."
    }
    
}


// travelSpeedUnit.addEventListener('change', (e) => {

//   e.preventDefault()
//   console.log('Selected travel speed unit: ', event.target.value)
//   updateDisplay()
// })

// transportationType.addEventListener('change', (e) => {
  
//   e.preventDefault()
//   console.log('Selected transportation mode:', event.target.value)
//   updateDisplay()
// })

calculateButton.addEventListener('click', (e) => {

  console.log('clicked after travel speed unit and transportation type have been selected', event.target.value)
  e.preventDefault()
  updateDisplay()
})