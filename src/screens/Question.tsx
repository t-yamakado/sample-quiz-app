import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { questionInfo } from "../constants/question";

export default function Question() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text style={styles.headerText}>Q1</Text>
			<Text style={styles.baseText}>{questionInfo.bodyText}</Text>
			{questionInfo.choiceList.map((item, idx) => {
				return (
					<Button
						mode="contained"
						onPress={() => console.log("Pressed")}
						style={styles.button}
						/* https://reactnative.dev/docs/text-style-props */
						labelStyle={styles.buttonLabel}
						key={idx}
					>
						{item.text}
					</Button>
				);
			})}
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
	headerText: {
		fontSize: 100,
		fontWeight: "bold",
		color: "#274a78",
	},
	baseText: {
		fontSize: 20,
		color: "#274a78",
		marginBottom: 30,
	},
	button: {
		width: "80%",
		marginTop: 10,
		marginBottom: 10,
	},
	buttonLabel: {
		fontSize: 15,
		height: 30,
		textAlignVertical: "center",
	},
});
