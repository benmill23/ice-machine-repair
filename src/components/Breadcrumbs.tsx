import Link from "next/link";
import React from "react";

/** Visual breadcrumb trail (pairs with breadcrumbSchema for SEO). */
export default function Breadcrumbs({
  crumbs,
}: {
  crumbs: { name: string; path: string }[];
}) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {crumbs.map((c, i) => {
        const last = i === crumbs.length - 1;
        return (
          <React.Fragment key={c.path}>
            {last ? (
              <span aria-current="page">{c.name}</span>
            ) : (
              <Link href={c.path}>{c.name}</Link>
            )}
            {!last && <span className="sep">/</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
