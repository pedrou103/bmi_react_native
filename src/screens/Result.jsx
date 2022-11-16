import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Card } from "../components/Card";
import { colors } from "../constants";

export function Result({ navigation, route }) {
  const { imc } = route.params;
  const { message } = route.params;

  console.log(route)


  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.imcWrapper}>
          <Text style={styles.imcText}>IMC</Text>
          <Text style={styles.imcText}>{imc.toFixed(2)}</Text>
        </View>
      </Card>
      <Card>
        <View style={styles.imcMessage}>
          <Text style={styles.imcText}>{imc.toFixed(2)}</Text>
          <Text>
            {message}
          </Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  imcWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  imcText: {
    fontSize: 24,
    color: colors.white,
  },
  imcMessage: {
    justifyContent: "center",
    alignItems: "center",
  },
});
