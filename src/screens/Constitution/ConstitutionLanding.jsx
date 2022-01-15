import React from "react";
import {
    View,
    TextInput,
    SafeAreaView,
    Dimensions,
    StyleSheet,
    Text,
    StatusBar,
    ScrollView,
} from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import TopStack from "../../components/topStack";
import Title from "../../components/constitution/Title";
import { useNavigation } from "@react-navigation/core";

const ConstitutionLanding = ({ }) => {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: "#fff", height: "100%" }}>
            <TopStack title="FUTASU Constitution" next="Introduction" />
            <ScrollView style={{ marginTop: 20 }}>
                <Title
                    Press={() => navigation.navigate("Introduction")}
                    title="INTRODUCTION"
                    border={true}
                    key={"intro"}
                />
                <Title
                    Press={() => navigation.navigate("Article I")}
                    title="ARTICLE I"
                    key={"articlei"}
                    border={true}
                />
                <Title title="ARTICLE II" border={true}
                    key={"articleii"}
                />
                <Title title="ARTICLE III" border={true}
                    key={"articleiii"}
                />
                <Title title="ARTICLE IV" border={true}
                    key={"articleiv"}
                />
                <Title title="ARTICLE VI" border={true}
                    key={"articlevi"}
                />
                <Title title="ARTICLE VII" border={true}
                    key={"articlevii"}
                />
                <Title title="ARTICLE VIII" border={true}
                    key={"articleviii"}
                />
                <Title title="ARTICLE IX" border={true}
                    key={"articleix"}
                />
                <Title title="ARTICLE X"
                    key={"articlex"}
                />
            </ScrollView>
        </View>
    );
};

const styles = ScaledSheet.create({});

export default ConstitutionLanding;
