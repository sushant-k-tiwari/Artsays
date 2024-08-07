import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import CategoryList from '@/components/CategoryList';
import Banner from '@/components/Banner';
import DealOfTheDay from '@/components/DealOfTheDay';
import HotSellingFootwear from '@/components/HotSellingFootwear';
import RecommendedForYou from '@/components/RecommendedForYou';


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
          <Header />
          <ScrollView>
            <SearchBar />
            <CategoryList />
            <Banner />
            <DealOfTheDay />
            <HotSellingFootwear />
            <RecommendedForYou />
          </ScrollView>
        </SafeAreaView>
      );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
})