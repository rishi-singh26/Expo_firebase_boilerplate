import React from "react";
import { StatusBar } from "react-native";
import Home from "../Pages/Home/index";
import Authentication from "../Pages/Authentication";

import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigator() {
  const auth = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Stack.Navigator
        screenOptions={{ headerTitleStyle: { fontWeight: "700" } }}
      >
        {auth.isAuthenticated ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: "Home",
                headerTitleStyle: { fontSize: 25, fontWeight: "700" },
              }}
            />
          </>
        ) : (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Authentication"
            component={Authentication}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
