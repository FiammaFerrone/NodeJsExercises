import express from 'express';
import morgan from 'morgan';
import dotenv from "dotenv"

dotenv.config()

const app = express();
app.use(express.json());
app.use(morgan("dev"));

const PORT = (process.env.PORT)

type Planet = {
  id: number,
  name: string,
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];



app.get("/", (request, response) => {
  if (request) {
    response.status(200)
    response.send("server is started")
  }
}),

  // app.get("/planets", (request, response) => {
  //   response.json(planets);
  // }); E servito a me !!

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});