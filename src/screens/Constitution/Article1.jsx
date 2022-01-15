import React from 'react'
import { View, TextInput, SafeAreaView, Dimensions, StyleSheet, Text, StatusBar, ScrollView } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import Article from '../../components/constitution/Article';
import TopStack from '../../components/topStack';
import { useNavigation } from '@react-navigation/core';
import Section from '../../components/constitution/Section';
import List from '../../components/constitution/List';

const Article1 = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <Article title="Article I">
                <Section number={1} title='Name' >
                    The students Union shall be herein after called,
                    known and addressed at the Students Union of the
                    Federal University of Technology, Akure and shall
                    otherwise be referred to as the “Union” or the
                    Federal University of Technology, Akure Students
                    Union (FUTASU) with these acronyms :



                </Section>

                <List listStyle='1'>
                    The Legislative: The highest policy-making body shall be called :
                    Students Representative Council (SRC).
                </List>

                <List listStyle='2'>
                    The Executive: shall consist of :
                </List>

                <List listStyle='i' style={{ width: '80%' }}>
                    Students Executive Council (SEC)
                </List>

                <List listStyle='ii' style={{ width: '80%' }}>
                    Hall Executive Council (HEC)
                </List>

                <List listStyle='3'>
                    The Judiciary : The judicial body of the Union
                    shall be called ; Judicial Council (JC).
                </List>


                <Section number={2} title='LOCATION'>
                    The Students Union Secretariat shall be situated within the campus
                    and shall be designated “The Students Union Building” Federal University of Technology,
                    Akure; where administrative activities of the Union shall be carried out thoroughly.

                </Section>
            </Article>
        </SafeAreaView>
    )
}


export default Article1