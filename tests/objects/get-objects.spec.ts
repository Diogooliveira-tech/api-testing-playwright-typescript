import { test, expect } from '@playwright/test';

test.describe('Get Objects', () => {
    test('CT001 - Deve consultar um objeto existente', async ({ request }) => {

        // Arrange
        const objectId = '7';

        // Act
        const response = await request.get(`/objects/${objectId}`);
        const body = await response.json();

        // Assert
        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();

        expect(body.id).toBe(objectId);
        expect(body.name).toBeTruthy();
        expect(body.data).toBeDefined();
    });
});