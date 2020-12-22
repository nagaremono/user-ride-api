import 'dotenv-safe/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { lastErrorHandler, notFoundHandler } from './utils/errorHandlers';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (_, res) => {
  return res.json({ message: 'hello world' });
});

app.use(notFoundHandler);
app.use(lastErrorHandler);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown);

function gracefulShutdown() {
  server.close(() => {
    console.log('server process terminated');
    process.exit(0);
  });
}
