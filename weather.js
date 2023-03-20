/* 
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit. 
For example, 283 K converts to 10 °C which converts to 50 °F.
*/

const kelvin = 293;

let celsius

celsius = kelvin - 273;

let fahrenheit

fahrenheit = celsius * (9/5) + 32;

fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.
`)