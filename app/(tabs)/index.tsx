import {StyleSheet, Text, View} from 'react-native';
import {StatusBar} from "expo-status-bar";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style={"dark"}/>
            <Text>새로운 앱</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
    ,


});
