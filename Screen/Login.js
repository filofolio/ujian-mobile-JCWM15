import React, { useState} from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity} from 'react-native';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
        <Image style={styles.image} source={require("./gambar-covid.jpg")} />

        <StatusBar style="auto" />
        <View style={styles.inputView}>
        <TextInput
            style={styles.TextInput}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={(username) => setUsername(username)}
        />
        </View>

        <View style={styles.inputView}>
        <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
        />
        </View>

            <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
    }


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    image: {
        marginBottom: 40,
        height: 250,
    },

    inputView: {
        backgroundColor: "#E0E0E0",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "40%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "red",
    },

    loginText :{
        color: 'white',
    }
})
