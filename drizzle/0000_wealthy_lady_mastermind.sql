CREATE TABLE `notes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`color` text NOT NULL,
	`createdAt` text NOT NULL,
	`isFavorite` integer DEFAULT 0 NOT NULL
);
