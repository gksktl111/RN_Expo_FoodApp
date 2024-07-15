import React from 'react';
import {StyleSheet, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import CategoriesScreen from "@/app/screen/categoriesScreen";

export default function HomeScreen() {

    return (
        <>
            <StatusBar style="light"/>
            <CategoriesScreen/>
        </>
    );
}

const styles = StyleSheet.create({

});
