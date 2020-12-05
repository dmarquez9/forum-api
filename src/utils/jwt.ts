import * as jwt from 'jsonwebtoken';
import { User } from '@app-types/user';

import config from '../config/variables'

class Token {
  static sign(payload : User) {
    return jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });
  }

  static verify(token: string) {
    try {
      return jwt.verify(token, config.jwtSecret);
    } catch (error) {
      console.log("Token ~ verify ~ error", error)
      return false;
    }
  }
}

export default Token