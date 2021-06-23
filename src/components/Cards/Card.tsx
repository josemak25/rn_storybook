import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

type CustomCardProps = {
  text: string;
};

export default function CustomCard({text = 'react native'}: CustomCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://infinitbility.com/static/278bf2e7ba194be4c05914e2412c6a13/f4f8c/react-native-render-html.png',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    elevation: 5,
    width: '80%',
    height: '40%',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: '#BEC1C5',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  logo: {
    borderRadius: 10,
    height: '80%',
    width: '90%',
  },
});
