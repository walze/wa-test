import express from 'express';
import { assoc } from './route/assocExam';

import { exam } from './route/exam';
import { lab } from './route/lab';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/assoc-exam', assoc);
app.use('/lab', lab);
app.use('/exam', exam);

app.get('/', (_, res) => res.send('👍'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
