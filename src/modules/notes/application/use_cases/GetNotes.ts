import { NotesRepository } from '../../domain/repositories/NotesRepository'

export class GetNotes {
  constructor(private repository: NotesRepository) {}

  async execute() {
    return await this.repository.getAll()
  }
}
