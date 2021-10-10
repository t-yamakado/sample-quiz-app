import { registerRootComponent } from "expo";
import * as React from "react";
import App from "./src/App";
import { Provider as PaperProvider } from "react-native-paper";

export default function Main() {
	return (
		/* ref: https://callstack.github.io/react-native-paper/getting-started.html#usage */
		<PaperProvider>
			<App />
		</PaperProvider>
	);
}

registerRootComponent(Main);
