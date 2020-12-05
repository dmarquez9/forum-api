import { Router } from 'express';
import AuthController from '@controllers/AuthController';

class AuthRoute {
  private router : Router = Router();
  private controller = AuthController

  get get() : Router {
    return this.router;
  }

  constructor() {
    this.configure()
  }

  private configure () {
    this.router.get('/login', this.controller.login);
    this.router.get('/register', this.controller.register);
    this.router.get('/verify', this.controller.verify);

    return this.router;
  }
}

export default new AuthRoute().get;
