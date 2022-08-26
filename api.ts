import http from 'http';

export const PORT = process.env.PORT || 2029;

interface User {
  name: string;
  email: string;
}

const ACTUAL_METHODS = {
  GET: 'GET',
  POST: 'POST',
};
const users: User[] = [];

export const xserver = {
  listen: (_PORT: number, _callback: Function) => console.log('waiting for real server'),
};

export const server = http.createServer(async (req, res) => {
  const URL = req.url;
  const METHOD = req.method;

  res.writeHead(200, { 'Content-Type': 'application/json' });

  switch (URL) {
    case '/api':
      return res.end(JSON.stringify({ message: '/API - Welcome' }));
    case '/users':
      if (METHOD === ACTUAL_METHODS.POST) {
        const body: Uint8Array[] = []; // Array de enteros sin signo de 8 bits
        req
          .on('data', (chunk: Uint8Array) => {
            body.push(chunk);
          })
          .on('end', () => {
            const user = JSON.parse(Buffer.concat(body).toString());
            users.push(user);
            res.end(JSON.stringify({ message: 'User created', user }));
          });
      } else {
        res.end(JSON.stringify({ message: 'Users obtained', users }));
      }

      return true;

    case '/nucba':
      return res.end(JSON.stringify({ message: '¡THIS IS THE WAY!' }));
    default:
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ message: 'Route not found' }));
  }
});
