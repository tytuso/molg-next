import { NextRequest } from "next/server";

import { featuredDocuments } from "@/components/home/documents";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface RouteContext {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(
  _request: NextRequest,
  context: RouteContext,
) {
  const { slug } = await context.params;

  const document = featuredDocuments.find(
    (item) => item.slug === slug,
  );

  if (!document) {
    return new Response("Document not found.", {
      status: 404,
    });
  }

  try {
    const fileResponse = await fetch(document.fileUrl, {
      cache: "no-store",
    });

    if (!fileResponse.ok || !fileResponse.body) {
      return new Response(
        "The document could not be downloaded.",
        {
          status: 502,
        },
      );
    }

    const safeFilename = `${document.slug}.pdf`;

    return new Response(fileResponse.body, {
      headers: {
        "Content-Type":
          fileResponse.headers.get("content-type") ??
          "application/pdf",

        "Content-Disposition":
          `attachment; filename="${safeFilename}"`,

        "Cache-Control":
          "public, max-age=3600",
      },
    });
  } catch {
    return new Response(
      "The document download failed.",
      {
        status: 500,
      },
    );
  }
}