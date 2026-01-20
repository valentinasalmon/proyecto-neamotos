import { test, expect } from "@playwright/test";

const routes = [
  "/",
  "/catalogo",
  "/cascos",
  "/cubiertas",
  "/financiacion",
  "/indumentaria",
  "/seguros",
];

for (const r of routes) {
  test(`carga ${r} sin romper`, async ({ page }) => {
    await page.goto(r);
    await expect(page.locator("body")).toBeVisible();
  });
}

test("indumentaria: abre/cierra modal de talles", async ({ page }) => {
  await page.goto("/indumentaria");

  await page.getByRole("button", { name: /tabla de talles/i }).click();
  await expect(page.getByText(/guía de talles/i)).toBeVisible();

  await page.getByRole("button", { name: /cerrar/i }).click();
  await expect(page.getByText(/guía de talles/i)).toBeHidden();
});

test("seguros: CTA consultar existe y apunta a whatsapp", async ({ page }) => {
  await page.goto("/seguros");
  const cta = page.getByRole("link", { name: /consultar/i });
  await expect(cta).toBeVisible();
  await expect(cta).toHaveAttribute("href", /whatsapp|wa\.me|api\.whatsapp\.com/i);
});
