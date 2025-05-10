import { Request, Response } from 'express';
import Game from '../models/game.model';

export const getAllGames = async (req: Request, res: Response) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch games' });
  }
};

export const createGame = async (req: Request, res: Response) => {
  try {
    const game = new Game(req.body);
    const savedGame = await game.save();
    res.status(201).json(savedGame);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create game' });
  }
};

// ...existing code for createGame, getGameById, updateGame, deleteGame...
