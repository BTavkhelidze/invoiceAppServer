import express, { Express } from 'express';
import invoiceRouter from './invoices/invoice.router';
import connectToDb from './db/connectToDb';
import cors from 'cors';

const app: Express = express();
app.use(express.json());
connectToDb();
app.use(cors());

app.use('/invoices', invoiceRouter);
app.get('/', (req, res) => {
  res.json('Hello !');
});

app.listen(3002, () => {
  console.log('Server is running on http://localhost:3002');
});
