import jsonServer from 'json-server';
import cookieParser from 'cookie-parser';
import {join, dirname} from 'path';
import {Low, JSONFile} from 'lowdb';
import { fileURLToPath } from 'url';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();

const __dirname = dirname(fileURLToPath(import.meta.url));

const file = join(__dirname, 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

await db.read();

db.data ||= { 
  products: [],
  users: []
};
db.write();

server.use(cookieParser());
server.use(middleware);

server.use(router);

server.listen(process.env.PORT, () => {
  console.log('JSON server is running');
});