import { format_money } from "../script/utils/money.js";

//Automate Testing -->passed/Failed in console
//Manual Testing --> console.log(value and manually)

if(format_money(2095) === '20.95'){
    console.log('Passed');
}
else{
    console.log('Failed');
}

/*Disadvantages Manual Testing
     Hard to Reset

*/ 