import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    reporter: [
        ['list'],
        ['html', {
            outputFolder: 'playwright-report',
            open: 'never'
        }]
    ],

    use: {
        baseURL: 'https://api.restful-api.dev',
        extraHTTPHeaders: {
            'Content-Type': 'application/json'
        }
    }
});