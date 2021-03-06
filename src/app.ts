import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes';

class Server {
  private app : express.Application = express();

  get get() {
    return this.app;
  }

  constructor() {
    // Secure app by setting various HTTP headers
    this.app.use(helmet());

    // Parses JSON request body
    this.app.use(bodyParser.json());

    // Parse urlencoded request body
    this.app.use(bodyParser.urlencoded({ extended: true }));

    // Enable Cors
    this.app.use(cors())
    this.app.options('*', cors());

    // API Routes
    this.app.use('/', routes)
  }
}

export default new Server().get;
