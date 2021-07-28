
import express from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
import { MaybeArray } from '../types';
import { errorHandler } from '../helpers';

const prisma = new PrismaClient();

export const exam = express.Router();

// Get active
exam.get('/', async (_, res) => {
  errorHandler(
    prisma.exam.findMany({
      where: { status: true },
      include: { Lab: true },
    }),
  )
    .then(d => res.send(d));
});

// Find Exam
type SearchQuery = { q: string };
exam.get<{}, {}, {}, SearchQuery>('/search', async ({ query: { q } }, res) => {
  errorHandler(
    prisma.exam.findMany({
      where: {
        name: { contains: q },
      },
      include: {
        Lab: true,
      },
    }),
  )
    .then(r => res.send(r));
});

// Save exam
exam.post<{}, {}, MaybeArray<Prisma.ExamCreateManyInput>>('/', async ({ body }, res) => {
  const data = Array.isArray(body) ? body : [body];

  errorHandler(prisma.exam.createMany({ data }))
    .then(d => res.send(d));
});

// Update exam
exam.put<{ id: string }, {}, Prisma.ExamCreateManyInput>('/:id', async ({ body, params }, res) => {
  errorHandler(
    prisma.exam.updateMany({ where: { id: +params.id }, data: body }),
  )
    .then(d => res.send(d));
});

// Delete one or many
exam.delete<{}, {}, MaybeArray<number>>('/', async ({ body }, res) => {
  const data = Array.isArray(body) ? body : [body];

  errorHandler(
    prisma.$transaction(
      data.map(id => prisma.exam.delete({ where: { id } })),
    ),
  )
    .then(d => res.send(d));
});

// Delete by id
exam.delete('/:id', async (req, res) => {
  errorHandler(
    prisma.exam.delete({ where: { id: +req.params.id } }),
  )
    .then(d => res.send(d));
});

