const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
function calcTime(city, offset) {

    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const nd = new Date(utc + (3600000*offset));
    return `The local time in ${city} is ${nd.toLocaleString()}`;

}
// res.write(calcTime("mumbai", +5.5));
// res.write(calcTime("london", 0));
// res.write(calcTime("Tokyo", +9));
// res.write(calcTime("Las Vegas   ", -7))
// res.write(calcTime("Shanghai", +8))
// res.send();

cityTime = {
    Mumbai:calcTime("Mumbai", +5.5),
    London:calcTime("London", 0),
    Tokyo :calcTime("Tokyo", +9),
    LasVegas: calcTime("Las Vegas", -7),
    Shanghai: calcTime("Shanghai", +8)
}
console.log(cityTime.Mumbai);
res.json(cityTime)

})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))