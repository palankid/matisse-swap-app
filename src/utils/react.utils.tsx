import React from "react";

export const transformTextIntoReactNode = (text: string): React.ReactNode => {
  return text
    .split(/<strong>(.*?)<\/strong>/)
    .map((str, idx) =>
      idx % 2 === 1 ? <strong key={idx}>{str}</strong> : str
    );
};
