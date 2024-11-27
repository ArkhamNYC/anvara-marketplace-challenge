import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const auctionRouter = Router();
const prisma = new PrismaClient();

auctionRouter.get(
  "/auctions/:id",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const auction = await prisma.auction.findUnique({
        where: { id: parseInt(req.params.id) },
        include: { bids: true },
      });

      if (!auction) {
        res.status(404).json({ error: "Auction not found" });
        return;
      }

      res.json(auction);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }
);

export default auctionRouter;
