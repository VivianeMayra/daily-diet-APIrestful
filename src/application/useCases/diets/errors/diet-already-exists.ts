import { ConflictException } from '@nestjs/common';

export class DietAlreadyExists extends ConflictException {
  constructor() {
    super(`diet already exists in the database`, DietAlreadyExists.name);
  }
}
