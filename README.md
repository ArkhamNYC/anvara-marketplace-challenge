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

# Install GraphQL client (choose one):
npm install urql   # For urql
# OR
npm install @apollo/client graphql   # For Apollo

npm run dev

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

## Evaluation Criteria

We'll evaluate your implementation across these key areas:

### Technical Implementation

- GraphQL setup and query structure
- Component architecture and reusability
- State and error handling
- Filter/search implementation
- Loading state management

### Code Quality

- TypeScript usage and type safety
- Code organization and readability
- React and GraphQL best practices
- Error handling patterns

### User Experience

- Responsive and clean interface
- Intuitive filtering and search
- Loading and error states
- Edge case handling

## Time Limit

- Submit within 24 hours
