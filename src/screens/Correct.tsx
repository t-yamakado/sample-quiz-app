import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../constants/common";

export default function Correct() {
	const navigation =
		useNavigation<
			NativeStackNavigationProp<RootStackParamList, "Question">
		>();
	return (
		<View style={styles.container}>
			<Text style={styles.correctText}>正解！</Text>
			<View style={styles.buttonContainer}>
				<Text
					style={styles.baseText}
					onPress={() => navigation.navigate("App")}
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
	correctText: {
		fontSize: 100,
		fontWeight: "bold",
		color: "#dc143c",
	},
	baseText: {
		fontSize: 20,
		color: "#ccc",
	},
});
