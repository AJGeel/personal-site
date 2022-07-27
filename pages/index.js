import { AppLink } from "../components/app-link";
import Head from "next/head";

// Data

const links = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/ajgeel",
    target: "_blank",
  },
  { label: "CV", url: "/cv", target: "_self" },
  {
    label: "hello@arthurgeel.com",
    url: "mailto:hello@arthurgeel.com?subject=Hi%20there!&body=Hi%20Arthur%2C%20nice%20to%20meet%20you!%0D%0A%0D%0A%5BYour%20text%20goes%20here%5D",
    target: "_blank",
  },
];

const paragraphStyle = "text-[15px] leading-relaxed text-white/70";

// Helper Components

function ProfilePic({}) {
  return (
    <div
      className="w-12 h-12 rounded-full bg-center bg-cover"
      style={{ backgroundImage: `url('aj-profile.jpg')` }}
    />
  );
}

function AboutMe({}) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Hi, my name is Arthur.</h1>
      <div className={paragraphStyle}>
        <p className="mb-4 sm:mb-0">
          I&apos;m a UX Designer &times; Front-End Dev based in the Netherlands.
        </p>
        <p>
          Crafting beautiful interactions and interfaces is what I like doing
          most. Less, but better.
        </p>
      </div>
      <p className={paragraphStyle}>
        Currently working as a UX Designer / Developer for{" "}
        <a
          className="hover:text-yellow-200 duration-150"
          href="https://brightmotive.com"
          target="_blank"
          rel="noreferrer"
        >
          Brightmotive
        </a>
        .
      </p>
    </div>
  );
}

function ExternalLinks({}) {
  return (
    <div className="flex flex-wrap -m-3">
      {links.map((item) => (
        <AppLink
          key={item.url}
          url={item.url}
          label={item.label}
          target={item.target}
          className={`${paragraphStyle} m-3 hover:text-yellow-200 duration-150`}
        />
      ))}
    </div>
  );
}

function UpdatedHead() {
  const title = "Arthur Geel — Personal website";
  const desc = `I'm a UX Designer &times; Front-End Dev based in the Netherlands. Crafting beautiful interactions and interfaces is what I like doing most.`;
  const imgSrc = "/code.jpg";
  const url = "https://arthurgeel.netlify.app";

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={desc} />
      <link rel="shortcut icon" href="/favicon.svg" />
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
      <section className="max-w-lg w-full flex flex-col space-y-8 text-white p-8">
        <ProfilePic />
        <AboutMe />
        <ExternalLinks />
      </section>

      <UpdatedHead />
    </div>
  );
}
