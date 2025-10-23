declare module '*.png' {
  import type { StaticImageData } from 'next/image';
  const value: StaticImageData;
  export default value;
}

declare module '*.jpg' {
  import type { StaticImageData } from 'next/image';
  const value: StaticImageData;
  export default value;
}

declare module '*.jpeg' {
  import type { StaticImageData } from 'next/image';
  const value: StaticImageData;
  export default value;
}

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
