import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Pressable, TextInput } from 'react-native';

export default function RecordLiftScreen({ navigation }) {

  const [exercise, setExerciseText] = useState('');
  const [day, setDayText] = useState('');
  const [month, setMonthText] = useState('');
  const [year, setYearText] = useState('');
  const [weight, setWeightText] = useState('');
  const [reps, setRepsText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.homePageTop}>
        <View style={styles.logoView}>
          <Text style={styles.logo}>TRACK APP</Text>
        </View>
      </View>
      <View style={styles.homePageBody}>
        <View style={styles.date}>
          <TextInput
            style={styles.inputDay}
            value={day}
            placeholder="dd"
            placeholderTextColor="grey"
          />
          <TextInput
            style={styles.inputMonth}
            value={month}
            placeholder="mm"
            placeholderTextColor="grey"
          />
          <TextInput
            style={styles.inputYear}
            value={year}
            placeholder="yyyy"
            placeholderTextColor="grey"
          />
        </View>
        <TextInput
          style={styles.inputExercise}
          value={exercise}
          placeholder="lift"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.inputWeight}
          value={weight}
          placeholder="weight"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.inputReps}
          value={reps}
          placeholder="reps"
          placeholderTextColor="grey"
        />
        <Pressable style={styles.addSetButton}>
          <Text style={{ textAlign: "center", fontSize: 24 }}>+</Text>
        </Pressable>
      </View>
      <View style={styles.homePageBottom}>
        <View style={styles.contactUsView}>
          <Text style={styles.contact}>Contact Us</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  homePageTop: {
    flexDirection: "row",
    backgroundColor: "white",
    height: "10%",
  },
  logoView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 24,
  },
  homePageBody: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "black",
    height: "80%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  inputDay: {
    width: '30%',
    height: "100%",
    backgroundColor: 'white',
    borderRadius: 5,
    color: 'black',
    textAlign: "center",
  },
  inputMonth: {
    width: '30%',
    height: "100%",
    backgroundColor: 'white',
    borderRadius: 5,
    color: 'black',
    textAlign: "center",
  },
  inputYear: {
    width: '30%',
    height: "100%",
    backgroundColor: 'white',
    borderRadius: 5,
    color: 'black',
    textAlign: "center"
  },
  inputExercise: {
    width: '50%',
    height: "10%",
    backgroundColor: 'white',
    borderRadius: 5,
    color: 'black',
    textAlign: "center"
  },
  inputWeight: {
    width: '50%',
    height: "10%",
    backgroundColor: 'white',
    borderRadius: 5,
    color: 'black',
    textAlign: "center",
  },
  inputReps: {
    width: '50%',
    height: "10%",
    backgroundColor: 'white',
    borderRadius: 5,
    color: 'black',
    textAlign: "center",
  },
  addSetButton: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
  },
  homePageBottom: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    height: "10%",
  },
  contactUsView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  contact: {
    fontSize: 24,
  },
});
