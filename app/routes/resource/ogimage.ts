import type { LoaderArgs } from "@remix-run/node";
import { generateOGImage } from "~/features/generateImage/generateOGImage.server";

export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export const loader = async ({ request }: LoaderArgs) => {
  const { origin, searchParams } = new URL(request.url);
  console.log(searchParams);
  const title = searchParams.get("ogimage") ?? `Hello world`;

  const png = await generateOGImage(title, origin);

  // TODO: add cache control?
  return new Response(png, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      //   "cache-control": "public, immutable, no-transform, max-age=30000000",
    },
  });
};
