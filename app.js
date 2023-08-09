
let payRetUSD          = 80;
let projectHours       = 40;
let countWorkHourinDay = 5;
let countHourOrder_    = 40;
let countDayDedline    = 10;
let countDay           = 0;
let numDayOfWeek       = 0;

while (countHourOrder_ > 0) {
   
    numDayOfWeek +=1;
    let minVal =  Math.min(countWorkHourinDay, countHourOrder_);

    if (numDayOfWeek <6) {     
        countHourOrder_ =  countHourOrder_ - minVal;
        countDay +=1;
    }
    else{
        numDayOfWeek = 0;
    }    
}

console.log("Успеваю: " + (countDay<=countDayDedline));
console.log("Оплата: " + (payRetUSD * projectHours));


