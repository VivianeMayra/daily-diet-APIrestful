import { NotFoundException } from '@nestjs/common';

export class DietNotFoundException extends NotFoundException {
  constructor() {
    super(`diet not found on database`, DietNotFoundException.name);
  }
}
