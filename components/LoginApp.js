import { Button, TextInput, View, Text, StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";
import { useRef } from "react";

export default function LoginApp() {
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
            <Text>Please Login</Text>
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

    const styles = StyleSheet.create({
        error: {
            color: "#F05D5E",
        },
        textField: {
            padding: 10,
            backgroundColor: "#ccc",
            fontWeight: 600,
            margin: 10,
        }
    }

    );

    return !loggedIn ? notLoggedInScreen : loggedInScreen
}