import React from 'react';
import Svg, {Path, G, Defs} from 'react-native-svg';

function BackgroundTabBarSVG({width, height, fill}) {
  return (
    <Svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 375 138"
      xmlns="http://www.w3.org/2000/svg">
      <G filter="url(#filter0_d_282_11793)">
        <Path d="M3.22207 40.9689H0V138.068H375V40.9633L266.9 26.2465C266.9 26.2465 240.134 22.9499 232.3 40.4679C228.547 48.8593 226.48 54.1471 225.228 57.7115C224.109 60.894 221.374 76.5646 202.895 78.483C184.416 80.4014 174.178 78.483 174.178 78.483C174.178 78.483 157.829 77.0198 152.339 60.1755C146.849 43.3312 140.799 25.5206 120.545 26.0906C100.291 26.6604 3.22207 40.9689 3.22207 40.9689Z" />
      </G>
      <Defs>
        {/* <filter
          id="filter0_d_282_11793"
          x="-28.8462"
          y="0.0384622"
          width="432.692"
          height="169.76"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.88462" />
          <feGaussianBlur stdDeviation="14.4231" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0784314 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_282_11793"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_282_11793"
            result="shape"
          />
        </filter> */}
      </Defs>
    </Svg>
  );
}

export default BackgroundTabBarSVG;
