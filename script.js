// Here are three references for the elements above.

const travelDistance = document.querySelector('#travel-distance')
const travelSpeed = document.querySelector('#travel-speed')
const transportationType = document.querySelector('transportation-type')
const timeTraveled = document.querySelector('#time-traveled')
const display = document.querySelector('#display-timeTraveled')


// Function for calculating time.
// startLocation and Destination

const travelTime = (travelDistance, travelSpeed) => {
    return travelDistance / travelSpeed

    let travelTime = timeTraveled

  }
// average speeds in miles per hour (mph)

const mph = {
  
  flight : 550,
  car : 65,
  train : 59,
  bullet_train : 124,
  charter_bus : 65,
  city_bus : 11,
  bike : 15,
  walk : 3,
}

// average speeds in kilometers per hour (km)

const km = {
  
  flight : 885.139,
  car : 104.607,
  train : 94.951,
  bullet_train : 199.559,
  charter_bus : 104.607,
  city_bus : 17.703,
  bike : 24.140,
  walk : 4.828,

}

function updateDisplay() {

    const travelDistance = parseFloat(travelDistance.value) 
    const travelSpeed = parseFloat(travelSpeed.value) 


    display.innerHTML = `Estimated Time Traveled: ${timeTraveled.toFixed(2)} hours`

    if (isNaN(travelDistance))
      alert("Please enter a valid distance.")
      return
}


// Update the display element using the innerHTML


// Add event listeners to update the display whenever the inputs change
travelDistance.addEventListener('input', display)
travelSpeed.addEventListener('input', display)
timeTraveled.addEventListener('submit', display)

if (travelDistance, travelSpeed, timeTraveled) {
    travelDistance.travelSpeed.timeTraveled.addEventListener("submit", function(event) {
    event.preventDefault()
      
  });
} else {
  console.error("Form element not found!");
}
// Initial call to display the result with the default values

updateDisplay()
