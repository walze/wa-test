import { PrismaClient } from '@prisma/client';

import ExamType from './seeds/ExamType';
import Exam from './seeds/Exam';
import Lab from './seeds/Lab';

const prisma = new PrismaClient();

async function main() {
  const examTypes = await prisma.examType.createMany({ data: ExamType });
  const exams = await prisma.exam.createMany({ data: Exam });
  const labs = await prisma.lab.createMany({ data: Lab });

  console.log({ examTypes, exams, labs });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
