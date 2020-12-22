import { ErrorRequestHandler, RequestHandler } from 'express';

export const lastErrorHandler: ErrorRequestHandler = (error, _, res, next) => {
  res.status(500).send({ error: 'internal server error' });
  next(error);
};

export const notFoundHandler: RequestHandler = (_, res) => {
  return res.status(404).json({ error: 'unknown endpoint' });
};
