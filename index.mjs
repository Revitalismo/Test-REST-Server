import jsonServer from "json-server";
import cors from "cors";
import path from "path";

const server = jsonServer.create();
const router = jsonServer.router(path.join("db.json"));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

const PORT = 3000;

server.listen(PORT, function() {
    console.info(`JSON Server is running on http://localhost:${PORT}`);
})