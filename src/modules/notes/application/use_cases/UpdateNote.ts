import { Note } from '../../domain/models/Note'
import { NotesRepository } from '../../domain/repositories/NotesRepository'

export class UpdateNote {
  constructor(private repository: NotesRepository) {}

  async execute(note: Note) {
    return await this.repository.update(note)
  }
}
