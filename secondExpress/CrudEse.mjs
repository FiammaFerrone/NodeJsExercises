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
import {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
} from "./planets.mjs";
const app = express();
const PORT = 3000;
app.use(express.json());


app.get("/api/planets", getAll);


app.get("/api/planets/:id", getOneById);



app.post("/api/planets", create);



app.put("/api/planets/:id", updateById);



app.delete("/api/planets/:id", deleteById);



app.listen(PORT, () => {
  console.log(`server is listening at http://localhost:${PORT}/api/planets`);
});
