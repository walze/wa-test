
import express from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
import { MaybeArray } from '../types';

const prisma = new PrismaClient();

export const exam = express.Router();

// Get active
exam.get('/', async (_, res) => {
  res.send(
    await prisma.exam.findMany({ where: { status: true } }),
  );
});

// Save exam
exam.post<{}, {}, MaybeArray<Prisma.ExamCreateManyInput>>('/', async (_, res) => {
  const { body } = _;
  const data = Array.isArray(body) ? body : [body];

  res.send(
    await prisma.exam.createMany({ data }),
  );
});

// Update exam
exam.put<{}, {}, MaybeArray<Prisma.LabCreateManyExamInput>>('/', async (_, res) => {
  const { body } = _;
  const data = Array.isArray(body) ? body : [body];

  res.send(
    await prisma.exam.updateMany({ data }),
  );
});

// Delete one or many
exam.delete<{}, {}, MaybeArray<number>>('/', async (_, res) => {
  const { body } = _;
  const data = Array.isArray(body) ? body : [body];

  const deletes = await prisma.$transaction(
    data.map(id => prisma.exam.delete({ where: { id } })),
  );

  res.send(deletes);
});

// Delete by id
exam.delete('/:id', async (req, res) => {
  res.send(
    await prisma.exam.delete({ where: { id: +req.params.id } }),
  );
});

