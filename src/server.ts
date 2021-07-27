import express, { request, response } from "express";
//importing DB connection
import "./database";

const app = express();
/**
 * GET (SEARCH)
 * POST (CREATE)
 * PUT (UPDATE)
 * DELETE
 * PATCH (UPDATE A SPECIFIC INFO, FOR EXAMPLE CHANGE PASSWORD)
 */

app.get("/", (request, response) => {
    return response.json({
        message: "testing",
    });
});

app.post("/", (request, response) => {
    return response.json({
        message: "test creating users"
    })
})

app.listen(3333, () => console.log('server running on port 3333'));
