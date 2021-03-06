import { registerRootComponent } from "expo";
import * as React from "react";
import App from "./src/screens/App";
import Question from "./src/screens/Question";
import Correct from "./src/screens/Correct";
import Incorrect from "./src/screens/Incorrect";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/constants/common";

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function Main() {
	return (
		/* ref:
		https://callstack.github.io/react-native-paper/getting-started.html#usage
		*/
		<PaperProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="App"
						component={App}
						options={{ headerShown: false }}
					></Stack.Screen>
					<Stack.Screen
						name="Question"
						component={Question}
						options={{ headerShown: false }}
					></Stack.Screen>
					<Stack.Screen
						name="Correct"
						component={Correct}
						options={{ headerShown: false }}
					></Stack.Screen>
					<Stack.Screen
						name="Incorrect"
						component={Incorrect}
						options={{ headerShown: false }}
					></Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);
}

registerRootComponent(Main);
