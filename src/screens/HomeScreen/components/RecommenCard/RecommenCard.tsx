import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ImageBackgroundRecommenCardSVG from './components/ImageBackgroundRecommenCardSVG';
import TwoDotSVG from './components/TwoDotSVG';
import DeadlinesSVG from './components/DeadlinesSVG';
import FreeTimeSVG from './components/FreeTimeSVG';
import ClassTimeSVG from './components/ClassTimeSVG';
import EverythingSVG from './components/EverythingSVG';
import StudyTipsSVG from './components/StudyTipsSVG';
import ChillTimeSVG from './components/ChillTimeSVG';

interface RecommenCardProps {
  title: string;
  mainBackgroundColor: string;
  subBackgroundColor: string;
}

interface SVGProps {
  width: string;
  height: string;
  fill: string;
}

function RecommenCard(props: RecommenCardProps) {
  const {title, mainBackgroundColor, subBackgroundColor} = props;

  function CardIcon(propsCardIcon: SVGProps) {
    switch (title) {
      case 'Deadlines':
        return <DeadlinesSVG {...propsCardIcon} />;
      case 'Free time':
        return <FreeTimeSVG {...propsCardIcon} />;
      case 'Class time':
        return <ClassTimeSVG {...propsCardIcon} />;
      case 'Everything':
        return <EverythingSVG {...propsCardIcon} />;
      case 'Study tips':
        return <StudyTipsSVG {...propsCardIcon} />;
      case 'Chill Time':
        return <ChillTimeSVG {...propsCardIcon} />;
      default:
        throw new Error(`Do not exist ${title} card.`);
    }
  }

  return (
    <View style={[styles.container, {backgroundColor: mainBackgroundColor}]}>
      <View style={styles.background}>
        <ImageBackgroundRecommenCardSVG
          width="100%"
          height="100%"
          fill={subBackgroundColor}
        />
      </View>
      <View style={styles.icons}>
        <View style={styles.icons.leftIcon}>
          <CardIcon width="100%" height="100%" fill="white" />
        </View>
        <View style={styles.icons.rightIcon}>
          <TwoDotSVG width="100%" height="100%" fill="white" />
        </View>
      </View>
      <View style={styles.title}>
        <Text>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 149,
    height: 119,
    borderRadius: 16,
    marginRight: 16,
    padding: 16,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  background: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: 0,
    top: -20,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    leftIcon: {
      width: 20,
      height: 20,
    },
    rightIcon: {
      width: 20,
      height: 20,
    },
  },
  title: {},
});

export default RecommenCard;
