import React from 'react';
import store from './src/store/configureStore';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import {
	MainScreen,
	SecondScreen,
	RequestScreen,
	ThirdScreen,
	RequestDetailScreen,
	LoginScreen
} from './src/screens/';

export default class App extends React.Component {
	render() {
		const MainNavigator = StackNavigator(
			{
				login: {
					screen: LoginScreen,
					navigationOptions: { header: null }
				},
				main: {
					screen: MainScreen,
					navigationOptions: { header: null }
				},
				requestDetail: {
					screen: RequestDetailScreen,
					navigationOptions: { header: null }
				},

				request: {
					screen: RequestScreen,
					navigationOptions: { header: null }
				},

				second: {
					screen: SecondScreen,
					navigationOptions: { header: null }
				},
				third: {
					screen: ThirdScreen,
					navigationOptions: { header: null }
				}
			},
			{
				lazy: true
			}
		);
		return (
			<Provider store={store}>
				<MainNavigator />
			</Provider>
		);
	}
}
