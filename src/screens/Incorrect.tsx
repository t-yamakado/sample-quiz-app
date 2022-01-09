import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../constants/common";

export default function Inorrect() {
	const navigation =
		useNavigation<
			NativeStackNavigationProp<RootStackParamList, "Question">
		>();
	return (
		<View style={styles.container}>
			<Text style={styles.incorrectText}>残念(TT)</Text>
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
