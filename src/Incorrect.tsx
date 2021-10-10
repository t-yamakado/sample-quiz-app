import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Inorrect() {
	return (
		<View style={styles.container}>
			<Text style={styles.incorrectText}>
				残念(TT)
			</Text>
			<View style={styles.buttonContainer}>
				<Text
					style={styles.baseText}
					onPress={() => console.log("cannot get back to top yet :(")}
				>
					TOPへ戻る
				</Text>
			</View>
			<StatusBar style="auto" />
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
	buttonContainer: {
		position: "absolute",
		bottom: 100,
	},
	incorrectText: {
		fontSize: 100,
		fontWeight: "bold",
		color: "#274a78",
	},
	baseText: {
		fontSize: 20,
		color: "#ccc",
	},
});
