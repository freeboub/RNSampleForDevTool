/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

export const timeout = 10;

/* component which is too long to render */
const HeavyComponent = () => {
  let i = 0;
  while (i < 300000) {
    i = i + 1;
  }
  return null;
};

/* core of the App */

const App = () => {
  // setState on timeout to for refresh
  const [_, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(_time => _time + 1);
    }, timeout);
  }, []);

  return <HeavyComponent />;
};

export default App;
