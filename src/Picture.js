import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity,Button } from 'react-native';

const Picture = ({ navigation }) => {
    return (
        <SafeAreaView>
        <Text style={styles.baseText}>
            Picture View
        </Text>

        <Button
            title="Dashbaord"
            onPress={() =>
                navigation.navigate('Dashboard')
            }
        />
    </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    baseText: {
        fontFamily: "Cochin"
      },
      titleText: {
        fontSize: 20,
        fontWeight: "bold"
      }
});

export default Picture; 