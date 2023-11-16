import express, { Request } from "express";
import prisma from "./utils/db";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", async (req, res) => {
  const allUnits = await prisma.unit.findMany();
  console.log(allUnits);
  res.json(allUnits);
});

app.post("/", async (req, res) => {
  const newUnit = await prisma.unit.create({
    data: {
      name: req.body.name,
    },
  });
  res.json(newUnit);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
