import React from 'react';
import { IconProps } from './interface';

function TxtSVG(props: IconProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <svg width={64} height={64} viewBox="0 0 64 64" {...props}>
      <path d="M15 64h43a6 6 0 006-6V17L47 0H15a6 6 0 00-6 6v52a6 6 0 006 6z" fill="#fff" />
      <path opacity={0.16} d="M47 0l17 17H53a6 6 0 01-6-6V0z" fill="#000" />
      <path d="M0 34l9-9v9h38v22H0V34z" fill="#7B819C" />
      <path opacity={0.3} d="M9 25v9H0l9-9z" fill="#000" />
      <path
        d="M11.112 49.57c-.374 0-.663.118-.884.356-.255.238-.374.544-.374.918 0 .34.119.646.374.901.221.221.51.34.884.34.34 0 .646-.119.901-.34.238-.255.374-.56.374-.9 0-.375-.136-.68-.374-.919a1.287 1.287 0 00-.901-.357zM17.12 40.372l-1.801.748v2.091h-1.632v1.496h1.632v5.1c0 .697.153 1.224.493 1.598.34.391.9.595 1.649.595h1.445v-1.496H17.75c-.221 0-.374-.068-.476-.17-.102-.119-.153-.289-.153-.527v-5.1h2.006v-1.496H17.12v-2.839zM20.034 43.211l3.043 4.114L19.643 52h2.125l2.312-3.349 2.295 3.35h2.108l-3.417-4.676 3.043-4.114H26L24.08 46l-1.938-2.788h-2.108zM32.261 40.372l-1.802.748v2.091h-1.631v1.496h1.631v5.1c0 .697.154 1.224.494 1.598.34.391.9.595 1.649.595h1.445v-1.496H32.89c-.221 0-.374-.068-.477-.17-.102-.119-.153-.289-.153-.527v-5.1h2.006v-1.496h-2.006v-2.839z"
        fill="#fff"
      />
    </svg>
  );
}

export default TxtSVG;
