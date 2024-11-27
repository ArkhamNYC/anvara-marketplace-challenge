# Auction Challenge

Build a full-stack auction bidding system where users can view auctions and submit bids.

## Setup

### Prerequisites

- Node.js 18+
- Docker and Docker Compose

### Start Project

```bash
# Start database
docker-compose up -d

# Setup backend
cd backend
npm install
npx prisma migrate dev  # Creates database tables
npx prisma db seed     # Seeds initial auction data
npm run dev

# View/edit database (optional)
npx prisma studio   # Opens web interface at http://localhost:5555

# Setup frontend (in new terminal)
cd frontend
npm install
npm run dev
```
