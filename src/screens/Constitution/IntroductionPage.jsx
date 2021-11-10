import React from 'react'
import { View, TextInput, SafeAreaView, Dimensions, StyleSheet, Text,StatusBar,ScrollView } from 'react-native';
import { scale , ScaledSheet } from 'react-native-size-matters';
import Article from '../../components/constitution/Article';
import TopStack from '../../components/topStack';
import { useNavigation } from '@react-navigation/core';
import Section from '../../components/constitution/Section';
import List from '../../components/constitution/List';


const Introduction=()=>{
    const navigation=useNavigation()
    return(
       <View>
           <Article title="Introduction">
                <Section number={0} title='Introduction' >
                We the entire students of the
                Federal University of Technology,
                Akure (FUTA) having solemnly resolved to:      </Section>

                <List>
                         Solidify the existence of
                          the students Union with a
                          refined view of nursing,
                          promoting and establishing
                        a conducive learning environment;</List>

                <List>
                Propagate peace, unity and harmony with one another regarding our
                stand as indissoluble and in collapsible for the purpose of existing
                within the recognized brackets of national and international Students
                Union.
                </List>

                <List>
                Establish a selfless constitution with the intention of promoting cultural,
                educational and societal leadership training within the University and also
                in the national leadership walls at large.
                </List>

                <List >
                Produce responsible citizenry within the University so as to fully dispose
                unbent justice, freedom, and equality before the law.
                </List>

                <List>
                    Do hereby make, enact and give to the students’ populace the following
                    Constitution.
                </List>




           </Article>
       </View>
    )
}

export default Introduction