import { test, expect } from '@playwright/test';

test.describe('Get Objects - Gherkin', () => {
    test('CT002 - Deve consultar um objeto existente com passos Gherkin', async ({ request }) => {
        const objectId = await test.step('Dado que existe um objeto com o ID "7"', async () => {
            return '7';
        });

        const response = await test.step('Quando consulto esse objeto pelo ID', async () => {
            return request.get(`/objects/${objectId}`);
        });

        await test.step('Então a API deve retornar o status 200', async () => {
            expect(response.status()).toBe(200);
            expect(response.ok()).toBeTruthy();
        });

        await test.step('E deve retornar os dados do objeto consultado', async () => {
            const body = await response.json();

            expect(body.id).toBe(objectId);
            expect(body.name).toBeTruthy();
            expect(body.data).toBeDefined();
        });
    });
});
