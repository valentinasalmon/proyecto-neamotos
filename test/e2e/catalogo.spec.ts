import { test, expect } from "@playwright/test";

test("Catálogo carga y muestra marcas", async ({ page }) => {
  await page.goto("/catalogo");
  await expect(page.getByText(/zanella|motomel|bajaj|corven/i)).toBeVisible();
});
