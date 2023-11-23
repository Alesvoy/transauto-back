import bcrypt from "bcryptjs";
import prisma from "./db";

const wipeDatabase = async () => {
  await prisma.trip.deleteMany({});
  await prisma.maintenance.deleteMany({});
  await prisma.driver.deleteMany({});
  await prisma.unit.deleteMany({});
  await prisma.user.deleteMany({});
};

const seedDatabase = async () => {
  const user1 = await prisma.user.create({
    data: {
      email: "myemail@email.com",
      password: await bcrypt.hash("password", 10),
    },
  });

  const unit1 = await prisma.unit.create({
    data: {
      name: "Unit 1",
    },
  });

  const unit2 = await prisma.unit.create({
    data: {
      name: "Unit 2",
    },
  });

  const driver1 = await prisma.driver.create({
    data: {
      name: "John Smith",
      unitId: unit1.id,
    },
  });

  const driver2 = await prisma.driver.create({
    data: {
      name: "Sam Powell",
      unitId: unit2.id,
    },
  });

  const maintenance1 = await prisma.maintenance.create({
    data: {
      unitId: unit1.id,
      driverId: driver1.id,
      mileage: 1000,
      description: "Oil change",
      cost: 100,
      notes: "Performed by John Smith",
    },
  });

  const maintenance2 = await prisma.maintenance.create({
    data: {
      unitId: unit2.id,
      driverId: driver2.id,
      mileage: 2000,
      description: "Tire rotation",
      cost: 200,
      notes: "Performed by Sam Powell",
    },
  });

  const trip1 = await prisma.trip.create({
    data: {
      unitId: unit1.id,
      driverId: driver1.id,
      origin: "New York",
      destination: "Los Angeles",
      product: "Apples",
      notes: "Performed by John Smith",
    },
  });

  const trip2 = await prisma.trip.create({
    data: {
      unitId: unit2.id,
      driverId: driver2.id,
      origin: "Boston",
      destination: "Miami",
      product: "Oranges",
      notes: "Performed by Sam Powell",
    },
  });
};

export { wipeDatabase, seedDatabase };
