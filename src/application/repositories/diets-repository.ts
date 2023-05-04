import { Diet } from 'src/application/entities/diet';

export abstract class DietRepository {
  abstract listAll(): Promise<Diet[] | null>;
  abstract listById(dietId: string): Promise<Diet | null>;
  abstract listByName(dietTitle: string): Promise<Diet | null>;
  abstract create(diet: Diet): Promise<void>;
  abstract update(dietId: string, diet: Partial<Diet>): Promise<Partial<Diet>>;
  abstract delete(dietId: string): Promise<void>;
}
