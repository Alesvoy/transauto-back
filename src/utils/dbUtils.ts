import prisma from "./db";

const wipeDatabase = async () => {
  await prisma.unit.deleteMany({});
  await prisma.trip.deleteMany({});
  await prisma.maintenance.deleteMany({});
  await prisma.driver.deleteMany({});
};

export { wipeDatabase };
