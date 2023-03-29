const express= require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
app.use(cors())
let port =process.env.PORT ||  8000;
const conn = require("./database/db");
conn();

const surveylist = require('./routes/surveylist'); // corrected file path
const registerRoute = require('./routes/register');
const loginRoute = require("./routes/login");
const createques = require('./routes/displayQuestions')
const createSurveyRoute = require("./routes/createSurvey");
const requestedquestionsroute = require('./routes/reqquestions');
const  routerTheme = require("./themes/themes")
app.use(bodyParser.json());
app.use(routerTheme)
app.use(createques)
app.use(registerRoute);
app.use(loginRoute);
app.use(createSurveyRoute);
app.use(surveylist);
app.use(requestedquestionsroute);
app.listen(port, () => console.log(`app running on port ${port}`));