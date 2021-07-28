import express, { request, response } from "express";
//importing DB connection
import "./database";
import {routes} from "./routes";

const app = express();
/**
 * GET (SEARCH)
 * POST (CREATE)
 * PUT (UPDATE)
 * DELETE
 * PATCH (UPDATE A SPECIFIC INFO, FOR EXAMPLE CHANGE PASSWORD)
 */

 //send the request as a json format
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('server running on port 3333'));
