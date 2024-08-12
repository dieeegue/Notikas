import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'

export const notes = sqliteTable('notes', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  content: text('content').notNull(),
  color: text('color', {
    enum: [
      'pastelDarkBlue',
      'pastelLightBlue',
      'pastelDarkPurple',
      'pastelLightPurple',
      'pastelPink',
      'pastelOrange',
      'pastelYellow',
      'pastelGreen',
    ],
  }).notNull(),
  createdAt: text('createdAt').notNull(),
  isFavorite: integer('isFavorite', { mode: 'boolean' })
    .notNull()
    .default(false),
})

export type Note = typeof notes.$inferSelect
