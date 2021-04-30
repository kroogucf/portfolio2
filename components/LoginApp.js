import { Button, TextInput, View, Text, StyleSheet } from "react-native";
import React from "react";
import { useState, useRef } from "react";

export default function LoginApp() {
    let doLogin = () => {
        if (!useRef.current.value) {
            setErrorMessage("You left username blacnk")
        }
    }
}