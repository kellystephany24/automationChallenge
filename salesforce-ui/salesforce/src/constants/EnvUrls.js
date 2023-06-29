import { config } from '../Config'
const dotenv = require('dotenv')

dotenv.config()

export const URLS = {
    LOGINPAGE_URL: process.env.ENV,
    HOMEPAGE_URL: `${process.env.ENV}home/home.jsp`
}
