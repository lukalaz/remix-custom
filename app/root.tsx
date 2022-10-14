import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css";
import Header from "~/common/components/Header";
import Footer from "./common/components/Footer";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: "https://use.typekit.net/ztf5rux.css" },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Luka Lazic | Typescript Development | ll-tech",
  description:
    "This is my personal website where I showcase my projects and write about web development. I like to use React, Remix, Tailwind, Prisma and more!",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-black">
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <Footer />
        <LiveReload />
      </body>
    </html>
  );
}
