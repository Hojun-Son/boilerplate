if(process.env.NODE_NAME === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}