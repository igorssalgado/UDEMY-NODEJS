const request = require('request');
const chalk = require('chalk');

const url = 'http://apiadvisor.climatempo.com.br/api/v1/weather/locale/4456/current?token=d048672a8b04194a3fc09870673808d3';

request({ url: url, json: true }, (error, response) =>{
    console.log(chalk.inverse(response.body.name));
    console.log(response.body.data.temperature + "C");
    console.log(response.body.data.condition);
})