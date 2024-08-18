// src/screens/HomeScreen.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Avatar, Card } from "react-native-paper";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const HomeScreen = ({ navigation }) => {
  const user = auth.currentUser;

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("SignIn");
      })
      .catch((error) => {
        console.error("Sign out error: ", error);
      });
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title={`Welcome, ${user?.email || "User"}!`}
          subtitle="Manage your gate efficiently"
          left={(props) => <Avatar.Icon {...props} icon="account" />}
        />
        <Card.Content>
          <Text style={styles.introText}>
            Use the buttons below to manage your gate or view notifications.
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("Notifications")}
            style={styles.button}
          >
            Go to Notifications
          </Button>
          <Button mode="outlined" onPress={handleSignOut} style={styles.button}>
            Sign Out
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  card: {
    padding: 16,
    borderRadius: 10,
  },
  introText: {
    fontSize: 18,
    marginVertical: 10,
  },
  button: {
    marginTop: 10,
    marginRight: 10,
  },
});

export default HomeScreen;
