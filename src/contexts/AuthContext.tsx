import { ReactNode, createContext, useState } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
import * as WebBrownser from 'expo-web-browser';

WebBrownser.maybeCompleteAuthSession();

interface UserProps {
	name: string;
	avatarUrl: string;
}

export interface AuthContextDataProps {
	user: UserProps;
	isUserLoading: boolean;
	signIn: () => Promise<void>;
}

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
	const [isUserLoading, setIsUserLoading] = useState<boolean>(false);

	const [request, response, promptAsync] = Google.useAuthRequest({
		clientId:
			'1054901999802-6jv00cu3qadb3mnsgog44imsbtvtmlpp.apps.googleusercontent.com',
		redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
		scopes: ['profile', 'email'],
	});

	async function signIn() {
		try {
			setIsUserLoading(true);
			await promptAsync();
		} catch (error) {
			console.log(error);
			throw error;
		} finally {
			setIsUserLoading(false);
		}
	}

	return (
		<AuthContext.Provider
			value={{
				signIn,
				isUserLoading,
				user: {
					name: 'Ster Roque',
					avatarUrl: 'https://github.com/Sterzinha.png',
				},
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
