import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ScheduleCardProps {
  title: string;
  subTitle: string;
  content: string;
  color?: string;
}

function ScheduleCard(props: ScheduleCardProps) {
  const {title, subTitle, content} = props;

  return (
    <View
      style={[
        stylesScheduleCard.container,
        {
          backgroundColor: title === 'Homework' ? '#334A86' : '#F6F6F5',
        },
      ]}>
      <Text
        style={[
          stylesScheduleCard.title,
          {color: title === 'Homework' ? 'white' : 'black'},
        ]}>
        {title}
      </Text>
      <Text
        style={[
          stylesScheduleCard.subTitle,
          {color: title === 'Homework' ? 'white' : 'black'},
        ]}>
        {subTitle}
      </Text>
      <Text
        style={[
          stylesScheduleCard.content,
          {color: title === 'Homework' ? 'white' : 'black'},
        ]}>
        {content}
      </Text>
    </View>
  );
}

const stylesScheduleCard = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 14,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  subTitle: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    marginBottom: 12,
  },
  content: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
  },
});

export default ScheduleCard;
