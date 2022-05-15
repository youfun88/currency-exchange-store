
import currencyConverter from "./currency_cal.js";

//inital NTD and USD reserve amount
const exchangeObject = new currencyConverter(10000,1000);

// display the inital reserve amount
exchangeObject.get_reserve();

//exchange $6000 NTD to USD and update the reserve amount
exchangeObject.TWDtoUSD(6000);

//display the reserve amount after the inital exchange
exchangeObject.get_reserve();

//exchange $2000 NTD to USD and update the reserve amount by using last updated reserve amount
exchangeObject.TWDtoUSD(2000);

//display the current reserve amount
exchangeObject.get_reserve();