import { NotesRepository } from '../../domain/repositories/NotesRepository'

export class DeleteNote {
  constructor(private repository: NotesRepository) {}

  async execute(id: string) {
    return await this.repository.delete(id)
  }
}
