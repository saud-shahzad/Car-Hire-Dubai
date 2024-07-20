// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Car Hire Dubai: Your Ultimate Guide to Renting in Style</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
     <meta name="google-site-verification" content="MxBXJqaraLTtv1pULgZzobHIJD29tNHEQHy4CBzxx0w" />

      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <A href="/">Home</A>
            <A href="https://carrentaldxb.com/about-us/">About</A>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
