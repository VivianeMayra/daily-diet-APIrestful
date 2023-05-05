import { Injectable } from '@nestjs/common';
import { DietRepository } from 'src/application/repositories/diets-repository';
import { DietNotFoundException } from './errors/diet-not-found';

interface UpdateDietRequest {
  title?: string;
  content?: string;
  createdAt?: Date;
  dietType?: boolean;
}

@Injectable()
export class UpdateDiet {
  constructor(private readonly dietRepository: DietRepository) {}

  async execute(dietId: string, request: UpdateDietRequest) {
    const diet = await this.dietRepository.listById(dietId);

    if (!diet) {
      throw new DietNotFoundException();
    }

    await this.dietRepository.update(dietId, request);
  }
}
