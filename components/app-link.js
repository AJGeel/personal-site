import Link from "next/link";

// Helper components
function ExternalIcon({}) {
  return (
    <svg fill="currentColor" viewBox="0 0 16 16" className="h-4 w-4 mb-0.5">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9274 3.63672L13.9274 12.6451H12.4274L12.4274 6.19738L3.75597 14.8688L2.69531 13.8081L11.3667 5.13672L4.91902 5.13672L4.91902 3.63672H13.9274Z"
      />
    </svg>
  );
}

// View
export function AppLink({ url, label, className, target }) {
  let classes = `inline-flex items-center space-x-0.5 duration-150 active:opacity-70 ${className}`;

  if (target === "_blank") {
    return (
      <a href={url} target={target} className={classes} rel="noreferrer">
        <p>{label}</p>
        <ExternalIcon aria-hidden="true" />
      </a>
    );
  } else {
    return (
      <Link href={url}>
        <a className={classes}>
          <p>{label}</p>
          <ExternalIcon aria-hidden="true" />
        </a>
      </Link>
    );
  }
}
