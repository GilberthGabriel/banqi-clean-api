import {
  findPjAccountPath,
  pjAccountPath,
  specificPjAccountPath,
} from './paths';

export default {
  openapi: '3.0.0',
  info: {
    title: 'BanQI API Docs',
    version: '1.0.0',
  },
  servers: [
    {
      url: '/api',
      description: 'main server',
    },
  ],
  paths: {
    '/pj-accounts': pjAccountPath,
    '/pj-accounts/{id}': specificPjAccountPath,
    '/pj-accounts/find': findPjAccountPath,
  },
};
