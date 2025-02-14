import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: ['dotenv/config', './tests/setup.js'],
    coverage: {
      provider: 'istanbul', // or 'v8'
      // provider: 'v8', // or 'v8'
      reporter: ['text', 'json', 'html'],
    },
  },
});
