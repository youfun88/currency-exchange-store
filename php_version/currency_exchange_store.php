<?php
include("currency_cal.php");

//inital NTD and USD reserve amount
$exchange_object = new currency_converter(10000,1000);

//display the inital reserve amount
$exchange_object->get_reserve();

//exchange $6000 NTD to USD and update the reserve amount
$exchange_object ->TWDtoUSD(3000);

//display the reserve amount after the inital exchange
$exchange_object->get_reserve();

?>