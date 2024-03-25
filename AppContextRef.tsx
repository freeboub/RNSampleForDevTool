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
import {HeaderContextRef, HeaderProviderRef} from './HeaderContextRef';

/* define the button */
type MyButtonProps = PropsWithChildren<{
  text: string;
}>;

const MyButton = React.memo(({text}: MyButtonProps) => {
  const {setHeaderRef} = useContext(HeaderContextRef);

  const onPressFunction = () => {
    console.log('pressed', text);
    setHeaderRef.current(text);
  };
  return (
    <Pressable onPress={onPressFunction}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
});

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

  const result = (
    <View style={styles.container}>
      <Text>Last Pressed: {header}</Text>
      {myButtonList}
    </View>
  );
  return result;
};

const ContextedApp = () => {
  return (
    <HeaderProvider>
      <HeaderProviderRef>
        <App />
      </HeaderProviderRef>
    </HeaderProvider>
  );
};

export default ContextedApp;
