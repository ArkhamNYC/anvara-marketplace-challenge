# Marketplace Challenge

## Overview

Create a marketplace interface for browsing and viewing advertising listings across different categories (Events, Out of Home, and On-Product advertising).

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
npx prisma db seed     # Seeds initial data
npm run dev

# View/edit database (optional)
npx prisma studio   # Opens web interface at http://localhost:5555

# Setup frontend (in new terminal)
cd frontend
npm install
npm run dev
```

## Requirements

### Frontend

- Implement marketplace grid view:
- Display listing cards with name, description, dates
- Show listing type (Event/OutOfHome/OnProduct)
- Add filtering and search functionality
- Handle loading and error states

### Backend

- Create GraphQL queries for:
- Fetching listings with filters
- Getting detailed listing information
- Implement proper error handling

## Evaluation

- Code organization
- GraphQL/TypeScript implementation
- Error handling
- UI/UX design
- Component structure

## Time Limit

- 90-120 minutes
- Submit within 24 hours
