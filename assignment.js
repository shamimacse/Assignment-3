
// this program is - kilometerToMeter 


function kilometerToMeter(kilometer){
    var meter = 1000 * kilometer;
    return meter;
}
var result = kilometerToMeter(30);
console.log(result);



// this program is - budgetCalculator




function budgetCalculator(watch, phone, laptop) {
    var watchPrice = 50 * watch,
    phonePrice = 100 * phone,
    laptopPrice = 500 * laptop,
    totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}
var result = budgetCalculator(1, 3, 5);
console.log(result);



// this program is - hotelCost



function hotelCost(days){

    if(days <= 10){
        var cost =days * 100;
    }
    
    else if (days <=20){
        var firstDay =10 *100;
        var remaining =days -10;
        var secendDay = remaining * 80 ;
        cost = firstDay + secendDay;
    }
    else{
        var firstDay = 10 *100;
        var secendDay = 10 *80;
        var remaining = days -20;
        var thirdDay =remaining * 50;
        cost = firstDay +secendDay + thirdDay;
    }
    return cost;
    }
   
    var result = hotelCost(12);
console.log(result);



// this program is - megaFriend 


function megaFriend(name) {
    var largestName = name[0];
    for( var i = 0; i <name.length; i++){
     var index = name[i];
     if(largestName.length < index.length){
         largestName = index;
    }
}
return largestName; 
}
var friendResult = megaFriend(['nilufa', 'shema', 'misi']);
console.log(friendResult);