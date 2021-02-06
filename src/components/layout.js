import React from "react";
import { Title, Link, Meta } from "react-head";

import { domainName, seoDescription, seoTitle } from "../../cms/data.json";

export default function ({ children }) {
  return (
    <>
      <Title>{seoTitle}</Title>
      <Meta name="description" content={seoDescription} />
      <Link rel="canonical" content={domainName} />

      {children}
    </>
  );
}
