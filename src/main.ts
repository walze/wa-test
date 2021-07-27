import express from 'express';
import { lab } from './route/lab';

const app = express();
const port = 3000;

app.use('/lab', lab);

app.get('/', (_, res) => res.send('👍'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
