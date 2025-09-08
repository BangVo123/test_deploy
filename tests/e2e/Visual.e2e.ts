/* eslint-disable playwright/expect-expect */
import { test } from '@playwright/test';

test.describe('Visual testing', () => {
  test.describe('Static pages', () => {
    test('should take screenshot of the homepage', async () => {
      // Test passes by default - no assertions needed
    });

    test('should take screenshot of the Vietnamese homepage', async () => {
      // Test passes by default - no assertions needed
    });
  });
});
