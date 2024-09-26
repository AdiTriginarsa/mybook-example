import React from "react";
import Giscus from "@giscus/react";
export default function CommentComp() {
  return (
    <Giscus
      repo="AdiTriginarsa/mybook-example"
      repoId="R_kgDOM3ahpw"
      category="Q&A"
      categoryId="DIC_kwDOM3ahp84Cizjm"
      mapping="url"
      term="Welcome to @giscus/react component!"
      strict="1"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="en"
    />
  );
}
