import React from "react";
import {
    View,
    TextInput,
    SafeAreaView,
    Dimensions,
    StyleSheet,
    Text,
} from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import Icon from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import TopStack from "../../components/topStack";

const ELibraryLanding = ({ route, navigation }) => {
    const { searchInput } = route.params;
    console.log(searchInput);

    return (
        <View style={{ backgroundColor: "white", height: "100%" }}>
            <TopStack title="Search Results" navigate={() => navigation.goBack()} />
        </View>
    );
};

const styles = ScaledSheet.create({});

export default ELibraryLanding;
