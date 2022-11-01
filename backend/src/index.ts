import express, { Express, Request, Response } from 'express';
import { Phone } from './types/Phone';
import cors from 'cors';
import phones from '../src/api/phones.json';
import path from 'path';

const app: Express = express();

app.use(cors());

const port = process.env.PORT || 5000;

app.use('/static', express.static(path.join(__dirname, 'img')));

app.get('/phones', (req: Request, res: Response) => {
  res.statusCode = 200;
  res.send(phones);
});

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
