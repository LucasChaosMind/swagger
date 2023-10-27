import { Request, Response } from 'express';
import axios from 'axios';
import UserAccount from '../models/UserAccount';
import { UserAccountService } from '../services/UserAccountService';

const userAccountService = new UserAccountService();

export const createUser = async (req: Request, res: Response) => {
  try {
    const user: UserAccount = req.body;

    const newUser = await userAccountService.addUser(user);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar o usuário.' });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    // Busca os usuários no banco de dados usando o TypeORM
    const users = await userAccountService.getUsers();

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar os usuários.' });
  }
};

export const fetchExternalData = async (req: Request, res: Response) => {
  try {
    // Faz uma chamada a uma API externa usando o Axios
    const response = await axios.get('https://api.exemplo.com/dados');

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar dados externos.' });
  }
};