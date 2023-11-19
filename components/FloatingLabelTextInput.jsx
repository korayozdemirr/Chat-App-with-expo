import React, { useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Animated } from 'react-native';

const FloatingLabelTextInput = ({ label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={[styles.label, isFocused || props.value ? styles.active : styles.passive]}>
        {label}
      </Text>
      <TextInput
        {...props}
        style={styles.input}
        onFocus={() => {setIsFocused(true)
        }}
        onBlur={() => props.value ? setIsFocused(true) : setIsFocused(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    color: 'gray',
    position: 'absolute',
    left: 10,
    backgroundColor:"#fff",
    zIndex:1
  },
  input: {
    width:300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
  },
  active:{
    top:2,
    fontSize:14
  },
  passive:{
    top:20
  }
});

export default FloatingLabelTextInput