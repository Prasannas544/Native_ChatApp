import React, { useState } from "react";
import { Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
const backImage = require('../assets/backImg.jpg')

export default function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const onHandleLogin = () => {
        if (email !== "" && password !== "") {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => { console.log('Login success'); navigation.navigate('Home') })
                .catch((err) => { Alert.alert('Login Error', err.message); });
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Image source={backImage} resizeMethod='auto' resizeMode='contain' style={{ flex: 1 }} />
            <View style={{ flex: 1 }}>
                <SafeAreaView style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text> Login</Text>
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

                    <TouchableOpacity onPress={onHandleLogin}>
                        <Text>Login</Text>
                    </TouchableOpacity>

                    <View>
                        <Text>Dont have an account ? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                            <Text>Sign up</Text>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
            </View>
        </View>
    )
}