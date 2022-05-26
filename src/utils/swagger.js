const swaggerJsDoc = require('swagger-jsdoc');

module.exports = swaggerJsDoc({
    definition:{
        openapi:'3.0.0',
        info:{
            title: 'Todo Tasks',
            version:'1.0.0',
            contact:{
                name:'Emily',
                email:'emily.gong.dev@gmail.com',
            },
            description: 'Todo tasks API server',
        },
    },
    apis: ['src/controllers/*.js'],
});