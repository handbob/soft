import { defineConfig } from '@playwright/test';

defineConfig({
    testDir: './tests/e2e',
    reporter: [
        ['list'],
        ['html', { 
            outputFolder: 'test-reports/playwright-html-report', 
            open: 'never'
        }],
        ['json', { 
            outputFile: 'test-reports/playwright-report.json'
        }]
    ],
    use: {
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry'
    }
});

export default defineConfig;
