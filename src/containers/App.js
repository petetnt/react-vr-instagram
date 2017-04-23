import React from "react";
import { View } from "react-vr";
import { NativeRouter, Route } from "react-router-native";
import RouteSelect from "./RouteSelect";

const App = () => (
  <NativeRouter className="App">
    <View>
      <Route
        path="/"
        component={RouteSelect}
      />
    </View>
  </NativeRouter>
);


export default App;
