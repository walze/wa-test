import express from 'express';

import { exam } from './route/exam';
import { lab } from './route/lab';

const app = express();
const port = 3000;

app.use('/lab', lab);
app.use('/exam', exam);

app.get('/', (_, res) => res.send('👍'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
