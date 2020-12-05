import { NextFunction, Request, Response } from "express"

class AuthController {
  static login = async (req : Request, res : Response, next : NextFunction) => {
    res.send('hola login')
  }

  static register = async (req, res, next) => {
    res.send('hola register')
  }

  static verify = async (req, res, next) => {
    res.send('hola verify')
  }
};

export default AuthController;