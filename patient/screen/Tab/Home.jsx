import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button, SearchBar } from 'react-native-elements';


export default function Home({ navigation }) {
    const [search, setSearch] = React.useState('');

    const updateSearch = (text) => {
        setSearch(text);
        console.log(text);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>Hello, Rody</Text>
                    </View>
                </View>
                <SearchBar
                    platform="default"
                    lightTheme
                    onChangeText={updateSearch}
                    onClear={() => setSearch('')}
                    value={search}
                    placeholder="Type query here..."
                    placeholderTextColor="#888"
                    round
                    inputContainerStyle={styles.searchBarInputContainer}
                    containerStyle={styles.searchBarContainer}
                />
            </View>
            <View style={styles.recommendedContainer}>
                <View style={styles.recommendedTextContainer}>
                    <Text style={styles.recommendedText}>Last Channeled  Doctor</Text>
                </View>
            </View>
            <View style={styles.cardOne}>
      <View style={styles.cardOneHead}>
        <Image
          source={require('../image/image.jpg')}
          style={styles.cardOneImage}
        />
        <View>
          <Text style={styles.cardOneName}>Dr . Munasigha</Text>
          <Text style={styles.cardOneSpecialty}>Cardiologistic</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>View Perception</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Contact</Text>
        </View>
      </View>
    </View>

            <View style={styles.recommendedContainer}>
                <View style={styles.recommendedTextContainer}>
                    <Text style={styles.recommendedText}>Recommended</Text>
                </View>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ height: 400 }}
            >

                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.card}
                >
                    <Image
                        source={require('../image/image.jpg')}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardTextContainer}>
                        <Text style={styles.cardTitle}>Dr . munasigha</Text>

                    </View>
                    <Text style={styles.cardLocation}>4.5</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.card}
                >
                    <Image
                        source={require('../image/image.jpg')}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardTextContainer}>
                        <Text style={styles.cardTitle}>Dr . munasigha</Text>

                    </View>
                    <Text style={styles.cardLocation}>4.5</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.card}
                >
                    <Image
                        source={require('../image/image.jpg')}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardTextContainer}>
                        <Text style={styles.cardTitle}>Dr . munasigha</Text>
                    </View>
                    <Text style={styles.cardLocation}>4.5</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flex: 1
    },
    header: {
        backgroundColor: "#0165FC",
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
    searchBarInputContainer: {
        backgroundColor: '#FFF',
    },
    searchBarContainer: {
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        paddingHorizontal: 0
    },
    recommendedContainer: {
        flexDirection: "row",
        paddingHorizontal: 20,
        width: "100%",
        alignItems: "center"
    },
    recommendedTextContainer: {
        width: "100%"
    },
    recommendedText: {
        fontWeight: "bold",
        fontSize: 17,
        color: "#585a61"
    },
    recommendedUnderline: {
        height: 4,
        backgroundColor: "#b1e5d3",
        width: 115,
        marginTop: -5
    },
    cardOne: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginBottom: 20,
      },
      cardOneHead: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      cardOneImage: {
        width: 50,
        height: 50,
        borderRadius: 25, // Circular image
        marginRight: 10,
      },
      cardOneName: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      cardOneSpecialty: {
        fontSize: 14,
        color: '#888',
      },
      buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      button: {
        flex: 1,
        marginHorizontal: 5,
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
    card: {
        height: 200,
        elevation: 2,
        backgroundColor: "#FFF",
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 15,
        marginBottom: 10,
        width: 160
    },
    cardImage: {
        height: 120,
        width: 160,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    cardTextContainer: {
        flexDirection: "row",
        paddingTop: 10,
        paddingHorizontal: 10
    },
    cardTitle: {
        fontWeight: "bold"
    },
    cardLocation: {
        paddingHorizontal: 10,
        fontWeight: "bold",
        color: "#b1e5d3",
        paddingTop: 3
    }
});
