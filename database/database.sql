CREATE TABLE IF NOT EXISTS `users` (
	`id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`first_name` VARCHAR(50),
	`middle_name` VARCHAR(50),
	`last_name` VARBINARY(50),
	`role` VARCHAR(10),
	`is_online` BOOLEAN,
	`password` TEXT(65535),
	`created_at` TIMESTAMP,
	`updated_at` TIMESTAMP,
	PRIMARY KEY(`id`)
);


CREATE TABLE IF NOT EXISTS `news` (
	`id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`user_id` INTEGER,
	`image` TEXT(65535),
	`heading` TEXT(65535),
	`body` TEXT(65535),
	`link_for_more` TEXT(65535),
	`created_at` TIMESTAMP,
	`updated_at` TIMESTAMP,
	PRIMARY KEY(`id`)
);