const request = require('request');
const chalk = require('chalk');
const fs = require('fs');

const weatherCheck = (id) => {
    
    const url = 'http://apiadvisor.climatempo.com.br/api/v1/weather/locale/' + id + '/current?token=d048672a8b04194a3fc09870673808d3';

    request({ url: url, json: true }, (error, response) =>{
        console.log(chalk.inverse(response.body.name));
        console.log(response.body.data.temperature + "C");
        console.log(response.body.data.condition);
    })
}

const findId = (city) => {
    
    const url = 'http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=' + encodeURIComponent(city) + '&token=d048672a8b04194a3fc09870673808d3'; // encodeURIComponent(city) threat the words with special charcters to work as URL )

    request({ url: url, json: true }, (error, response) => {
        console.log(response.body);
    })

}

// const dengue = () => {
    
//     const url = 'https://info.dengue.mat.br/api/alertcity?geocode=3304557&disease=dengue&format=json&ew_start=0&ew_end=1&ey_start=2019&ey_end=2019' 

//     const dengueCheck = request({ url: url, json: true }, (error, response) =>{
        
//         const dengueJSON = {
//             body: response
//         }

//         return dengueJSON;
//     })

//     const saveDengueCheck = (dengueCheckFile) => {
//         const dataJSON = dengueCheckFile;
//         fs.writeFileSync('dengue.json', JSON.stringify(dataJSON));
//     }

//     saveDengueCheck(dengueCheck);
// }


module.exports = {
    weatherCheck: weatherCheck,
    findId: findId,
    dengue: dengue
}
 