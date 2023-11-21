import { Resvg } from "@resvg/resvg-js";
import type { SatoriOptions } from "satori";
import satori from "satori";
import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from "~/routes/resource/ogimage";

// Load the font and images from the public folder
const fontSans = (baseUrl: string) =>
  fetch(new URL(`${baseUrl}/font/Inter-ExtraBold.otf`)).then((res) =>
    res.arrayBuffer()
  );

const avatarImage = (baseUrl: string) =>
  fetch(new URL(`${baseUrl}/images/Luka-Lazic.png`)).then((res) =>
    res.arrayBuffer()
  );

const logoImage = (baseUrl: string) =>
  fetch(new URL(`${baseUrl}/images/logo-inverted.png`)).then((res) =>
    res.arrayBuffer()
  );

export async function generateOGImage(
  title: string,
  requestUrl: string,
  date: string
) {
  const fontSansData = await fontSans(requestUrl);
  const avatar = await avatarImage(requestUrl);
  const logo = await logoImage(requestUrl);
  const options: SatoriOptions = {
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    fonts: [
      {
        name: "Inter",
        data: fontSansData,
        style: "normal",
      },
    ],
  };

  const dateToDisplay = date
    ? new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  // Generate the new image with "satori"
  const svg = await satori(
    <div
      style={{
        width: options.width,
        height: options.height,
        background: "rgb(17 24 39)",
        color: "white",
        fontFamily: "Inter",
        fontSize: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <img
        src={avatar}
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "350px",
          height: "350px",
        }}
      />
      <div
        style={{
          padding: "0 50px 100px 0",
          width: "70%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div style={{ fontSize: 30, display: "flex" }}>{dateToDisplay}</div>
        <div>{title}</div>
      </div>
      <img
        style={{
          position: "absolute",
          left: "50px",
          top: "50px",
          width: "270px",
          height: "85px",
        }}
        src={logo}
      />
    </div>,
    options
  );

  // Convert to PNG
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
}
