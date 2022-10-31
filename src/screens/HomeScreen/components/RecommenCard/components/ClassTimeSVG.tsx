import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface SVGProps {
  width: string;
  height: string;
  fill: string;
}

function ClassTimeSVG(props: SVGProps) {
  const {width, height, fill} = props;

  return (
    <Svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 22 18"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M10.975 18L3.725 14.025V8.025L0 6L10.975 0L22 6V13.925H20.5V6.875L18.225 8.025V14.025L10.975 18ZM10.975 10.3L18.85 6L10.975 1.775L3.15 6L10.975 10.3ZM10.975 16.3L16.725 13.125V8.925L10.975 12L5.225 8.875V13.125L10.975 16.3Z" />
    </Svg>
  );
}

export default ClassTimeSVG;
