import 'dotenv/config';

export default {
  port: Number(process.env.PORT) || 8000,
  env: (process.env.NODE_ENV as string) || 'dev',
  jwtSecret: process.env.JWT_SECRET as string
}