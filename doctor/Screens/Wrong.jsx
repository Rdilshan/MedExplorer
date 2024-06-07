import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
const Wrong = () => {
	return (
		<View style={styles.viewStyle}>
			<View style={styles.animation}>
				<LottieView
					style={{ flex: 1 }}
					source={require('../assets/Animation - 1717495665577.json')}
					autoPlay
					loop
				/>
			</View>
			<Text style={styles.textStyle}>Oops!</Text>
			<Text style={styles.textStyle1}>
				{'Before sending the prescription this is \n   all the details we attached here'}
			</Text>
			<TouchableOpacity style={styles.buttonStyle} onPress={() => console.log('Button pressed')}>
				<Text style={styles.buttonText}>Go back</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	animation: {
		width: 100,
		height: 100,
		resizeMode: 'contain',
		marginBottom: 20,
	},
	textStyle: {
		fontSize: 22,
		color: 'red',
		marginBottom: 8,
	},
	textStyle1: {
		marginTop: 8,
		textAlign: 'center',
	},
	buttonStyle: {
		marginTop: 16,
		paddingVertical: 10,
		paddingHorizontal: 80,
		backgroundColor: 'red',
		borderRadius: 4,
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
	},
});

export default Wrong;
