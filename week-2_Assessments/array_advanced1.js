/**
 * Assignment 1: Daily Temperature Analyzer
 * Demonstrates the use of filter, map, reduce, find, and findIndex on numeric arrays.
 */

const temperatures = [32, 35, 28, 40, 38, 30, 42];
console.log("Original Temperatures (Celsius):", temperatures);

// 1. filter() temperatures above 35
const hotDays = temperatures.filter((temp) => temp > 35);
console.log("Temperatures above 35°C:", hotDays);

// 2. map() to convert all temperatures from Celsius to Fahrenheit
const temperaturesInFahrenheit = temperatures.map((temp) => (temp * 9) / 5 + 32);
console.log("Temperatures in Fahrenheit:", temperaturesInFahrenheit);

// 3. reduce() to calculate average temperature
const totalTemp = temperatures.reduce((acc, temp) => acc + temp, 0);
const averageTemp = totalTemp / temperatures.length;
console.log("Average Temperature:", averageTemp.toFixed(2), "°C");

// 4. find() first temperature above 40
const firstHighTemp = temperatures.find((temp) => temp > 40);
console.log("First temperature above 40°C:", firstHighTemp);

// 5. findIndex() of temperature 28
const indexAt28 = temperatures.findIndex((temp) => temp === 28);
console.log("Index of 28°C:", indexAt28);