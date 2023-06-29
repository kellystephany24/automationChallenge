import { config } from '../Config'
const dotenv = require('dotenv');

dotenv.config();

export const USERS = {
    SALESFORCE_ADMIN: {
        EMAIL: process.env.EMAIL,
        PASSWORD: process.env.PASSWORD,
        NAME: process.env.NAME,
    },

    TESTING_USER: {
        NAME: 'Testing User',
    },
}
