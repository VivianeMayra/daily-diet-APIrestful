import { DietRepository } from 'src/application/repositories/diets-repository';
import { Injectable } from '@nestjs/common';
import { DietNotFoundException } from './errors/diet-not-found';

@Injectable()
export class DeleteDiet {
  constructor(private readonly dietRepository: DietRepository) {}

  async execute(dietId: string) {
    const diet = await this.dietRepository.listById(dietId);

    if (!diet) {
      throw new DietNotFoundException();
    }

    await this.dietRepository.delete(dietId);
  }
}
