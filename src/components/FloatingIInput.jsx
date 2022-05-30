import { useEffect, useRef, useState } from "react";
import {
  TextInput,
  View,
  Animated,
  StyleSheet,
  Text,
  Alert,
  Pressable,
} from "react-native";

const FloatingInput = (props) => {
  const [value, setValue] = useState("");
  const moveText = useRef(new Animated.Value(0)).current;
  const inputRef = useRef(null);

  useEffect(() => {
    if (value !== "") {
      moveTextTop();
    }
  }, [value]);

  const onBlurHandler = () => {
    if (value === "") {
      moveTextBottom();
    }
  };

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -20],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <Pressable onPress={() => inputRef.current.focus()}>
          <Text style={styles.label}>{props.label}</Text>
        </Pressable>
      </Animated.View>
      <TextInput
        ref={inputRef}
        autoCapitalize="words"
        style={styles.input}
        onChangeText={(text) => {
          setValue(text);
        }}
        onFocus={moveTextTop}
        onBlur={onBlurHandler}
        blurOnSubmit
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 2,
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
  },

  input: {
    fontSize: 13,
    height: 30,
    color: "#220917",
    fontFamily: "SfProBold",
  },
  label: {
    color: "#54414A",
    fontSize: 12,
    fontFamily: "SfProBold",
  },
  animatedStyle: {
    top: 2,
    position: "absolute",
    zIndex: 10000,
  },
});

export default FloatingInput;
