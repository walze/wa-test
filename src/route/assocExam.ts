
import express from 'express';
import { PrismaClient } from '@prisma/client';
import { errorHandler } from '../helpers';

const prisma = new PrismaClient();

export const assoc = express.Router();

// Assoc exam
assoc.get('/:exam/:lab', async ({ params: { exam, lab } }, res) => {
  errorHandler(
    prisma.exam.update({
      where: { id: +exam },
      data: {
        Lab: {
          connect: { id: +lab },
        },
      },
    }),
  )
    .then(d => res.send(d));
});

// Dissoc
assoc.delete('/:exam/:lab', async ({ params: { exam, lab } }, res) => {
  errorHandler(
    prisma.exam.update({
      where: { id: +exam },
      data: {
        Lab: {
          disconnect: { id: +lab },
        },
      },
    }),
  )
    .then(d => res.send(d));
});

