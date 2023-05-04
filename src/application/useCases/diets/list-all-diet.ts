import { DietRepository } from 'src/application/repositories/diets-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllDiet {
  constructor(private readonly dietRepository: DietRepository) {}

  async execute() {
    return await this.dietRepository.listAll();
  }
}
