const request = require('request');
const chalk = require('chalk');

const weatherCheck = (id) => {
    
    const url = 'http://apiadvisor.climatempo.com.br/api/v1/weather/locale/' + id + '/current?token=d048672a8b04194a3fc09870673808d3';

    request({ url: url, json: true }, (error, response) =>{
        console.log(chalk.inverse(response.body.name));
        console.log(response.body.data.temperature + "C");
        console.log(response.body.data.condition);
    })
}

const findId = (city) => {
    
    const url = 'http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=' + city + '&token=d048672a8b04194a3fc09870673808d3'

    request({ url: url, json: true }, (error, response) =>{
        console.log(response.body);
    })

}

const dengue = (id) => {
    
    const url = 'http://apiadvisor.climatempo.com.br/api/v1/index/mosquito/locale/' + id + '3477/days/5?token=d048672a8b04194a3fc09870673808d3'

    request({ url: url, json: true }, (error, response) =>{
        console.log(response.body);
    })

}


module.exports = {
    weatherCheck: weatherCheck,
    findId: findId,
    dengue: dengue
}
 