import { Request, Response } from "express";
import prisma from "../utils/db";

export const getAllUnits = async (req: Request, res: Response) => {
  const allUnits = await prisma.unit.findMany();
  res.json(allUnits);
};

export const createUnit = async (req: Request, res: Response) => {
  const { name } = req.body;
  const newUnit = await prisma.unit.create({
    data: {
      name,
    },
  });
  res.json(newUnit);
};
