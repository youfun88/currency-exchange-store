class currencyConverter {
    constructor(Rt,Ru) {
      this.Rt = Rt;
      this.Ru = Ru;
    }
    get_reserve() {
        console.log("TWD reserve: $"+this.Rt+"\nUSD reserve $"+this.Ru+"\n");
    }
    rebalance_reserve(TWD, USD){
        //rebalance reserve by adding the TWD and USD to origin reserve amount.
        this.Rt += TWD;
        this.Ru += USD;
    }
    TWDtoUSD (TWD){
        //get the reserve amount
        var Rt=this.Rt;
        var Ru=this.Ru;
        //start converting TWD to USD
        var USD = ((Rt*Ru)/(Rt+TWD))-Ru;
    
        //update reserve for both USD and NTD
        this.rebalance_reserve(TWD, USD);

        //display the exchange amount for both TWD and USD.
        console.log("User use $"+TWD+"(TWD) for exchange for $"+Math.abs(USD)+"(USD)\n");
    }
  }
  
  export default currencyConverter;
  