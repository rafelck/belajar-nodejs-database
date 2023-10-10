import {PrismaClient} from "@prisma/client"

describe("Prisma Client", () => {
    it('should be able to connect the dabases', async () => {
        const prisma = new PrismaClient();
        await prisma.$connect();

        //     do someting

        await prisma.$disconnect();
    })
})