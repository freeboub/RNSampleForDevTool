/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Text, View, Pressable, Alert} from 'react-native';
import React, {PropsWithChildren, useEffect, useMemo, useState} from 'react';
import styles from './styles';
import {complexArray, complexDuration, complexTimeout} from './constants';

const HeavyComponent = () => {
  let i = 0;
  while (i < 300000) {
    i = i + 1;
  }
  return null;
};

/* define the button */
type MyCounterProps = PropsWithChildren<{
  index: number;
  time: number;
}>;

const MyCounter = React.memo(({index, time}: MyCounterProps) => {
  const isInFirstQuartil = time <= complexDuration / 4;
  const isInSecondQuartil =
    time > complexDuration / 4 && time <= complexDuration / 2;

  const isInThirdQuartil =
    time > complexDuration / 2 && time <= (complexDuration * 3) / 4;

  const isInLastQuartil =
    !isInFirstQuartil && !isInSecondQuartil && !isInThirdQuartil;

  const onPressFunction = () => {
    Alert.alert(
      'Alert',
      'press at ' +
        time +
        ' \nfirstQuartil ' +
        isInFirstQuartil +
        ' \nsecondQuartil ' +
        isInSecondQuartil +
        ' \nThirdQuartil ' +
        isInThirdQuartil +
        ' \nLastQuartil ' +
        isInLastQuartil,
    );
  };

  const isInQuartil =
    index === 0
      ? isInFirstQuartil
      : index === 1
      ? isInSecondQuartil
      : index === 2
      ? isInThirdQuartil
      : isInLastQuartil;

  const backgroundColor = isInQuartil ? 'red' : 'green';
  const viewStyle = {backgroundColor, height: 100, width: 100};

  return (
    <Pressable onPress={onPressFunction}>
      <View style={viewStyle}>
        <HeavyComponent />
      </View>
    </Pressable>
  );
});

/* core of the App */

const App = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(_time => (_time + 1) % complexDuration);
    }, complexTimeout);
  }, []);

  const myButtonList = useMemo(() => {
    return (
      <>
        {complexArray.map(id => {
          return <MyCounter key={id} index={id} time={time} />;
        })}
      </>
    );
  }, [time]);

  const result = (
    <View style={styles.container}>
      <Text>Time: {time}</Text>
      {myButtonList}
    </View>
  );
  return result;
};

const ContextedApp = () => {
  return <App />;
};

export default ContextedApp;
