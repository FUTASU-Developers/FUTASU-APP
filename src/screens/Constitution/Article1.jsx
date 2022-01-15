import React from "react";
import { View, TouchableOpacity } from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import Article from "../../components/constitution/Article";
import TopStack from "../../components/topStack";
import { useNavigation } from "@react-navigation/core";
import Section from "../../components/constitution/Section";
import List from "../../components/constitution/List";
import { Swipeable } from "react-native-gesture-handler";
import { EvilIcons } from "@expo/vector-icons";

const renderData = (data) => {
    switch (data.type) {
        case "section":
            return renderSection(data.data);
        case "list":
            return renderList(data.data);
    }
};

const renderSection = (textData) => {
    return (
        <Section number={textData.number} title={textData.name} key={textData.number}>
            {textData.text}
        </Section>
    );
};

const renderList = (list) => {
    return list.map((l, i) => {
        return (
            <View key={`${i}---`}>
                <List listStyle={i + 1} key={`list ${i}key`}>{l.text}</List>

                {l.isNested &&
                    l.data.map((d, i) => (
                        <List listStyle="*" style={{ width: "75%" }} key={`sublist ${i}key`}>
                            {d}
                        </List>
                    ))}
            </View>
        );
    });
};

const Article1 = () => {
    const navigation = useNavigation();

    const article1 = [
        {
            type: "section",
            data: {
                name: "Name",
                number: 1,
                text: "The students Union shall be herein after called, known and addressed at the Students Union of the Federal University of Technology, Akure and shall otherwise be referred to as the “Union” or the Federal University of Technology, Akure Students Union (FUTASU) with these acronyms",
            },
        },
        {
            type: "list",
            data: [
                {
                    text: "The Legislative: The highest policy-making body shall be called : Students Representative Council (SRC).",
                    isNested: true,
                    data: [
                        "Students Executive Council (SEC)",
                        "Hall Executive Council (HEC)",
                    ],
                },
                {
                    text: "The Judiciary : The judicial body of the Union shall be called ;Judicial Council (JC).",
                    isNested: false,
                },
            ],
        },

        {
            type: "section",
            data: {
                name: "Location",
                number: "2",
                text: `The Students Union Secretariat shall be situated within the campus and shall be designated “The Students Union Building” Federal University of Technology, Akure; where administrative activities of the Union shall be carried out thoroughly.`,
            },
        },
    ];

    return (
        <View>
            <Article title="Article I">{article1.map((a) => renderData(a))}</Article>
        </View>
    );
};

export default Article1;
