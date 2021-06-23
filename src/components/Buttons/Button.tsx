import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

type CustomButtonProps = {
  text: string;
  onPress: () => void;
};

export default function CustomButton({
  onPress,
  text = 'click me',
}: CustomButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.paragraph}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: '80%',
    borderRadius: 4,
    marginVertical: 10,
    paddingVertical: 8,
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: '#216377',
  },
  paragraph: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});
