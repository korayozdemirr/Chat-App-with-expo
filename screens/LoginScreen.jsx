import { View } from "react-native"
import FloatingLabelTextInput from "../components/FloatingLabelTextInput"
import Button from "../components/Button"
import { useState } from "react"

const LoginScreen  = () =>{
    const [text, setText] = useState("")
    console.log(text)
    return(
       <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
         <FloatingLabelTextInput value={text} onChangeText={setText} label="Enter Your Email"/>
         <FloatingLabelTextInput label="Enter Your Email"/>
       </View>
    )
}

export default LoginScreen