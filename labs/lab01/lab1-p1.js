const _ = require("lodash")
// PART 1
// Question 1
const holidays = [
    {name: "Christmas", date: new Date("2025-12-25")},
    {name: "Canada Day", date: new Date("2025-07-01")},
    {name: "April Fools", date: new Date("2025-04-01")},
]

// Question 2 
let today = new Date();
holidays.forEach(holiday =>{
    let dateDiffernce = holiday.date - today
    let days = Math.ceil((dateDiffernce/(1000 *60 *60 *24)))
    console.log(days)
})

// lodash - do array operations
// lodash is declared, pick random sample
// displays diff day each time you run 
// Question 3 
console.log(_.sample(holidays))
// Question 4
console.log(_.findIndex(holidays, {name: "Christmas"}))
console.log(_.findIndex(holidays, {name: "Canada Day"}))


