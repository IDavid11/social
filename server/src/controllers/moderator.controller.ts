import { Request, Response } from "express";
import Book from "../models/Book";
import Report from "../models/Report";

export const updateBook = async (req: Request, res: Response) => {
  const { summary, category, editorial, language, pages } = req.body;
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!book) return res.status(404).json("That book isn't in our database");
  return res.status(200).json({ message: "Successfully updated", book });
};

// PUBLICA O LIBRO
export const publishBook = async (req: Request, res: Response) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  return res.status(200).json({ message: "Book published", book });
};

export const getReports = async (req: Request, res: Response) => {
  const reports = await Report.find();
  return res.status(200).json(reports);
};

export const getReport = async (req: Request, res: Response) => {
  const report = await Report.findById(req.params.id);
  return res.status(200).json(report);
};
