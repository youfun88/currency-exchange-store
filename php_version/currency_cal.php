<?php

class currency_converter {
    public $Rt;
    public $Ru;

    function __construct($Rt, $Ru) {
        $this->Rt = $Rt;
        $this->Ru = $Ru;
    }

    function get_reserve(){
        //Display the current reserve amount.
        echo "TWD reserve: $".$this->Rt."<br>USD reserve $".$this->Ru."<br>";
    }

    function rebalance_reserve($TWD, $USD){
        //rebalance reserve by adding the TWD and USD to origin reserve amount.
        $this->Rt += $TWD;
        $this->Ru += $USD;
    }

    function TWDtoUSD ($TWD){
        //get the reserve amount
        $Rt=$this->Rt;
        $Ru=$this->Ru;
        //start converting TWD to USD
        $USD = (($Rt*$Ru)/($Rt+$TWD))-$Ru;
    
        //update reserve for both USD and NTD
        $this->rebalance_reserve($TWD, $USD);

        //display the exchange amount for both TWD and USD.
        echo "User use $".$TWD."TWD for exchange for $".abs($USD)."USD<br>";
    }
}
?>