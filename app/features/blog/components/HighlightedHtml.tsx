import React, { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";

hljs.registerLanguage("typescript", typescript);

interface IHighlightedHtmlContent {
  htmlContent: string;
}

const HighlightedHtmlContent: React.FC<IHighlightedHtmlContent> = ({
  htmlContent,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const codeBlocks = containerRef.current.querySelectorAll("code");

      codeBlocks.forEach((block) => {
        hljs.highlightBlock(block);
      });
    }
  }, [htmlContent]);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{
        __html: htmlContent.replace(
          /href/g,
          "target='_blank' class='hover-underline-animation hover:text-white transition-all' href"
        ),
      }}
    />
  );
};

export { HighlightedHtmlContent };
