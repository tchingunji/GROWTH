-- CreateTable
CREATE TABLE `inscrito` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(60) NOT NULL,
    `telefone` VARCHAR(20) NOT NULL,
    `cidade` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
