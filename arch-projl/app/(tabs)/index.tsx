import { Stack } from "expo-router";
import React, { useState } from "react";

import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

export default function Home() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={styles.title}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here"
        value={name}
        onChangeText={setName}
      />
      <Button title="Say Hello" onPress={() => setGreeting(`Hello ${name}`)} />
      {greeting ? <Text style={styles.greeting}>{greeting}</Text> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#000", // keep dark bg
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    color: "#fff", // 👈 white text
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
    borderRadius: 5,
    color: "#fff", // 👈 input text color
    backgroundColor: "#222", // 👈 darker input bg
  },
  greeting: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: "bold",
    color: "#0f0", // 👈 green greeting text
  },
});
