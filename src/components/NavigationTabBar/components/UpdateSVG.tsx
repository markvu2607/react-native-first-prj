import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface SVGProps {
  width: string;
  height: string;
  fill: string;
}

function UpdateSVG(props: SVGProps) {
  const {width, height, fill} = props;

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M15.8684 8.65488C15.8684 12.6362 12.6372 15.8674 8.65586 15.8674C4.67456 15.8674 2.24395 11.8572 2.24395 11.8572M2.24395 11.8572H5.504M2.24395 11.8572V15.4635M1.44336 8.65488C1.44336 4.67358 4.64571 1.44238 8.65586 1.44238C13.4666 1.44238 15.8684 5.45253 15.8684 5.45253M15.8684 5.45253V1.84628M15.8684 5.45253H12.666"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default UpdateSVG;
