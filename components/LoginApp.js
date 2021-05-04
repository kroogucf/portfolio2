import { Button, TextInput, View, Text, StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";
import { useRef } from "react";

// This code is modified from the week 10 development assignment that asked to create a login page with a specific password.
// I changed the 'Ch@rge!' password part to accept any password and username combo inputed to login as long as something was entered.
// I also added some styling to the welcome and username message once logged in.

export default function LoginApp() {
    const styles = StyleSheet.create({
        error: {
            color: "#F05D5E",
        },
        textField: {
            padding: 10,
            backgroundColor: "#ccc",
            fontWeight: 600,
            margin: 10,
        },
        welcomeSuccess: {
            padding: 10,
            backgroundColor: "#ccc",
            fontWeight: 600,
            margin: 10,
        }
    }

    );

    let doLogin = () => {
        if (!userRef.current.value) {
            setErrorMessage("You left username blank")
            return
        } else {

        }

        if (!passRef.current.value) {
            setErrorMessage("You left password blank!")
        } else {
            console.log("Valid Password!")
            setUsername(userRef.current.value)
            setErrorMessage("")
            setLoggedIn(true)
        }
    }

    let [loggedIn,setLoggedIn] = useState(false)
    let [username, setUsername] = useState("")
    let [errorMessage, setErrorMessage] = useState("")
    let passRef = useRef(null)
    let userRef = useRef(null)

    let notLoggedInScreen = (
        <View>
            <TextInput style={styles.textField} ref={userRef} placeholder="Username"></TextInput>
            <TextInput style={styles.textField} ref={passRef} placeholder="Password"></TextInput>
            <Button onPress={doLogin} title="Login"></Button>
            <Text style={styles.error}>{errorMessage}</Text>
        </View>
    )
    let loggedInScreen = (
        <View>
            <Text>Welcome, {username}</Text>
        </View>
    )
    return !loggedIn ? notLoggedInScreen : loggedInScreen
}