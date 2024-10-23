import { defineConfig } from 'vitest/config';

defineConfig({
    test: {
        include: ['tests/unit/**/*.test.js'],
        reporters: ['default', 'json'],
        coverage: {
            enabled: true,
            provider: 'istanbul',
            reportsDirectory: 'test-reports/coverage',
            reporter: ['text', 'json', 'html'],
            include: ['src/**/*.{js,jsx,ts,tsx}'],
            exclude: [
                'node_modules/',
                'tests/**',
                'path/to/excluded/files/**/*.js'
            ],
            all: true
        },
        globals: true
    }
});

export default defineConfig;
