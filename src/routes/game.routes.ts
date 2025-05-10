import express from 'express';
import { getAllGames, createGame } from '../controllers/game.controller';

const router = express.Router();

router.get('/', getAllGames);
router.post('/', createGame);

export default router;
