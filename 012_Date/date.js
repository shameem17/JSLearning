let dateNow = new Date() // object
let day = dateNow.getDay()
let month = dateNow.getMonth()
console.log(dateNow)
console.log(day) //number
console.log(month)
let updatedDate = new Date()

console.log(
    updatedDate.toLocaleDateString('default',{
        weekday: 'long',
        month: 'long',
        hour: '2-digit',
        hourCycle: 'h24',
        minute: '2-digit',
        timeZoneName: 'longGeneric',
        second: '2-digit'
    })
)

let myDate = new Date(2024, 3, 16)
console.log(myDate)
