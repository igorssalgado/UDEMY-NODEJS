const yargs = require('yargs');
const weather = require('./weatherCheck');

yargs.version('1.1.0');

// const url = 'http://apiadvisor.climatempo.com.br/api/v1/weather/locale/4456/current?token=d048672a8b04194a3fc09870673808d3';

yargs.command({
    command: 'check',
    describe: 'check weather',
    builder: {
        id: {
            describe: 'ID da Cidade',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { 
        return weather.weatherCheck(argv.id)
    }
});

yargs.command({
    command: 'findid',
    describe: 'find city id',
    builder: {
        name: {
            describe: 'find city id',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { 
        return weather.findId(argv.name)
    }
});

yargs.command({
    command: 'dengue',
    describe: 'are there mosquitos?',
    builder: {
        id: {
            describe: 'dangue ploriflerations(??) last 5 days',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { 
        return weather.dengue(argv.name)
    }
});

yargs.parse();