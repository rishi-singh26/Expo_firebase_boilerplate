import React, { useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/Auth/ActionCreator";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Feather } from "@expo/vector-icons";
export default function Home(props) {
  // Action sheet provider
  const { showActionSheetWithOptions } = useActionSheet();

  const dispatch = useDispatch();

  const setHeaderOptions = () => {
    props.navigation.setOptions({
      headerRight: () => {
        return (
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                paddingLeft: 15,
                paddingVertical: 12,
                paddingRight: 20,
              }}
              onPress={() => {
                openLogoutActionSheet();
              }}
            >
              <Feather name="log-out" size={22} color="black" />
            </TouchableOpacity>
          </View>
        );
      },
    });
  };

  useEffect(() => {
    setHeaderOptions();
  }, []);

  const openLogoutActionSheet = () => {
    const options = ["Logout", "Cancel"];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 1;
    const message = "Do you want to logout?";
    const messageTextStyle = { fontSize: 17, fontWeight: "700" };
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
        message,
        messageTextStyle,
      },
      (buttonIndex) => {
        if (buttonIndex == 0) {
          dispatch(logoutUser());
          return;
        }
      }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
