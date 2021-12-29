import { EntityRepository, Repository } from 'typeorm';
import { Point } from '../entities/Point.entity';


@EntityRepository(Point)
export class PointRepository extends Repository<Point>{ }
