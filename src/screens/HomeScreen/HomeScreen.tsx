import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import RecommenCard from './components/RecommenCard';
import Section from './components/Section';
import ScheduleCard from './components/ScheduleCard';

const recommenCards: {
  title: string;
  mainBackgroundColor: string;
  subBackgroundColor: string;
}[] = [
  {
    title: 'Deadlines',
    mainBackgroundColor: '#ff9737',
    subBackgroundColor: '#ffc278',
  },
  {
    title: 'Free time',
    mainBackgroundColor: '#14b9fa',
    subBackgroundColor: '#2c91fa',
  },
  {
    title: 'Class time',
    mainBackgroundColor: '#c73684',
    subBackgroundColor: '#bf2f7c',
  },
  {
    title: 'Everything',
    mainBackgroundColor: '#0d08ff',
    subBackgroundColor: '#3232e9',
  },
  {
    title: 'Study tips',
    mainBackgroundColor: '#434496',
    subBackgroundColor: '#5456b8',
  },
  {
    title: 'Chill Time',
    mainBackgroundColor: '#9034ff',
    subBackgroundColor: '#8739e5',
  },
];

const scheduleCards: {title: string; subTitle: string; content: string}[] = [
  {
    title: 'Homework',
    subTitle: 'Subject: English',
    content:
      'Instructions:  read chapter 2 of ‘To Kill a Mocking Bird’ and write a page describing the main characters in the book and what role they play.',
  },
  {
    title: 'Test',
    subTitle: 'Subject: Physics',
    content: 'Instructions:  Test on Chapter 5 of the class physics book',
  },
  {
    title: 'Test',
    subTitle: 'Subject: Physics',
    content: 'Instructions:  Test on Chapter 5 of the class physics book',
  },
  {
    title: 'Test',
    subTitle: 'Subject: Physics',
    content: 'Instructions:  Test on Chapter 5 of the class physics book',
  },
  {
    title: 'Test',
    subTitle: 'Subject: Physics',
    content: 'Instructions:  Test on Chapter 5 of the class physics book',
  },
  {
    title: 'Test',
    subTitle: 'Subject: Physics',
    content: 'Instructions:  Test on Chapter 5 of the class physics book',
  },
];

function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Section title="Mischa" subTitle="Recommendations for you">
        <ScrollView style={styles.recommenSectionContent} horizontal={true}>
          {recommenCards.map(card => (
            <RecommenCard
              key={card.title}
              title={card.title}
              mainBackgroundColor={card.mainBackgroundColor}
              subBackgroundColor={card.subBackgroundColor}
            />
          ))}
        </ScrollView>
      </Section>
      <Section title="Your Schedule" subTitle="Today Deadlines">
        <View style={styles.scheduleSectionContent}>
          {scheduleCards.map((scheduleCard, index) => (
            <ScheduleCard
              key={index}
              title={scheduleCard.title}
              subTitle={scheduleCard.subTitle}
              content={scheduleCard.content}
            />
          ))}
        </View>
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 21,
    paddingRight: 19,
    fontFamily: 'Poppins',
  },
  recommenSectionContent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  scheduleSectionContent: {},
});

export default HomeScreen;
