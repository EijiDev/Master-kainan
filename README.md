# Master-Kainan Restaurant Website

A modern restaurant website and reservation system built with React and Vite, featuring a responsive design with Tailwind CSS.

## Project Overview

Master-Kainan is a full-featured restaurant web application that includes:

- **Navigation & Hero Section**: Eye-catching landing page with navigation
- **Food Menu Display**: Browse restaurant menu items with cards
- **Reservation System**: Online table reservation functionality
- **Contact Information**: Restaurant contact details and information
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS

## Tech Stack

### Frontend

- **React** 19.2.0 - UI framework
- **Vite** 7.2.4 - Build tool and dev server
- **Tailwind CSS** 4.1.18 - Utility-first CSS framework
- **PostCSS** 8.5.6 - CSS transformations

### Development Tools

- **ESLint** - Code quality and linting
- **Autoprefixer** - CSS vendor prefix handling

## Project Structure

```
src/
├── components/
│   ├── Contact.jsx          # Contact information component
│   ├── FoodMenu.jsx         # Menu display component
│   ├── Reservation.jsx      # Reservation form component
│   ├── partials/
│   │   ├── Hero.jsx         # Landing hero section
│   │   └── Nav.jsx          # Navigation bar
│   └── shared/
│       ├── Button.jsx       # Reusable button component
│       ├── DishCard.jsx     # Menu dish card component
│       ├── FormInput.jsx    # Form input component
│       └── SuccessMessage.jsx # Success feedback component
├── assets/
│   ├── icons/               # Icon assets
│   └── image/               # Image assets
├── App.jsx                  # Main app component
├── main.jsx                 # Entry point
├── App.css                  # App styles
└── index.css                # Global styles

public/                       # Static assets
backend/                      # Backend files (if applicable)
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd master-kainan
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

## Available Scripts

- `npm run dev` - Start development server with hot module reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Features

- **Navigation Bar**: Fixed or sticky navigation for easy access
- **Hero Section**: Attractive landing area with call-to-action
- **Food Menu**: Showcase dishes with DishCard components
- **Reservations**: Form for customers to book tables
- **Contact Section**: Location and contact information
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices

## Component Communication

The app uses React state management (`useState`) to handle reservation system state:

- When a user initiates a reservation, the `isReservationActive` state is toggled
- Hero and Contact sections conditionally render based on reservation state
- FoodMenu component controls reservation state through callbacks

## Styling

The project uses Tailwind CSS for styling with:

- Utility-first CSS classes
- Custom configuration in `tailwind.config.js`
- PostCSS for autoprefixing
- Global styles in `index.css` and `App.css`

## Configuration Files

- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS customization
- `postcss.config.js` - PostCSS plugins configuration
- `eslint.config.js` - ESLint rules configuration

## Future Enhancements

- Backend integration for reservation storage
- Payment processing
- Menu item filtering and search
- User accounts and reservation history
- Admin dashboard for menu and reservation management

## License

[Add license information here]

## Contact

For questions or feedback, please reach out through the contact section on the website.
