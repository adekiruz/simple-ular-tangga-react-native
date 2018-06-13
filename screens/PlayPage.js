import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

class PlayPage extends React.Component {

	static navigationOptions = {
    title: 'Halaman Permainan',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  constructor() {
    super();
  
    this.state = {
    	dadu: 0
    };

    this.putarDadu = this.putarDadu.bind(this);
  }

  putarDadu() {
  	let randomNumber = 0;
  	let interval = setInterval(() => {
  		randomNumber = Math.floor((Math.random() * 6) + 1);
  		this.setState({
  		  dadu: randomNumber,
  		});
  	}, 100);

  	setTimeout(() => {
  		clearInterval(interval);
  	}, 2000);
  }

	render() {
		return (
			<View style={styles.container}>
				<View style={[styles.header, styles.borderOn, styles.addMarginBottom]}><Text> Nama Pemain: {this.props.navigation.getParam('name')} </Text></View>
				<View style={[styles.body, styles.borderOn, styles.addMarginBottom]}><Text> Disini letak kotaknya </Text></View>
				<View style={[styles.footer, styles.borderOn, styles.addMarginBottom]}>
					<View style={styles.simpleGrid}>
						<View style={styles.boxGrid}>
							<TextInput 
								editable={false} 
								style={styles.inputDadu} 
								value={String(this.state.dadu)} />
						</View>
						<View style={styles.boxGrid}>
							<Button title='Putar dadu' onPress={this.putarDadu} />
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	borderOn: {
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#f2f2ff',
	},
	addMarginBottom: {
		marginBottom: 5
	},
	inputDadu: {
		padding: 3,
		width: '30%',
		textAlign: 'center',
		borderWidth: 1,
    borderColor: '#f2f2ff',
    borderStyle: 'solid',
		borderRadius: 2.5,
		fontSize: 20,
		fontWeight: 'bold'
	},
	simpleGrid: {
		flex: 1,
	  flexDirection: 'row',
	  justifyContent: 'space-between'
	},
	boxGrid: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	},
	header: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingLeft: 10
	},
	body: {
    flex: 9,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
	},
	footer: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
	},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
});

export default PlayPage;