import prisma from "./db";

const wipeDatabase = async () => {
  await prisma.unit.deleteMany({});
  await prisma.trip.deleteMany({});
  await prisma.maintnence.deleteMany({});
  await prisma.driver.deleteMany({});
};

export { wipeDatabase };
