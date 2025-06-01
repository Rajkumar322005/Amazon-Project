export function format_money(price){
    return (Math.round(price) / 100).toFixed(2);
}
//6.005.tofixed(2) ==> 6.000 it doesn't round to 6.1
//We have to use math.round function