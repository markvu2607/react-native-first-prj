import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface SVGProps {
  width: string;
  height: string;
  fill: string;
}

function FreeTimeSVG(props: SVGProps) {
  const {width, height, fill} = props;

  return (
    <Svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 20 21"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M13.55 20.5L10 16.95L11.05 15.9L13.525 18.375L18.125 13.775L19.175 14.85L13.55 20.5ZM4.225 14.825L3.175 13.775L4.95 12L3.175 10.225L4.225 9.175L6 10.95L7.775 9.175L8.825 10.225L7.05 12L8.825 13.775L7.775 14.825L6 13.05L4.225 14.825ZM1.5 20C1.1 20 0.75 19.85 0.45 19.55C0.15 19.25 0 18.9 0 18.5V3C0 2.6 0.15 2.25 0.45 1.95C0.75 1.65 1.1 1.5 1.5 1.5H3.125V0H4.75V1.5H13.25V0H14.875V1.5H16.5C16.9 1.5 17.25 1.65 17.55 1.95C17.85 2.25 18 2.6 18 3V11.8L16.5 13.3V7.75H1.5V18.5H9.425L10.925 20H1.5ZM1.5 6.25H16.5V3H1.5V6.25ZM1.5 6.25V3V6.25Z" />
    </Svg>
  );
}

export default FreeTimeSVG;
