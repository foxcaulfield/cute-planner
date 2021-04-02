import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

export const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <View>
      <Text> Time : {date.toLocaleTimeString()}</Text>
      <Text> Date : {date.toLocaleDateString()}</Text>
    </View>
  );
};

// export default DateTime;
