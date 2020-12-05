import { Router } from 'express';

import AuthRoute from './AuthRoute';

class MainRoute {
  private router : Router = Router();

  get get() : Router {
    return this.router;
  }

  constructor() {
    this.configure()
  }

  private configure () {
    this.router.use('/auth', AuthRoute);
  }
}

export default new MainRoute().get;
