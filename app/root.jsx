import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import { json } from "@remix-run/node";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "./components/Feature";
import Grid from "./components/Grid";
import Page from "./components/Page";
import Teaser from "./components/Teaser";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Article from "./components/Article";
import AllArticles from "./components/AllArticles";
import PopularArticles from "./components/PopularArticles";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  hero: Hero,
  article: Article,
  "all-articles": AllArticles,
  "popular-articles": PopularArticles,
};

storyblokInit({
  accessToken: "xr4OhJ2GGQ6Oco2ugxQn0Att",
  // accessToken: "Emnizr56hPngvgre00Wwnwtt", //copy
  use: [apiPlugin],
  components,
});

export const loader = async ({ params }) => {
  let lang = params.lang || "default";

  return json({ lang });
};
export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export default function App() {
  const { lang } = useLoaderData;
  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  );
}
