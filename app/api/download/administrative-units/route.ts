export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FILE_URL =
  "https://molg.go.ug/wp-content/uploads/2025/09/ADMINISTRATIVE-UNITS-OF-UGANDA-AS-AT-1st-JULY-2025.pdf";

export async function GET() {
  try {
    const response = await fetch(FILE_URL, {
      cache: "no-store",
    });

    if (!response.ok || !response.body) {
      return new Response(
        "The statistical summary could not be downloaded.",
        {
          status: 502,
        },
      );
    }

    return new Response(response.body, {
      headers: {
        "Content-Type":
          response.headers.get("content-type") ??
          "application/pdf",

        "Content-Disposition":
          'attachment; filename="administrative-units-of-uganda-2025.pdf"',

        "Cache-Control":
          "public, max-age=3600",
      },
    });
  } catch {
    return new Response("The document download failed.", {
      status: 500,
    });
  }
}