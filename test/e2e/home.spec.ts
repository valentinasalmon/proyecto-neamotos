import { test, expect } from "@playwright/test";

test("Home carga y muestra NEA MOTOS", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /nea motos/i })).toBeVisible();
});
