import React, { useState } from "react";
import { TextInput, View, Text, ScrollView } from "react-native";
import { scale, ScaledSheet, verticalScale } from "react-native-size-matters";
import AppButton from "../../components/Appbutton";
import FloatingInput from "../../components/FloatingIInput";
import TopStack from "../../components/topStack";

const EmergencyDetails = ({ route }) => {
  const { type } = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <TopStack title="Emergency Details" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "88%", alignSelf: "center", marginTop: 20 }}
      >
        <Text style={styles.heading}>Emergency Type</Text>

        {type == null ? (
          <View
            style={[
              styles.inputContainer,
              {
                borderColor: "#D6D6D6",
                borderWidth: 1,
                backgroundColor: "#fff",
              },
            ]}
          >
            <TextInput
              style={styles.input}
              placeholder="A Title  (E.g Car Accident)"
            />
          </View>
        ) : (
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} value={type} editable={false} />
          </View>
        )}

        <Text style={[styles.heading, { marginTop: 10 }]}>
          Contact Information
        </Text>
        <View
          style={[styles.inputContainer, { paddingTop: 20, paddingBottom: 20 }]}
        >
          <FloatingInput label="Full Name" />
        </View>

        <View
          style={[
            styles.inputContainer,
            { borderColor: "#D6D6D6", borderWidth: 1, backgroundColor: "#fff" },
          ]}
        >
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="Your Phone Number"
          />
        </View>

        <Text style={[styles.heading, { marginTop: verticalScale(30) }]}>
          Additional Information
        </Text>

        <View
          style={[
            styles.inputContainer,
            {
              borderColor: "#D6D6D6",
              borderWidth: 1,
              backgroundColor: "#fff",
              height: verticalScale(130),
            },
          ]}
        >
          <TextInput
            style={[
              styles.input,
              { height: verticalScale(130), textAlignVertical: "top" },
            ]}
            multiline={true}
            keyboardType="phone-pad"
            placeholder="Type a message here ..."
          />
        </View>

        <AppButton title="Request Help" style={{ marginTop: 50 }} />
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  heading: {
    color: "#A2296E",
    fontFamily: "SfProBold",
    fontSize: "12@s",
    marginTop: 20,
  },
  inputContainer: {
    marginVertical: 15,
    backgroundColor: "#D6D6D6",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 12,
    height: 56,
  },
  input: {
    fontFamily: "SfPro",
    fontSize: "12@s",
  },
});

export default EmergencyDetails;
