// src/screens/SplashScreen.js
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Automatically navigate to SignIn or Home after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace("SignIn"); // Adjust this to navigate to 'Home' or 'SignIn' based on the user state
    }, 3000);
    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to GateControlApp</Text>
      <Text style={styles.subtitle}>Secure and Manage Your Gate</Text>
      <Button title="Dive In" onPress={() => navigation.replace("SignIn")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
  },
});

export default SplashScreen;
