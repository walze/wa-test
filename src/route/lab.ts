
import express from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
import { MaybeArray } from '../types';
import { errorHandler } from '../helpers';

const prisma = new PrismaClient();

export const lab = express.Router();

// Get active
lab.get('/', async (_, res) => {
  errorHandler(
    prisma.lab.findMany({ where: { status: true } }),
  )
    .then(d => res.send(d));
});

// Save lab
lab.post<{}, {}, MaybeArray<Prisma.LabCreateManyExamInput>>('/', async ({ body }, res) => {
  const data = Array.isArray(body) ? body : [body];

  errorHandler(prisma.lab.createMany({ data }))
    .then(d => res.send(d));
});

// Update lab
lab.put<{ id: string }, {}, Prisma.LabCreateManyExamInput>('/:id', async ({ body, params }, res) => {
  errorHandler(
    prisma.lab.updateMany({ where: { id: +params.id }, data: body }),
  )
    .then(d => res.send(d));
});

// Delete one or many
lab.delete<{}, {}, MaybeArray<number>>('/', async ({ body }, res) => {
  const data = Array.isArray(body) ? body : [body];

  errorHandler(
    prisma.$transaction(
      data.map(id => prisma.lab.delete({ where: { id } })),
    ),
  )
    .then(d => res.send(d));
});

// Delete by id
lab.delete('/:id', async (req, res) => {
  errorHandler(
    prisma.lab.delete({ where: { id: +req.params.id } }),
  )
    .then(d => res.send(d));
});

