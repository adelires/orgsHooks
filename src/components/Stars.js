import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Star from './Star';

export default function Stars({ quantity: quantityOld, editable = false, great = false }) {

    const [quantity, setQuantity] = useState(quantityOld);

    const RenderStars = () => {
        const starList = [];

        for (let i = 0; i < 5; i++) {
            starList.push(
                <Star
                    key={i}
                    onPress={() => setQuantity(i + 1)}
                    disabled={!editable}
                    completed={i < quantity}
                    great={great}
                />
            );
        }
        return starList;
    };

    return <View style={styles.stars}>
        <RenderStars />
    </View>
}

const styles = StyleSheet.create({
    stars: {
        flexDirection: 'row',
    }
})