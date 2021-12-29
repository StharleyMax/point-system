import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/User.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User>{}
