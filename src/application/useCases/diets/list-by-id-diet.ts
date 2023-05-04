import { Injectable } from '@nestjs/common';
import { DietRepository } from 'src/application/repositories/diets-repository';
import { DietNotFoundException } from './errors/diet-not-found';

@Injectable()
export class ListByIdDiet {
  constructor(private readonly dietRepository: DietRepository) {}

  async execute(dietId: string) {
    const diet = await this.dietRepository.listById(dietId);

    if (!diet) {
      throw new DietNotFoundException();
    }

    return diet;
  }
}
