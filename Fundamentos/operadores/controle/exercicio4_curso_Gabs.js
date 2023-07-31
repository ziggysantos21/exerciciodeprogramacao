const prompt = require('prompt-sync')();

function fahrenheitToCelsius(f) {
    const celsius = (f - 32) * 5 / 9
    return celsius;
  }

const temperatureInFahrenheit = 50;
const convertedTemperature = fahrenheitToCelsius(temperatureInFahrenheit);
console.log(convertedTemperature); 