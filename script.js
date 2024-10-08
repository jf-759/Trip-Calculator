// Here are three references for the elements above.

const travelDistanceInput = document.querySelector('#travelDistance')
const travelSpeedInput = document.querySelector('#travelSpeed')
const transportationType = document.querySelector('#transportationType')
const timeTraveled = document.querySelector('#timeTraveled')
const display = document.querySelector('#displayTimeTraveled')

// average speeds in miles per hour (mph)
const mph = {
  
  flight : 550,
  car : 65,
  train : 59,
  bulletTrain : 124,
  charterBus : 65,
  cityBus : 11,
  bike : 15,
  walk : 3,
}

// average speeds in kilometers per hour (km)

const km = {
  
  flight : 885.139,
  car : 104.607,
  train : 94.951,
  bulletTrain : 199.559,
  charterBus : 104.607,
  cityBus : 17.703,
  bike : 24.140,
  walk : 4.828,

}

// Function for calculating time.
// startLocation and Destination

const travelTime = (travelDistance, travelSpeed) => {
  return travelDistance / travelSpeed

  // let travelTime = timeTraveled

}

function updateDisplay() {

    const distance = parseFloat(travelDistanceInput.value) 
    const speed = parseFloat(travelSpeedInput.value)
    // const speedUnit = parseFloat(speedUnit.value)

    let speedMph, speedKm

    if (speed === 'mph') {
      speedMph = travelSpeedInput || mph[transportationType.value]
      speedKm = speedMph * 1.60934
    }else{
      speedKm = travelSpeedInput || km[transportationType.value]
      speedMph = speedKm / 1.60934
    }

    if (isNaN(distance) || isNaN(speedMph) || isNaN(speedKm)) {
      display.innerHTML = "Please enter a valid distance and speed."
      return
    }

  const timeTraveledMph = travelTime(distance, speedMph)
  const timeTraveledKm = travelTime(distance, speedKm)
// Update the display element using the innerHTML
  const timeTraveled = travelTime(distance, speed)
  display.innerHTML = `
      Estimated Time Traveled: <br>
      - ${timeTraveledMph.toFixed(2)} hours at ${speedMph.toFixed(2)} mph <br>
      - ${timeTraveledKm.toFixed(2)} hours at ${speedKm.toFixed(2)} km/h
      `
  }
// Add event listeners to update the display whenever the inputs change
travelDistanceInput.addEventListener('input', updateDisplay)
transportationType.addEventListener('change', updateDisplay)
travelSpeedInput.addEventListener('input', updateDisplay)



updateDisplay()
// if (travelDistance, travelSpeed, timeTraveled) {
//     travelDistance.travelSpeed.timeTraveled.addEventListener("submit", function(event) {
//     event.preventDefault()
      
//   });
// } else {
//   console.error("Form element not found!");
// }
// Initial call to display the result with the default values

// updateDisplay()
