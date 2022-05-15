# currency-exchange-store

I write this program in both javascript and php

For Javascript, please refer to the folder called "javascript_version"
This folder contain 4 files which is currency_cal.js, currency_exchange_store.js, index.html and screenshot.
If you run index.html, under browser console, you can see the transaction result.
To modify the input, please go to currency_exchange_store.js.
I created an object called exchangeObject in line 5 and inital the TWD and USD reserve for 10,000 and 1000
This line exchangeObject.get_reserve(); will display the current reserve for both TWD and USD.
This line exchangeObject.TWDtoUSD(6000); allow user use $6000 TWD to exchange for $375 USD.
Then, I print out current reserve again by using exchangeObject.get_reserve(); to make sure the current reserve is correct.
Then, I try to exchange $2000 TWD for $69.44444444444446 USD, and make sure the reserve get update again.

In php_version, the concept is exactly the same and we can modify currency_exchange_store.php file to update the input value.
