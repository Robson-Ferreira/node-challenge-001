import dotenv from 'dotenv'
dotenv.config();

console.log('Environment: ' + process.env.NODE_ENV);

export default {
    App: {
        port: process.env.APP_PORT || 8080,
    },
    requestLimit: process.env.REQUEST_LIMIT || '10mb',
};
