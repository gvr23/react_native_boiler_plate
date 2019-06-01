/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import {View} from 'react-native';
import { Provider } from "react-redux";
import createStore from "./src/store";
import AppNav from "./src/routers";
import sagaWatcher from "./src/sagas";

console.disableYellowBox = true;
const { store, sagaMiddleware } = createStore();

export default class App extends PureComponent {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    sagaMiddleware.run(sagaWatcher);
  }
  render() {
    return (
      <Provider store={store}>
        <View { ...this.props }>
            <AppNav />
        </View>
      </Provider>
    );
  }
}
