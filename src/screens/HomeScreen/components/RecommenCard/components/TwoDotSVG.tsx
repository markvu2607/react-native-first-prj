import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface SVGProps {
  width: string;
  height: string;
  fill: string;
}

function TwoDotSVG(props: SVGProps) {
  const {width, height, fill} = props;

  return (
    <Svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M12 14C11.6044 14 11.2178 14.1173 10.8889 14.3371C10.56 14.5568 10.3036 14.8692 10.1522 15.2346C10.0009 15.6001 9.96126 16.0022 10.0384 16.3902C10.1156 16.7781 10.3061 17.1345 10.5858 17.4142C10.8655 17.6939 11.2219 17.8844 11.6098 17.9616C11.9978 18.0387 12.3999 17.9991 12.7654 17.8478C13.1308 17.6964 13.4432 17.44 13.6629 17.1111C13.8827 16.7822 14 16.3956 14 16C14 15.4696 13.7893 14.9609 13.4142 14.5858C13.0391 14.2107 12.5304 14 12 14Z" />
      <Path d="M13.1111 9.66294C12.7822 9.8827 12.3956 10 12 10C11.4696 10 10.9609 9.78929 10.5858 9.41421C10.2107 9.03914 10 8.53043 10 8C10 7.60444 10.1173 7.21776 10.3371 6.88886C10.5568 6.55996 10.8692 6.30362 11.2346 6.15224C11.6001 6.00087 12.0022 5.96126 12.3902 6.03843C12.7781 6.1156 13.1345 6.30608 13.4142 6.58579C13.6939 6.86549 13.8844 7.22186 13.9616 7.60982C14.0387 7.99778 13.9991 8.39992 13.8478 8.76537C13.6964 9.13082 13.44 9.44318 13.1111 9.66294Z" />
    </Svg>
  );
}

export default TwoDotSVG;
