import express, { Request, Response } from "express"

const app = express();

app.get("/", (request: Request, response: Response) => {

    response.status(200).send("server is started")
})

app.listen(3000, () => {
    console.log("server listen at http://localhost:3000");
})