import Joi from "joi"; 


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

export const getAll = (request, response) => {
    if (request) {
        console.log("request recived");
        response.status(200).send(planets);
        console.log({ msg: " first: done" });
    }
}
export const getOneById = (request, response) => {
    const { id } = request.params;
    const planet = planets.find((planet) => planet.id === +id);
    const newPlanet = planetSchema.validate(planet)
    response.status(200).send(newPlanet);
    console.log({ msg: "second: done" });
    if (!planet) {
        return response.status(404).json({ msg: "Planet not found" });
    }
}
export const create = (request, response) => {
    const { id, name } = request.body;
    if (id && name != undefined) {
        const newPlanet = { id, name };
        const newschemaPlanet = planetSchema.validate(newPlanet);
        // planets.push(newPlanet);
        planets = [...planets, newPlanet];
        response.status(201).send(newschemaPlanet);
        console.log({ msg: "third: done" });
    } else {
        response.status(404);
    }
}
export const updateById = (request, response) => {
    const { id } = request.params;
    const { name } = request.body;

    const planetsIndex = planets.findIndex((planet) => planet.id === +id);
    planets[planetsIndex] = { ...planets[planetsIndex], name };
    // planets[planetsIndex]
    response.status(200).send({ msg: " fourth: done" });
}
export const deleteById = (request, response) => {
    const { id } = request.params;
    console.log();
    const planetsIndex = planets.findIndex((planet) => planet.id === +id);
    if (planetsIndex === -1) {
        return response.status(404).json({ msg: "Planet not found" });
    } else planets.splice(planetsIndex);
    response.status(200).send({ msg: " fifth: done" });
}

// export default {getAll, getOneById, create, updateById, deleteById}
