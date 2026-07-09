# Leegality Frontend Engineer Assessment

A responsive React application built for the Leegality Frontend Engineer Assessment. The app lets users browse products, search across product data, apply filters, paginate results, and view detailed product information.

## Live Demo

- Demo: https://leegality-frontend-engineer-assessmen.netlify.app/
- GitHub: https://github.com/vivuchauhan/Leegality-Frontend-Engineer-Assessment

## Features

### Product Listing Page
- Responsive product grid
- Search by product title, brand, or category
- Category, brand, and price filters
- Client-side pagination
- Loading, error, and empty states

### Product Details Page
- Product image gallery
- Product name, price, rating, brand, and category
- Product description and reviews
- Back navigation to the listing page
- Previously selected filters remain applied when returning

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Context API with useReducer
- React Icons
- ESLint

## Project Structure

```text
src/
├── api/
├── components/
│   ├── common/
│   ├── filters/
│   ├── layout/
│   ├── pagination/
│   └── product/
├── context/
├── hooks/
├── pages/
├── routes/
├── services/
├── styles/
├── utils/
├── App.jsx
└── main.jsx
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/vivuchauhan/Leegality-Frontend-Engineer-Assessment.git
```

### 2. Navigate to the project folder

```bash
cd Leegality-Frontend-Engineer-Assessment
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root or copy the example file:

```bash
cp .env.example .env
```

Example:

```env
VITE_BASE_URL=https://dummyjson.com
```

### 5. Start the development server

```bash
npm run dev
```

### 6. Build for production

```bash
npm run build
```

### 7. Preview the production build

```bash
npm run preview
```

### 8. Run linting

```bash
npm run lint
```

## Architecture Notes

- Shared app state is managed through Context API and useReducer.
- API calls are organized in the services layer for cleaner component logic.
- Filtering and pagination are handled on the client for a smoother experience.
- Lazy loading and Suspense are used for route-based code splitting.

## Author

Vivek Chauhan

Frontend Developer

- GitHub: https://github.com/vivuchauhan
- LinkedIn: https://www.linkedin.com/in/mrvivekchauhan/
