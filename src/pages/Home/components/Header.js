import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import { loadHeader } from '../../../services/loadData';
import logo from '../../../assets/logo.png';

class Header extends React.Component {

    state = {
        header: {
            welcome: '',
            legend: ''
        }
    };

    updateHeader() {
        const header = loadHeader();
        this.setState({ header: header });
    }
    componentDidMount() {
        this.updateHeader();
    }

    render() {
        return <View style={styles.header}>
            <Image style={styles.image} source={logo} />
            <Text style={styles.welcome}>{this.state.header.welcome}</Text>
            <Text style={styles.legend}>{this.state.header.legend}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F6F6F6',
        padding: 16
    },
    image: {
        width: 70,
        height: 28
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#464646',
    },
    legend: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3',
    }
})

export default Header;