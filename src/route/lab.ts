
import express from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
import { MaybeArray } from '../types';

const prisma = new PrismaClient();

export const lab = express.Router();

// Get active
lab.get('/', async (_, res) => {
  res.send(
    await prisma.lab.findMany({ where: { status: true } }),
  );
});

// Save lab
lab.post<{}, {}, MaybeArray<Prisma.LabCreateManyExamInput>>('/', async (_, res) => {
  const { body } = _;
  const data = Array.isArray(body) ? body : [body];

  res.send(
    await prisma.lab.createMany({ data }),
  );
});

// Update lab
lab.put<{}, {}, MaybeArray<Prisma.LabCreateManyExamInput>>('/', async (_, res) => {
  const { body } = _;
  const data = Array.isArray(body) ? body : [body];

  res.send(
    await prisma.lab.updateMany({ data }),
  );
});

// Delete one or many
lab.delete<{}, {}, MaybeArray<number>>('/', async (_, res) => {
  const { body } = _;
  const data = Array.isArray(body) ? body : [body];

  const deletes = await prisma.$transaction(
    data.map(id => prisma.lab.delete({ where: { id } })),
  );

  res.send(deletes);
});

// Delete by id
lab.delete('/:id', async (req, res) => {
  res.send(
    await prisma.lab.delete({ where: { id: +req.params.id } }),
  );
});

