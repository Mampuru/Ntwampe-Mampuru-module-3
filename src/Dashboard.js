import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity,Button } from 'react-native';
 
const Dashboard = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text style={styles.baseText}>
                Dashbaord View
            </Text>

            <Button
                title="Picture"
                onPress={() =>
                    navigation.navigate('Picture')
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

export default Dashboard; 