import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

if (!process.env.PORT) dotenv.config();

const prisma = new PrismaClient();
prisma.$connect().then(async () => {
  const app = (await import('./config/app')).default;
  app.listen(process.env.PORT, () => console.log('server running'));
});
