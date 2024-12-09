/** @format */

// Write a router with the following routes:
// GET /api/planets: return all planets (JSON) with 200 fatto
// GET /api/planets/:id: return a planet (JSON) by id with 200 fatto
// POST /api/planets: create a planet, return only 201 code and a success JSON with key msg
// Make sure every planet is created with id and name.
// PUT /api/planets/:id: update a planet by id, return only 200 code and a success JSON with key msg
// DELETE /api/planets/:id: delete a planet by id, return only 200 code and a success JSON with key msg
// Validate planet fields where appropriate.

import express from "express";
import Joi from "joi";
import { json } from "stream/consumers";

const app = express();
const PORT = 3000;
app.use(express.json());

const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().min(3).required(),
});

let planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.get("/api/planets", (request, response) => {
  if (request) {
    console.log("request recived");
    response.status(200).send(planets);
    console.log({ msg: " first: done" });
  }
});

app.get("/api/planets/:id", (request, response) => {
  const { id } = request.params;

  const planet = planets.find((planet) => planet.id === +id);
  response.status(200).send(planet);
  console.log({ msg: "second: done" });
  if (!planet) {
    return response.status(404).json({ msg: "Planet not found" });
  }
});

app.post("/api/planets", (request, response) => {
  const { id, name } = request.body;
  if (id && name != undefined) {
    const newPlanet = { id, name };
    // planets.push(newPlanet);
    planets = [...planets, newPlanet];
    response.status(201).send(planets);
    console.log({ msg: "third: done" });
  } else {
    response.status(404);
  }
});

app.put("/api/planets/:id", (request, response) => {
  const { id } = request.params;
  const { name } = request.body;
  const planetsIndex = planets.findIndex((planet) => planet.id === +id);
  planets[planetsIndex] = { ...planets[planetsIndex], name };
  // planets[planetsIndex]
  response.status(200).send({ msg: " fourth: done" });
});

app.delete("/api/planets/:id", (request, response) => {
  const { id } = request.params;
  console.log();
  const planetsIndex = planets.findIndex((planet) => planet.id === +id);
  if (planetsIndex === -1) {
    return response.status(404).json({ msg: "Planet not found" });
  } else planets.splice(planetsIndex);
  response.status(200).send({ msg: " fifth: done" });
});

app.listen(PORT, () => {
  console.log(`server is listening at http://localhost:${PORT}/api/planets`);
});
