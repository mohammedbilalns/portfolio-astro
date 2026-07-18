// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [
    icon({
      include: {
        carbon: ['workflow-automation', 'message-queue', 'diagram'],
        devicon: ['zustand'],
        logos: ['paypal', 'react-query-icon', 'stripe', 'websocket', 'grafana', 'socket-io'],
        mdi: ['video-wireless-outline', 'text-recognition'],
        ph: ['brackets-curly-duotone', 'image-square-duotone', 'puzzle-piece-duotone'],
        'simple-icons': ['drizzle', 'ejs', 'leetcode', 'tanstack', 'razorpay', 'github', 'linkedin', 'grafana', 'nginx'],
        'skill-icons': [
          'aws-dark',
          'docker',
          'expressjs-dark',
          'git',
          'github-dark',
          'githubactions-dark',
          'golang',
          'javascript',
          'linux-light',
          'mongodb',
          'nestjs-dark',
          'nextjs-dark',
          'nodejs-dark',
          'postgresql-dark',
          'prometheus',
          'python-light',
          'react-dark',
          'redis-dark',
          'redux',
          'tailwindcss-dark',
          'typescript',
          'linkedin',
        ],
        solar: [
          'map-point-bold-duotone',
          'stars-bold-duotone',
          'shield-keyhole-bold-duotone',
          'infinity-bold-duotone',
          'layers-minimalistic-bold-duotone',
          'database-bold-duotone',
        ],
        tabler: ['brand-socket-io'],
      },
    }),
  ],
});
