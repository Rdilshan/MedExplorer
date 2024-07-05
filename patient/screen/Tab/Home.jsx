import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Button, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');

export default function Home({ navigation }) {
    const [search, setSearch] = useState('');

    const updateSearch = (text) => {
        setSearch(text);
        console.log(text);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <View style={styles.headerTextContainer}>
                        <TouchableOpacity>
                            <Image
                                source={require('../image/profile.jpg')}
                                style={styles.profileImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Icon name="notifications-outline" size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.headerText}>Hello, Rody</Text>
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
                    <Text style={styles.recommendedText}>Last Channeled Doctor</Text>
                </View>
            </View>
            <View style={styles.cardOne}>
                <View style={styles.cardOneHead}>
                    <Image
                        source={require('../image/image.jpg')}
                        style={styles.cardOneImage}
                    />
                    <View>
                        <Text style={styles.cardOneName}>Dr. Munasigha</Text>
                        <Text style={styles.cardOneSpecialty}>Cardiologist</Text>
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
                style={{ height: hp('30%') }}
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
                        <Text style={styles.cardTitle}>Dr. Munasigha</Text>
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
                        <Text style={styles.cardTitle}>Dr. Munasigha</Text>
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
                        <Text style={styles.cardTitle}>Dr. Munasigha</Text>
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
        height: hp('35%'),
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: wp('5%')
    },
    headerContent: {
        marginTop: hp('5%')
    },
    headerTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: hp('2%')
    },
    headerText: {
        fontSize: wp('6%'),
        color: "#FFF",
        fontWeight: "bold",
        textAlign: 'left'
    },
    profileImage: {
        marginTop:wp('8%'),
        width: wp('15%'),
        height: wp('15%'),
        borderRadius: wp('10%')
    },
    iconButton: {
        marginLeft: wp('5%'),
        borderWidth: 1,
        borderColor: '#FFF',
        padding: wp('3%'),
        borderRadius: wp('5%'),
        marginTop:wp('10%')
    },    
    searchBarInputContainer: {
        backgroundColor: '#FFF',
    },
    searchBarContainer: {
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        paddingHorizontal: 0,
        marginTop:wp('3%'),
    },
    recommendedContainer: {
        marginTop:wp('5%'),
        paddingHorizontal: wp('5%'),
        width: "100%",
        alignItems: "center"
    },
    recommendedTextContainer: {
        width: "100%"
    },
    recommendedText: {
        fontWeight: "bold",
        fontSize: wp('4%'),
        color: "#585a61"
    },
    cardOne: {
        padding: wp('5%'),
        borderRadius: wp('3%'),
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginBottom: hp('2%'),
        marginHorizontal: wp('5%')
    },
    cardOneHead: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp('2%'),
    },
    cardOneImage: {
        width: wp('15%'),
        height: wp('15%'),
        borderRadius: wp('7.5%'),
        marginRight: wp('3%'),
    },
    cardOneName: {
        fontSize: wp('4.5%'),
        fontWeight: 'bold',
    },
    cardOneSpecialty: {
        fontSize: wp('3.5%'),
        color: '#888',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        marginHorizontal: wp('2%'),
        paddingVertical: hp('1%'),
        backgroundColor: '#007BFF',
        borderRadius: wp('2%'),
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: wp('3.5%')
    },
    card: {
        height: hp('25%'),
        width: wp('40%'),
        marginLeft: wp('5%'),
        marginTop: hp('2%'),
        marginBottom: hp('2%'),
        borderRadius: wp('5%'),
        backgroundColor: "#FFF",
        elevation: 2,
    },
    cardImage: {
        height: hp('15%'),
        width: '100%',
        borderTopLeftRadius: wp('5%'),
        borderTopRightRadius: wp('5%')
    },
    cardTextContainer: {
        flexDirection: "row",
        paddingTop: hp('1%'),
        paddingHorizontal: wp('3%')
    },
    cardTitle: {
        fontWeight: "bold",
        fontSize: wp('4%')
    },
    cardLocation: {
        paddingHorizontal: wp('3%'),
        fontWeight: "bold",
        color: "#b1e5d3",
        paddingTop: hp('1%'),
        fontSize: wp('3.5%')
    }
});

