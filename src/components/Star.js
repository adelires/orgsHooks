import React from "react";
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import star from '../assets/star.png';
import grayStar from '../assets/grayStar.png';

export default function Star({ onPress, disabled = true, completed, great = false }) {

    const getImage = () => {
        if (completed) {
            return star;
        }
        return grayStar;
    };

    const styles = stylesFunction(great);

    return <>
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled} >
            <Image style={styles.star} source={getImage()} />
        </TouchableOpacity>
    </>
}

const stylesFunction = (great) => StyleSheet.create({
    star: {
        width: great ? 36 : 12,
        height: great ? 36 : 12,
        marginRight: 2
    }
})