CREATE TABLE `contact_messages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`subject` varchar(500),
	`message` text NOT NULL,
	`status` enum('new','read','replied') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contact_messages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `contest_entries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`contestId` int NOT NULL,
	`userId` int NOT NULL,
	`teamId` int NOT NULL,
	`rank` int,
	`points` int NOT NULL DEFAULT 0,
	`joinedAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contest_entries_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `contests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`matchId` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text,
	`maxParticipants` int NOT NULL DEFAULT 100,
	`currentParticipants` int NOT NULL DEFAULT 0,
	`entryFee` int NOT NULL DEFAULT 0,
	`prizeDescription` text,
	`status` enum('open','live','completed') NOT NULL DEFAULT 'open',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contests_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `matches` (
	`id` int AUTO_INCREMENT NOT NULL,
	`team1` varchar(255) NOT NULL,
	`team1Short` varchar(10) NOT NULL,
	`team2` varchar(255) NOT NULL,
	`team2Short` varchar(10) NOT NULL,
	`tournament` varchar(255) NOT NULL,
	`venue` varchar(500),
	`matchDate` timestamp NOT NULL,
	`status` enum('upcoming','live','completed') NOT NULL DEFAULT 'upcoming',
	`team1Score` varchar(100),
	`team2Score` varchar(100),
	`result` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `matches_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `players` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`team` varchar(255) NOT NULL,
	`teamShort` varchar(10) NOT NULL,
	`role` enum('batsman','bowler','all-rounder','wicket-keeper') NOT NULL,
	`credits` int NOT NULL DEFAULT 8,
	`imageUrl` text,
	`battingStyle` varchar(100),
	`bowlingStyle` varchar(100),
	`totalPoints` int NOT NULL DEFAULT 0,
	`matchId` int NOT NULL,
	`runs` int NOT NULL DEFAULT 0,
	`balls` int NOT NULL DEFAULT 0,
	`fours` int NOT NULL DEFAULT 0,
	`sixes` int NOT NULL DEFAULT 0,
	`wickets` int NOT NULL DEFAULT 0,
	`maidens` int NOT NULL DEFAULT 0,
	`catches` int NOT NULL DEFAULT 0,
	`stumpings` int NOT NULL DEFAULT 0,
	`runOuts` int NOT NULL DEFAULT 0,
	`oversBowled` int NOT NULL DEFAULT 0,
	`runsConceded` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `players_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `team_players` (
	`id` int AUTO_INCREMENT NOT NULL,
	`teamId` int NOT NULL,
	`playerId` int NOT NULL,
	`isCaptain` boolean NOT NULL DEFAULT false,
	`isViceCaptain` boolean NOT NULL DEFAULT false,
	`points` int NOT NULL DEFAULT 0,
	CONSTRAINT `team_players_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `teams` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`matchId` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`captainId` int,
	`viceCaptainId` int,
	`totalCredits` int NOT NULL DEFAULT 0,
	`totalPoints` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `teams_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` ADD `avatar` text;--> statement-breakpoint
ALTER TABLE `users` ADD `totalPoints` int DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `matchesPlayed` int DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `contestsWon` int DEFAULT 0 NOT NULL;