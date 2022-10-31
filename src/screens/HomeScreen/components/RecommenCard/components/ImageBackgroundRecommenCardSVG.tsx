import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface SVGProps {
  width: string;
  height: string;
  fill: string;
}

function ImageBackgroundRecommenCardSVG(props: SVGProps) {
  const {width, height, fill} = props;

  return (
    <Svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 97 57"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M79.3463 -107.64C96.6954 -112.74 115.389 -102.631 129.814 -91.7074C144.064 -80.9162 152.131 -64.5951 158.349 -47.8141C164.821 -30.3483 173.663 -10.8511 166.079 6.15916C158.597 22.94 136.99 26.3173 121.16 35.5963C107.311 43.7138 95.3888 56.8968 79.3463 56.9991C63.2671 57.1017 47.8398 48.1661 37.1444 36.1321C27.5511 25.3382 30.5783 8.92588 24.8351 -4.33403C18.1108 -19.8594 -4.67571 -31.656 0.857984 -47.6466C6.42916 -63.7455 33.0892 -56.9165 46.6077 -67.2496C60.7147 -78.0324 62.3221 -102.636 79.3463 -107.64Z"
        fill-opacity="0.7"
      />
    </Svg>
  );
}

export default ImageBackgroundRecommenCardSVG;
