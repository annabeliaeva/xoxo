-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "surname" VARCHAR(35) NOT NULL,
    "age" INTEGER NOT NULL,
    "sex" VARCHAR(10) NOT NULL,
    "country" VARCHAR(50) NOT NULL,
    "city" VARCHAR(30) NOT NULL,
    "avatar_url" VARCHAR(150) NOT NULL DEFAULT 'https://i.pinimg.com/originals/a8/8b/b6/a88bb6c1cbeeafe541d381d6d15d23d1.jpg',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
