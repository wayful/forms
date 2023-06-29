import { createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';

import schema from './schema';
import context from './context';

import seed from './seed';

// seed();

const yoga = createYoga({
  schema,
  context
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
});
