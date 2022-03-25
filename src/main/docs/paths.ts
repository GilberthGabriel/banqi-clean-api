const createPjAccount = {
  name: { type: 'string' },
  cnpj: { type: 'string' },
  description: { type: 'string' },
  address: { type: 'string' },
  revenue: { type: 'number' },
};

const updatePjAccount = {
  name: { type: 'string' },
  description: { type: 'string' },
  address: { type: 'string' },
  revenue: { type: 'number' },
};

const pjAccount = {
  id: { type: 'string' },
  createdAt: {
    type: 'string',
    pattern: '(d{4})-(d{2})-(d{2}) (d{2}):(d{2}):(d{2})',
  },
  deletedAt: {
    type: 'string',
    pattern: '(d{4})-(d{2})-(d{2}) (d{2}):(d{2}):(d{2})',
    nullable: true,
  },
  ...createPjAccount,
};

const error = (code: string, message: string) => ({
  code: { type: 'string', example: code },
  message: { type: 'string', example: message },
});

export const pjAccountPath = {
  post: {
    tags: ['PjAccount'],
    summary: 'Create a PJ account',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: createPjAccount,
            required: ['name', 'cnpj', 'description', 'address', 'revenue'],
          },
        },
      },
    },
    responses: {
      201: {
        description: 'success',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: pjAccount,
            },
          },
        },
      },
      406: {
        description: 'duplicated cnpj',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: error(
                'PJ03',
                'The provided cnpn is already registered',
              ),
            },
          },
        },
      },
    },
  },
  get: {
    tags: ['PjAccount'],
    summary: 'List all PJ accounts',
    responses: {
      200: {
        description: 'success',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: pjAccount,
              },
            },
          },
        },
      },
    },
  },
};

export const specificPjAccountPath = {
  put: {
    tags: ['PjAccount'],
    summary: 'Update a PJ account',
    parameters: [
      {
        in: 'path',
        name: 'id',
        schema: {
          type: 'string',
          required: true,
        },
      },
    ],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: updatePjAccount,
          },
        },
      },
    },
    responses: {
      200: {
        description: 'success',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: pjAccount,
            },
          },
        },
      },
      404: {
        description: 'pj account not found',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: error('PJ04', 'Pj account not found'),
            },
          },
        },
      },
    },
  },
  delete: {
    tags: ['PjAccount'],
    summary: 'Delete a PJ account',
    parameters: [
      {
        in: 'path',
        name: 'id',
        schema: {
          type: 'string',
          required: true,
        },
      },
    ],
    responses: {
      200: {
        description: 'success',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: pjAccount,
            },
          },
        },
      },
      404: {
        description: 'pj account not found',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: error('PJ04', 'Pj account not found'),
            },
          },
        },
      },
    },
  },
};

export const findPjAccountPath = {
  get: {
    tags: ['PjAccount'],
    summary: 'Find a PJ account',
    parameters: [
      {
        in: 'query',
        name: 'id',
        schema: {
          type: 'string',
        },
      },
      {
        in: 'query',
        name: 'cnpj',
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      200: {
        description: 'success',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: pjAccount,
            },
          },
        },
      },
      404: {
        description: 'pj account not found',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: error('PJ04', 'Pj account not found'),
            },
          },
        },
      },
    },
  },
};
