import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface SVGProps {
  width: string;
  height: string;
  fill: string;
}

function NotificationSVG(props: SVGProps) {
  const {width, height, fill} = props;

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 18 20"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M13.8205 6.30901C13.8205 3.44137 11.5245 1.1167 8.69231 1.1167C5.86008 1.1167 3.56411 3.44137 3.56411 6.30901C3.56411 12.3667 1 14.0975 1 14.0975H16.3846C16.3846 14.0975 13.8205 12.3667 13.8205 6.30901"
        stroke={fill}
        stroke-width="1.92308"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.1702 17.5591C9.86435 18.0929 9.30099 18.4214 8.69153 18.4214C8.08206 18.4214 7.5187 18.0929 7.21289 17.5591"
        stroke={fill}
        stroke-width="1.92308"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default NotificationSVG;
