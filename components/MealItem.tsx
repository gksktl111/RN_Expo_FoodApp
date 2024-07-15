import Meal from "@/models/meal";
import {Image, Platform, Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";

const renderMealItem = ({item}: { item: Meal }) => (
    <View style={styles.container}>
        <Pressable
            android_ripple={{color: '#ccc'}}
        >
            <View>
                <Image source={{uri: item.imageUrl}} style={styles.image}/>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.detailItem}>조리 시간 : {item.duration}분</Text>
                <Text style={styles.detailItem}>난이도 : {item.complexity.toUpperCase()}</Text>
                <Text style={styles.detailItem}>비용 : {item.affordability.toUpperCase()}</Text>
            </View>
        </Pressable>
    </View>
);

export default renderMealItem

const styles = StyleSheet.create({
    container: {
        margin:8,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    image:{
        width:'100%',
        height:200,
    },
    title: {
        fontSize: 18,
        textAlign: "center",
        fontWeight:'bold',
        margin:8
    },
    details:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    detailItem:{
        marginHorizontal:4,
        padding:12,
    }
});
