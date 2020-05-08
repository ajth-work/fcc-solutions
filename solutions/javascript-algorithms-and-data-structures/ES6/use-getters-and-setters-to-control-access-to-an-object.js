// Only change code below this line
class Thermostat {
  constructor(temperature) {
    this._temperature = ((5/9) * (temperature - 32));
  }
  // getter
  get temperature() {
    return this._temperature;
  }
  // setter
  set temperature(updatedTemperature) {
    this._temperature = updatedTemperature;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
