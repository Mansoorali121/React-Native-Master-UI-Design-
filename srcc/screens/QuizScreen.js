import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { partsOfSpeech } from '../data/partsOfSpeech';
import { shuffleArray } from '../utils/shuffleArray';

const QuizScreen = ({ navigation }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setQuestions(shuffleArray([...partsOfSpeech]));
  }, []);

  const handleAnswer = (option) => {
    if (option === questions[currentIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.replace('Result', { score });
    }
  };

  if (questions.length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {questions[currentIndex].question}
      </Text>

      {questions[currentIndex].options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => handleAnswer(option)}
        >
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default QuizScreen;
