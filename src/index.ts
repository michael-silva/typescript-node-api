import * as express from 'express';
import * as bodyParser from "body-parser";
import { WelcomeController } from './welcome.controller';

// Create a new express application instance
const app: express.Application = express();

// support application/json type post data
app.use(bodyParser.json());
//support application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));

// Mount the WelcomeController at the /welcome route
app.use('/welcome', WelcomeController);

// The port the express app will listen on
const port = process.env.PORT || 3000;

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});