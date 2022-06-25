
function week(day) {
    
    
    if (day === 'monday') {
       console.log('Plan Course');
    } else if (day ==='tuesday') {
        console.log('Prepare videos');
    } else if (day === 'wednesday' || day === 'thursday') {
        console.log('Write Code');
    } else if (day === 'friday' || day === 'saturday' || day === 'sunday') {
        console.log('Party Time 😉');
    }else {
        console.log('Not a day Jimbo');
    }
}

console.log(week('sunday'));


const age = 29;

const drink = age >= 21 ? 'wine' : 'water';
console.log(drink);