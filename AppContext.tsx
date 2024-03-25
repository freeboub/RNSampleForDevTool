/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Text, View, Pressable} from 'react-native';
import React, {PropsWithChildren, useContext, useMemo} from 'react';
import styles from './styles';
import {array} from './constants';
import {HeaderContext, HeaderProvider} from './HeaderContext';

/* define the button */
type MyButtonProps = PropsWithChildren<{
  text: string;
}>;

const MyButton = ({text}: MyButtonProps) => {
  const {setHeader} = useContext(HeaderContext);

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

/* core of the App */

const App = () => {
  const {header} = useContext(HeaderContext);

  const myButtonList = useMemo(() => {
    return (
      <>
        {array.map(id => {
          return <MyButton key={id} text={'btn' + id} />;
        })}
      </>
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text>Last Pressed: {header}</Text>
      {myButtonList}
    </View>
  );
};

const ContextedApp = () => {
  return (
    <HeaderProvider>
      <App />
    </HeaderProvider>
  );
};

export default ContextedApp;
