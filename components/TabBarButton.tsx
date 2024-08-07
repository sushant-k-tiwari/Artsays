import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { icon } from "@/constants/icon";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type TabBarButtonProps = {
    onPress: () => void;
    onLongPress: () => void;
    isFocused: boolean;
    routeName: string;
    color: string;
    label: string;
  };
  
export default function TabBarButton({
    onPress,
    onLongPress,
    isFocused,
    routeName,
    color,
    label
  }: TabBarButtonProps){
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(()=>{
    const scaleValue = interpolate(scale.value, [0,1], [1,1.8]);
    const top = interpolate(scale.value, [0,1], [0,9]);

    return{
        transform:[{
            scale: scaleValue
        }],
        top
    }
  })

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return {
      opacity,
    };
  });

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarItems}
    >
        <Animated.View style={animatedIconStyle}>
      {icon[routeName]({
        color: isFocused ? "#6F4E37" : "#222",
      })}
        </Animated.View>
      <Animated.Text
        style={[{ color: isFocused ? "#6F4E37" : "#222" , fontSize:12}, animatedTextStyle]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tabbarItems: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
