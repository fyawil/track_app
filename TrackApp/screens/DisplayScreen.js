import {
  StyleSheet,
  Text,
  StatusBar,
  Pressable,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import * as SQLite from "expo-sqlite";
import { useState, useEffect } from "react";

export default function DisplayScreen({ navigation }) {
  const db = SQLite.openDatabase("trackLog.db");

  const [currentStartDay, setCurrentStartDay] = useState("");
  const [currentStartDayPlaceholderColor, setCurrentStartDayPlaceholderColor] =
    useState("grey");

  const [currentStartMonth, setCurrentStartMonth] = useState("");
  const [
    currentStartMonthPlaceholderColor,
    setCurrentStartMonthPlaceholderColor,
  ] = useState("grey");

  const [currentStartYear, setCurrentStartYear] = useState("");
  const [
    currentStartYearPlaceholderColor,
    setCurrentStartYearPlaceholderColor,
  ] = useState("grey");

  const [currentEndDay, setCurrentEndDay] = useState("");
  const [currentEndDayPlaceholderColor, setCurrentEndDayPlaceholderColor] =
    useState("grey");

  const [currentEndMonth, setCurrentEndMonth] = useState("");
  const [currentEndMonthPlaceholderColor, setCurrentEndMonthPlaceholderColor] =
    useState("grey");

  const [currentEndYear, setCurrentEndYear] = useState("");
  const [currentEndYearPlaceholderColor, setCurrentEndYearPlaceholderColor] =
    useState("grey");

  const [exercises, setExercises] = useState([]);
  const [isExercisesShowing, setIsExercisesShowing] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState("Pick An Exercise");

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql("SELECT DISTINCT exercise FROM sets", [], (_, { rows }) => {
        // Extract the rows and store them in the exercises array
        const exercisesData = [];
        for (let i = 0; i < rows.length; i++) {
          exercisesData.push(rows.item(i).exercise);
        }

        setExercises(exercisesData.sort());
      });
    });
  }, [db]);

  const isStartDayValid = () => {
    if (
      currentStartDay.trim().length != 1 &&
      currentStartDay.trim().length != 2
    ) {
      return false;
    }
    if (/[^0-9]/.test(currentStartDay.trim())) {
      return false;
    }
    if (+currentStartDay < 1) {
      return false;
    }
    if (+currentStartDay > 31) {
      return false;
    }
    return true;
  };

  const isStartMonthValid = () => {
    if (
      currentStartMonth.trim().length != 1 &&
      currentStartMonth.trim().length != 2
    ) {
      return false;
    }
    if (/[^0-9]/.test(currentStartMonth.trim())) {
      return false;
    }
    if (+currentStartMonth < 1) {
      return false;
    }
    if (+currentStartMonth > 12) {
      return false;
    }
    return true;
  };

  const isStartYearValid = () => {
    if (currentStartYear.trim().length != 4) {
      return false;
    }
    if (/[^0-9]/.test(currentStartYear.trim())) {
      return false;
    }
    return true;
  };

  const isEndDayValid = () => {
    if (currentEndDay.trim().length != 1 && currentEndDay.trim().length != 2) {
      return false;
    }
    if (/[^0-9]/.test(currentEndDay.trim())) {
      return false;
    }
    if (+currentEndDay < 1) {
      return false;
    }
    if (+currentEndDay > 31) {
      return false;
    }
    return true;
  };

  const isEndMonthValid = () => {
    if (
      currentEndMonth.trim().length != 1 &&
      currentEndMonth.trim().length != 2
    ) {
      return false;
    }
    if (/[^0-9]/.test(currentEndMonth.trim())) {
      return false;
    }
    if (+currentEndMonth < 1) {
      return false;
    }
    if (+currentEndMonth > 12) {
      return false;
    }
    return true;
  };

  const isEndYearValid = () => {
    if (currentEndYear.trim().length != 4) {
      return false;
    }
    if (/[^0-9]/.test(currentEndYear.trim())) {
      return false;
    }
    return true;
  };

  const isDatesValid = () => {
    if (!isStartDayValid()) {
      setCurrentStartDay("");
      setCurrentStartDayPlaceholderColor("red");
    } else {
      setCurrentStartDayPlaceholderColor("grey");
    }
    if (!isStartMonthValid()) {
      setCurrentStartMonth("");
      setCurrentStartMonthPlaceholderColor("red");
    } else {
      setCurrentStartMonthPlaceholderColor("grey");
    }
    if (!isStartYearValid()) {
      setCurrentStartYear("");
      setCurrentStartYearPlaceholderColor("red");
    } else {
      setCurrentStartYearPlaceholderColor("grey");
    }
    if (!isEndDayValid()) {
      setCurrentEndDay("");
      setCurrentEndDayPlaceholderColor("red");
    } else {
      setCurrentEndDayPlaceholderColor("grey");
    }
    if (!isEndMonthValid()) {
      setCurrentEndMonth("");
      setCurrentEndMonthPlaceholderColor("red");
    } else {
      setCurrentEndMonthPlaceholderColor("grey");
    }
    if (!isEndYearValid()) {
      setCurrentEndYear("");
      setCurrentEndYearPlaceholderColor("red");
    } else {
      setCurrentEndYearPlaceholderColor("grey");
    }
    return (
      isStartDayValid() &&
      isStartMonthValid() &&
      isStartYearValid() &&
      isEndDayValid() &&
      isEndMonthValid() &&
      isEndYearValid()
    );
  };

  const handleSetSelectedExercise = (ex) => {
    setSelectedExercise(ex);
    setIsExercisesShowing(false);
  };

  // import isDateValid from RecordLiftScreen.js

  const isDisplayRequestValid = () => {
    // Validate dates here and display red placeholders if error in date
    // Use isDateValid from RecordLiftScreen.js
  }

  const displayStats = () => {
// If dates are valid and exercise data is available, create an array of objects of sets
// If dates are valid but no exercise data is available, print "No data for x exercise between these dates"
// If dates are invalid, show the error via red placeholders for the offending dates
  };

  // Display Chart on popup view with datapoint values shown at the datapoint

  return (
    <View style={styles.container}>
      <View style={styles.homePageTop}>
        <View style={styles.logoView}>
          <Text style={styles.logo}>TRACK APP</Text>
        </View>
      </View>
      <View style={styles.homePageBody}>
        <View style={styles.inputStartDateView}>
          <TextInput
            style={[styles.inputStartDay]}
            value={currentStartDay}
            placeholder="dd"
            placeholderTextColor={currentStartDayPlaceholderColor}
            onChangeText={setCurrentStartDay}
          />
          <TextInput
            style={styles.inputStartMonth}
            value={currentStartMonth}
            placeholder="mm"
            placeholderTextColor={currentStartMonthPlaceholderColor}
            onChangeText={setCurrentStartMonth}
          />
          <TextInput
            style={styles.inputStartYear}
            value={currentStartYear}
            placeholder="yyyy"
            placeholderTextColor={currentStartYearPlaceholderColor}
            onChangeText={setCurrentStartYear}
          />
        </View>
        <View style={styles.inputEndDateView}>
          <TextInput
            style={[styles.inputEndDay]}
            value={currentEndDay}
            placeholder="dd"
            placeholderTextColor={currentEndDayPlaceholderColor}
            onChangeText={setCurrentEndDay}
          />
          <TextInput
            style={styles.inputEndMonth}
            value={currentEndMonth}
            placeholder="mm"
            placeholderTextColor={currentEndMonthPlaceholderColor}
            onChangeText={setCurrentEndMonth}
          />
          <TextInput
            style={styles.inputEndYear}
            value={currentEndYear}
            placeholder="yyyy"
            placeholderTextColor={currentEndYearPlaceholderColor}
            onChangeText={setCurrentEndYear}
          />
        </View>

        {!isExercisesShowing && (
          <View style={styles.inputExerciseView}>
            <Pressable
              value={true}
              style={styles.inputExerciseButton}
              onPress={setIsExercisesShowing}
            >
              <Text
                style={styles.inputExerciseText}
              >{`${selectedExercise}`}</Text>
            </Pressable>
          </View>
        )}
        {isExercisesShowing && (
          <View style={styles.selectExerciseView}>
            <ScrollView
              style={styles.selectExerciseScrollView}
              showsVerticalScrollIndicator={true}
            >
              {exercises.map((ex) => (
                <Pressable key={ex} onPress={() => handleSetSelectedExercise(ex)}>
                  <Text style={styles.selectExerciseText}>{ex}</Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        )}
        <View style={styles.displayStatsView}>
          <Pressable style={styles.displayStatsButton} onPress={displayStats}>
            <Text style={styles.displayStatsText}>Show Stats</Text>
          </Pressable>
        </View>
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "space-between",
    margin: 8,
  },
  homePageTop: {
    display: "flex",
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
  inputStartDateView: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "black",
    width: "50%",
    height: "10%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  inputStartDay: {
    width: "32%",
    height: "100%",
    marginRight: "2%",
    backgroundColor: "white",
    borderRadius: 5,
    textAlign: "center",
  },
  inputStartMonth: {
    width: "32%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    color: "black",
    textAlign: "center",
  },
  inputStartYear: {
    width: "32%",
    height: "100%",
    marginLeft: "2%",
    backgroundColor: "white",
    borderRadius: 5,
    color: "black",
    textAlign: "center",
  },
  inputEndDateView: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "black",
    width: "50%",
    height: "10%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  inputEndDay: {
    width: "32%",
    height: "100%",
    marginRight: "2%",
    backgroundColor: "white",
    borderRadius: 5,
    textAlign: "center",
  },
  inputEndMonth: {
    width: "32%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    color: "black",
    textAlign: "center",
  },
  inputEndYear: {
    width: "32%",
    height: "100%",
    marginLeft: "2%",
    backgroundColor: "white",
    borderRadius: 5,
    color: "black",
    textAlign: "center",
  },
  inputExerciseView: {
    height: "10%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputExerciseButton: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  inputExerciseText: {
    fontSize: 20,
  },
  selectExerciseView: {
    height: "20%",
    width: "50%",
    backgroundColor: "white",
  },
  selectExerciseScrollView: {
    height: "100%",
  },
  selectExerciseText: {
    fontSize: 20,
  },
  displayStatsView: {
    height: "10%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  displayStatsButton: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  displayStatsText: {
    fontSize: 20,
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
    textDecorationLine: "line-through",
  },
});
