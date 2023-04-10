import React, { useState } from "react";
import { Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
const backImage = require('../assets/backImg.jpg')

export default function Signup({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const onHandleSignup = () => {
        if (email !== "" && password !== "") {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => { console.log('Signup success'); navigation.navigate('Login') })
                .catch((err) => Alert.alert('Signup error', err.message));
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Image source={backImage} resizeMethod='auto' resizeMode='contain' style={{ flex: 1 }} />
            <View style={{ flex: 1 }}>
                <SafeAreaView style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text> Signup</Text>
                    <TextInput
                        style={{}}
                        placeholder="Enter Email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoFocus={true}
                        value={email}
                        onChangeText={(text) => setEmail(text)} />
                    <TextInput
                        style={{}}
                        placeholder="Enter Password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        textContentType="password"
                        value={password}
                        onChangeText={(text) => setPassword(text)} />

                    <TouchableOpacity onPress={onHandleSignup}>
                        <Text>Signup</Text>
                    </TouchableOpacity>

                    <View>
                        <Text>Already have an account ? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text>Login</Text>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
            </View>
        </View>
    )
}