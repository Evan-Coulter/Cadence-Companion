import * as dotenv from 'dotenv'
dotenv.config()
import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
