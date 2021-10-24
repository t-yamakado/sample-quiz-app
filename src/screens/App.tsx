import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
			<StatusBar style="auto" />
			<Button
				/* 利用可能アイコンは、https://callstack.github.io/react-native-paper/icons.html -> See the list of supported icons */
				icon="arrow-right-circle-outline"
				mode="contained"
				onPress={() => console.log("Pressed")}
				style={{ width: "50%" }}
				/* https://reactnative.dev/docs/text-style-props */
				labelStyle={{ fontSize: 30 }}
			>
				始める
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
