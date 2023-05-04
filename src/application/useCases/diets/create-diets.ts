import { Injectable } from '@nestjs/common';
import { Diet } from 'src/application/entities/diet';
import { DietRepository } from 'src/application/repositories/diets-repository';
import { DietAlreadyExists } from './errors/diet-already-exists';
interface CreateDietRequest {
  title: string;
  content: string;
  createdAt?: Date;
  dietType: boolean;
}

@Injectable()
export class CreateDiet {
  constructor(private readonly dietRepository: DietRepository) {}

  async execute(request: CreateDietRequest) {
    const { title, content, dietType } = request;
    const verifyIfAlredyExists = await this.dietRepository.listByName(title);

    if (verifyIfAlredyExists) {
      throw new DietAlreadyExists();
    }

    const diet = new Diet({
      title,
      content,
      dietType,
    });

    await this.dietRepository.create(diet);

    return { diet };
  }
}
