import { HttpResponse } from './ports';

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data,
});

export const unauthorized = (data: any): HttpResponse => ({
  statusCode: 401,
  body: data,
});

export const forbidden = (data: any): HttpResponse => ({
  statusCode: 403,
  body: data,
});

export const badRequest = (data: any): HttpResponse => ({
  statusCode: 400,
  body: data,
});

export const notFound = (data: any): HttpResponse => ({
  statusCode: 404,
  body: data,
});

export const conflict = (data: any): HttpResponse => ({
  statusCode: 406,
  body: data,
});

export const serverError = (error?: Error): HttpResponse => ({
  statusCode: 500,
  body: error || {
    message: 'internal server error',
  },
});
