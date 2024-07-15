// app/screen/mealsOverviewScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { MEALS } from '@/data/dummy-data';
import Meal from '@/models/meal';
import MealItem from "@/components/MealItem";

const MealsOverviewScreen = () => {
    const { categoryId, categoryTitle } = useLocalSearchParams();
    const [displayedMeals, setDisplayedMeals] = useState<Meal[]>([]);

    useEffect(() => {
        if (typeof categoryId === 'string') {
            const meals = MEALS.filter((meal: Meal) =>
                meal.categoryIds.includes(categoryId)
            );
            setDisplayedMeals(meals);
        }
    }, [categoryId]);


    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <MealItem item={item} />}
            />
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },

});
