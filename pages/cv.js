import Head from "next/head";
import { AppLink } from "../components/app-link";
import { PaperClipIcon } from "@heroicons/react/outline";

// Data

const paragraphStyle = "text-[15px] leading-relaxed text-white/70";
const cvEmailSnippet =
  "mailto:hello@arthurgeel.com?subject=About%20that%20CV%20of%20yours..&body=Hi%20Arthur%2C%0D%0A%0D%0AWould%20you%20mind%20sharing%20your%20CV%3F%0D%0A%0D%0A%E2%80%94%20%5Byour%20name%20here%5D";

// Helper Components

function CV({}) {
  return (
    <a
      className="flex flex-col items-center space-y-2 hover:space-y-3 hover:scale-105 duration-300 cursor-pointer active:scale-95 active:opacity-80 select-none flex-shrink-0 group"
      href={cvEmailSnippet}
      target="_blank"
      rel="noreferrer"
    >
      <div className="w-28 h-40 bg-white hover:bg-yellow-50 rounded-sm text-green-900/50 flex flex-col items-center justify-center space-y-2">
        <PaperClipIcon className="h-8 w-8 text-green-900/40 group-hover:text-green-900 duration-300" />
        <p className="group-hover:text-green-900 duration-300">cv.pdf</p>
      </div>
      <p className={`${paragraphStyle} duration-300`}>Request ☝️</p>
    </a>
  );
}

function UpdatedHead() {
  const title = "Arthur Geel — CV";
  const desc = `My CV is available upon request. Shoot me a message, and I'll get back to you!`;
  const imgSrc = "https://arthurgeel.com/code.jpg";
  const url = "https://arthurgeel.com";

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={desc} />
      <link rel="shortcut icon" href="/aj-profile.jpg" />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={imgSrc} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content={imgSrc} />
    </Head>
  );
}

// View
export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <section className="max-w-lg text-white p-8 space-y-12">
        <div className="flex flex-col-reverse sm:flex-row items-center sm:space-x-8">
          <CV />
          <div className="space-y-1 mb-8 sm:mb-0">
            <p className={paragraphStyle}>
              My CV is available upon request. Shoot me a message, and I&apos;ll
              get back to you!
            </p>
            <div className="-m-3">
              <AppLink
                url="/"
                label="Back to the homepage"
                target="_self"
                className={`${paragraphStyle} m-3 hover:text-yellow-200 duration-150`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
