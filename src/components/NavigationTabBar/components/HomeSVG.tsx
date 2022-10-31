import React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

interface SVGProps {
  width: string;
  height: string;
  fill: string;
}

function HomeSVG(props: SVGProps) {
  const {width, height, fill} = props;

  return (
    <Svg
      width={width}
      height={height}
      // fill={fill}
      viewBox="0 0 18 20"
      xmlns="http://www.w3.org/2000/svg">
      <Rect
        x="1"
        y="2.84668"
        width="15.3846"
        height="15.5769"
        rx="1.92308"
        stroke={fill}
        stroke-width="1.92308"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.1113 1.11572V4.57726"
        stroke={fill}
        stroke-width="1.92308"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.27344 1.11572V4.57726"
        stroke={fill}
        stroke-width="1.92308"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1 8.03906H16.3846"
        stroke={fill}
        stroke-width="1.92308"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default HomeSVG;
