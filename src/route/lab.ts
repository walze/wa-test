
import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const lab = express.Router();

lab.get('/', async (_, res) => {
  const a = await prisma.examType.findMany();

  console.log(a);

  res.send(JSON.stringify(a));
});

