import express, { Express, Request, Response } from 'express';
import { Phone } from './types/Phone';
import cors from 'cors';
import phones from '../src/api/phones.json';
import path from 'path';

const app: Express = express();

app.use(cors());

const port = process.env.PORT || 5000;

app.use('/static', express.static(path.join(__dirname, '../public')));

app.get('/phones', (req: Request, res: Response) => {
  res.statusCode = 200;
  res.send(phones);
});

// app.get('/phones/new', (req: Request, res: Response) => {
//   const newPhones = phones
//     .sort((a: { year: number }, b: { year: number }) => b.year - a.year)
//     .slice(0, 10);

//   res.statusCode = 200;
//   res.send(newPhones);
// });

// app.get('/phones/discount', (req: Request, res: Response) => {
//   const discountPhones = phones
//     .sort(
//       (
//         a: { fullPrice: number; price: number },
//         b: { fullPrice: number; price: number }
//       ) => b.fullPrice - b.price - (a.fullPrice - a.price)
//     )
//     .slice(0, 10);

//   res.statusCode = 200;
//   res.send(discountPhones);
// });

app.get('/phones/:phoneId', (req, res) => {
  const phoneId = req.params.phoneId;

  const foundPhone = phones.find((phone: Phone) => phone.id === phoneId);

  if (!foundPhone) {
    res.sendStatus(404);

    return;
  }

  res.statusCode = 200;
  res.send(foundPhone);
});

app.listen(port);
