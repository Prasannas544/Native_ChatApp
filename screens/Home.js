import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
const Home = ({ navigation }) => {


    return (
        <View>
            <Text>Home Page</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <Text>Chat Icon here</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

