import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface SectionProps {
  title: string;
  subTitle: string;
  children?: ReactNode;
}

function Section(props: SectionProps) {
  const {title, subTitle, children} = props;

  return (
    <View style={stylesSection.container}>
      <Text style={stylesSection.title}>{title}</Text>
      <Text style={stylesSection.subTitle}>{subTitle}</Text>
      {children}
    </View>
  );
}

const stylesSection = StyleSheet.create({
  container: {
    marginBottom: 28,
  },
  title: {
    color: '#334A86',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 36,
  },
  subTitle: {
    color: '#BCC1CD',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 8,
  },
});

export default Section;
