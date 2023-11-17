import express, { Request } from "express";
import prisma from "./utils/db";

import unitRoutes from "./routes/unitRoutes";
import maintenanceRoutes from "./routes/maintenanceRoutes";
import tripRoutes from "./routes/tripRoutes";
import driverRoutes from "./routes/driverRoutes";
import userRoutes from "./routes/userRoutes";
import { authenticateUser } from "./middlewares/auth";
import { wipeDatabase, seedDatabase } from "./utils/dbUtils";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/units", authenticateUser, unitRoutes);
app.use("/maintenance", authenticateUser, maintenanceRoutes);
app.use("/trips", authenticateUser, tripRoutes);
app.use("/drivers", authenticateUser, driverRoutes);
app.use("/users", userRoutes);

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

// wipeDatabase();
// seedDatabase();

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
