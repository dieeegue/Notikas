import { Note } from '../../domain/models/Note'
import { NotesRepository } from '../../domain/repositories/NotesRepository'

export class CreateNote {
  constructor(private repository: NotesRepository) {}

  async execute(note: Note) {
    return await this.repository.create(note)
  }
}
