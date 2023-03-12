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
import NotFound from "./features/NotFound/NotFound";
import highlightCss from "highlight.js/styles/atom-one-dark.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: "https://use.typekit.net/ztf5rux.css" },
    {
      rel: "stylesheet",
      href: highlightCss,
    },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Luka Lazic | Typescript Development | ll-tech",
  description:
    "This is my personal website where I showcase my projects and write about web development. I like to use React, Remix, Tailwind, Prisma and more!",
  viewport: "width=device-width,initial-scale=1",
  keywords:
    "luka lazic, blog, developer, react, typescript, remix, tailwind, c#, dotnet, entity framework",
});

export default function App() {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-900">
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

export function CatchBoundary() {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-900">
        <Header />
        <NotFound />
        <ScrollRestoration />
        <Scripts />
        <Footer />
        <LiveReload />
      </body>
    </html>
  );
}
