import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clean the database
  await prisma.bid.deleteMany({});
  await prisma.auction.deleteMany({});

  // Create auctions
  const auction1 = await prisma.auction.create({
    data: {
      title: "Vintage Watch Auction",
      currentPrice: 10000,
      status: "ACTIVE",
      endTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
      bids: {
        create: [
          {
            amount: 10000,
            createdAt: new Date(Date.now() - 1000000),
          },
        ],
      },
    },
  });

  const auction2 = await prisma.auction.create({
    data: {
      title: "Art Collection",
      currentPrice: 50000,
      status: "ACTIVE",
      endTime: new Date(Date.now() + 48 * 60 * 60 * 1000), // 48 hours from now
      bids: {
        create: [
          {
            amount: 50000,
            createdAt: new Date(Date.now() - 2000000),
          },
        ],
      },
    },
  });

  console.log({ auction1, auction2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
