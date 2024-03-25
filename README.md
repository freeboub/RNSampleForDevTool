This is a sample [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

The goal of this app is to show how to optimize context usage using "ContextRef" as described [in this medium article](https://medium.com/@freeboub/the-react-native-context-trap-c9a08feac184)

# Getting Started

This is a fork of react native AwesomeProject. You should use basic commands to build and start project:

```bash
yarn
yarn android
yarn ios
```

# Modifying the App

There are 3 different samples in the repository. To change used sample, update index.js and change import main file in:

```bash
import App from './AppContextRef';
```

1. AppBasic.tsx: dummy implementation
2. AppContext.tsx: add context
3. AppContextRef.tsx: add contextRef
