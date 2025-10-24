import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // Cabeceras de seguridad básicas
  response.headers.set("X-Frame-Options", "DENY"); // no permitir iframes
  response.headers.set("X-Content-Type-Options", "nosniff"); // no adivinar MIME
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Podés sumar CSP después si querés más duro

  return response;
}

// Opcional: limitás dónde corre el middleware
export const config = {
  matcher: [
    // corre en todo menos en archivos estáticos y assets de Next
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
