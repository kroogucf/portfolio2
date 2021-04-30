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
            setErrorMessage("You left username blank")
        } else {

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
            <TextInput ref={userRef} placeholder="Username"></TextInput>
            <TextInput ref={passRef} placeholder="Username"></TextInput>
        </View>
    )
}