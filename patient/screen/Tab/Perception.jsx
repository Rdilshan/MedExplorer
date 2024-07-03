import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Perception() {
  return (
    <View style={styles.header}>
                <View style={styles.headerContent}>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>Hello, Rody</Text>
                    </View>
                </View>
            </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1
},
header: {
    backgroundColor: "#00a46c",
    height: "35%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20
},
headerContent: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 45
},
headerTextContainer: {
    width: "50%"
},
headerText: {
    fontSize: 28,
    color: "#FFF",
    fontWeight: "bold"
},
});

export default Perception;
