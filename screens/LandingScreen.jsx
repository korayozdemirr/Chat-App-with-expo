import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../components/Button'

const LandingScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.h1}>Welcome</Text>
                <Text style={styles.h1}>Chat App</Text>
            </View>
            <View style={{flex:1, justifyContent:"center", gap:15}}>
                <Button type="outline">Login</Button>
                <Button type="contain">Register</Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    h1: {
        fontSize: 52,
        fontWeight: "700",
        textAlign: "center",
        color: "#405cf5"
    }
    
})

export default LandingScreen