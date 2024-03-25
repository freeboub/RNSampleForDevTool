/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Text, View, Pressable} from 'react-native';
import React, {
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
} from 'react';
import styles from './styles';
import {array} from './constants';

type MyButtonProps = PropsWithChildren<{
  text: string;
  setHeader: Dispatch<SetStateAction<string>>;
}>;

const MyButton = ({text, setHeader}: MyButtonProps) => {
  const onPressFunction = () => {
    console.log('pressed', text);
    setHeader(text);
  };
  return (
    <Pressable onPress={onPressFunction}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const App = () => {
  const [header, setHeader] = useState('');

  const result = (
    <View style={styles.container}>
      <Text>Last Pressed: {header}</Text>
      {array.map(id => {
        return <MyButton key={id} text={'btn' + id} setHeader={setHeader} />;
      })}
    </View>
  );
  return result;
};

export default App;
