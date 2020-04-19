import React from 'react';
import Header from './src/Header.js';
import Footer from './src/Footer.js';
import Content from './src/Content.js';
import {StyleSheet, View} from 'react-native';
import ImagePicker from 'react-native-image-picker';

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Content/>
                <Image source={this.state.avatarSource} style={styles.uploadAvatsar}/>
                <Footer/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadAvatsar: {
        flex: 1,
        backgroundColor: '#ff5e44',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
        console.log('User cancelled image picker');
    } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
    } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
            avatarSource: source,
        });
    }
});

export default App;