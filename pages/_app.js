import "../src/configs/firebase.config";
import { AuthProvider, FirestoreProvider } from "../src/hooks";
import AuthStateChange from "../src/layout/authStateChange";
import GlobalStyle from "../src/styles/GlobalStyles";
import { theme } from "../src/styles/theme";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<AuthProvider>
					<AuthStateChange>
						<FirestoreProvider>
							<Component {...pageProps} />
						</FirestoreProvider>
					</AuthStateChange>
				</AuthProvider>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
