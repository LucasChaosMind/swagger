import { getCustomRepository } from 'typeorm';
import UserAccount from '../models/UserAccount';
import { UserAccountRepository } from '../repositories/UserAccountRepository';

export class UserAccountService {
  private userAccountRepository = getCustomRepository(UserAccountRepository);

  addUser(user: UserAccount): Promise<UserAccount> {
    return this.userAccountRepository.save(user);
  }

  getUsers(): Promise<UserAccount[]> {
    return this.userAccountRepository.find();
  }
}
 