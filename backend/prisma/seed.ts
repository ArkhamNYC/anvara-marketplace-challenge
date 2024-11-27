import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clean the database (in correct order based on relations)
  await prisma.listing.deleteMany({});
  await prisma.outOfHomePackage.deleteMany({});
  await prisma.tier.deleteMany({});
  await prisma.event.deleteMany({});
  await prisma.outOfHome.deleteMany({});
  await prisma.onProduct.deleteMany({});
  await prisma.location.deleteMany({});
  await prisma.company.deleteMany({});

  // Create a company
  const company = await prisma.company.create({
    data: {
      name: "Creative Studios",
    },
  });

  // Create locations
  const nycLocation = await prisma.location.create({
    data: {
      address: "123 Main St, New York, NY",
      coordinates: [40.7128, -74.006],
    },
  });

  const laLocation = await prisma.location.create({
    data: {
      address: "456 Hollywood Blvd, Los Angeles, CA",
      coordinates: [34.0928, -118.3287],
    },
  });

  // Create an event with tiers
  const coachella = await prisma.event.create({
    data: {
      name: "Coachella Sponsorship",
      startDate: new Date("2024-04-12"),
      endDate: new Date("2024-04-21"),
      location: "Indio, California",
      tiers: {
        create: [
          {
            name: "Gold Tier",
            price: 50000,
            description: "Premium sponsorship package",
          },
          {
            name: "Silver Tier",
            price: 30000,
            description: "Standard sponsorship package",
          },
        ],
      },
    },
  });

  // Create Out of Home campaign with packages
  const billboard = await prisma.outOfHome.create({
    data: {
      name: "Times Square Billboard",
      location: "Times Square, NYC",
      startDate: new Date("2024-05-01"),
      endDate: new Date("2024-05-31"),
      packages: {
        create: [
          {
            name: "Weekly Package",
            price: 5000,
          },
          {
            name: "Monthly Package",
            price: 15000,
          },
        ],
      },
    },
  });

  // Create OnProduct campaign
  const coffeeProduct = await prisma.onProduct.create({
    data: {
      name: "Coffee Cup Branding",
      description: "Your brand on premium coffee cups",
      startDate: new Date("2024-06-01"),
      endDate: new Date("2024-06-30"),
      pricePerUnit: 2.5,
      totalUnits: 10000,
    },
  });

  // Create listings connecting everything
  await prisma.listing.create({
    data: {
      name: "Coachella Gold Sponsorship",
      description: "Premium festival branding opportunity",
      startDate: new Date("2024-04-12"),
      endDate: new Date("2024-04-21"),
      companyId: company.id,
      locationId: laLocation.id,
      eventListingId: coachella.id,
    },
  });

  await prisma.listing.create({
    data: {
      name: "Times Square Billboard Campaign",
      description: "Prime billboard location in NYC",
      startDate: new Date("2024-05-01"),
      endDate: new Date("2024-05-31"),
      companyId: company.id,
      locationId: nycLocation.id,
      oohListingId: billboard.id,
    },
  });

  await prisma.listing.create({
    data: {
      name: "Coffee Cup Advertising",
      description: "Brand placement on coffee cups",
      startDate: new Date("2024-06-01"),
      endDate: new Date("2024-06-30"),
      companyId: company.id,
      locationId: nycLocation.id,
      onProductListingId: coffeeProduct.id,
    },
  });

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
