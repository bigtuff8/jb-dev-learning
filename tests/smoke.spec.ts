﻿import { test, expect } from "@playwright/test";

test("local sanity check", async ({ page }) => {
  await page.goto("https://example.com");
  await expect(page).toHaveTitle(/Example Domain/);
});
