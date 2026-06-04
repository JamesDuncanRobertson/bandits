import { inject } from '@vercel/analytics';

// Initialize Vercel Web Analytics
// The inject() function automatically tracks page views and web vitals
inject({
  mode: 'auto', // Automatically detects environment (production/development)
});
