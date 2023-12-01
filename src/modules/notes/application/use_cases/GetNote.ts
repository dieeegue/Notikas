import { NotesRepository } from '../../domain/repositories/NotesRepository'

export class GetNote {
  constructor(private repository: NotesRepository) {}

  async execute(id: string) {
    return await this.repository.getNote(id)
  }
}
