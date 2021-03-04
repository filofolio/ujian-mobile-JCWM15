import React, {Component} from 'react';
import { View, Text, StatusBar} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { DataTable } from 'react-native-paper';


const Home = () => {
    return (
        <SafeAreaView>
        <StatusBar />
        
        <View>
            <Text style={{backgroundColor:'red', color:'white'}}>Corona Virus Live Update</Text>

        </View>
        <View>
                <DataTable>
                <DataTable.Row>
                    <DataTable.Cell>Total</DataTable.Cell>
                    <DataTable.Cell numeric>9999</DataTable.Cell>
                    <DataTable.Cell numeric>+ 9999</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Meninggal</DataTable.Cell>
                    <DataTable.Cell numeric>9999</DataTable.Cell>
                    <DataTable.Cell numeric>+ 9999</DataTable.Cell>
                </DataTable.Row>
                    <DataTable.Row>
                    <DataTable.Cell>Sembuh</DataTable.Cell>
                    <DataTable.Cell numeric>9999</DataTable.Cell>
                    <DataTable.Cell numeric>+ 9999</DataTable.Cell>
                </DataTable.Row>
                </DataTable>
            </View>
        </SafeAreaView> 
    )
}



export default Home;