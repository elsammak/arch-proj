import { Stack } from "expo-router";
import React, { useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function BuildingInteractive() {
  const [activeFloor, setActiveFloor] = useState<string | null>(null);

  const handleEnter = (id: string) => setActiveFloor(id);
  const handleLeave = () => setActiveFloor(null);

  const handlePress = (id: string) => {
    setActiveFloor((prevId) => (prevId === id ? null : id));
  };

  // Helper to attach correct events depending on platform
  const getPathProps = (id: string) => {
    const props: any = {
      fill: activeFloor === id ? "#4d8ac7" : "#dbd9d7",
      onPress: () => handlePress(id), // works on iOS + Android
    };

    if (Platform.OS === "web") {
      props.onHoverIn = () => handleEnter(id);
      props.onHoverOut = handleLeave;
    }

    return props;
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Svg
        width={300}
        height={300}
        viewBox="0 0 880 880"
        style={{ backgroundColor: "#fff" }}
      >
        {/* === Floor 1 === */}
        <Path
          d="M 109.4224,251.4336 393.4124,204.7876 447.249,251.4336 V 307 L 283.99,350 109.4224,307 Z"
          {...getPathProps("Floor 1")}
        />

        {/* === Floor 2 === */}
        <Path
          d="M 109.4224,307 283.99,350 447.249,307 V 363 L 283.99,406 109.4224,363 Z"
          {...getPathProps("Floor 2")}
        />

        {/* === Floor 3 === */}
        <Path
          d="M 109.4224,363 283.99,406 447.249,363 V 419 L 283.99,462 109.4224,419 Z"
          {...getPathProps("Floor 3")}
        />

        {/* === Floor 4 === */}
        <Path
          d="M 109.4224,419 283.99,462 447.249,419 V 475 L 283.99,518 109.4224,475 Z"
          {...getPathProps("Floor 4")}
        />
      </Svg>

      {activeFloor && (
        <View style={styles.popup}>
          <Text style={styles.popupText}>You selected {activeFloor}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  popup: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 6,
  },
  popupText: {
    color: "white",
    fontSize: 16,
  },
});
