/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Update to include paths where Tailwind should look for class names
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937', // Dark grey for sidebar
        secondary: '#10b981', // Green for buttons and accents
        danger: '#ef4444', // Red for errors and action buttons
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern font for a cleaner look
      },
      spacing: {
        '72': '18rem', // Custom spacing for larger padding or margin
        '84': '21rem',
        '96': '24rem',
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.1)', // Custom shadow for cards
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Optional: better styling for forms
    require('@tailwindcss/typography'), // Optional: enhanced typography styles
  ],
}
