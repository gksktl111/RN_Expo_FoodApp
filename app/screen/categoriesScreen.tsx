// app/screen/categoriesScreen.tsx
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '@/data/dummy-data';
import CategoryGridTile from '@/components/CategoryGridTile';
import { useRouter } from 'expo-router';
import Category from '@/models/category'

const CategoriesScreen = () => {
    const router = useRouter();

    const renderCategoryItem = ({ item }: { item: Category }) => {
        const pressHandler = () => {
            router.push({
                pathname: '/screen/mealsOverviewScreen',
                params: { categoryId: item.id, categoryTitle: item.title }
            });
        };

        return (
            <CategoryGridTile
                title={item.title}
                color={item.color}
                onPress={pressHandler}
            />
        );
    };

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
    },
});
