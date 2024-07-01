import React, { useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import ViewShot from 'react-native-view-shot';
import { useNavigation, useRoute } from "@react-navigation/native";


const { height, width } = Dimensions.get('window');

export default function Board() {

  const route = useRoute();
  const { age, name } = route.params;


  const [path, setPath] = useState([]);
  const [currentPath, setCurrentPath] = useState([]);
  const [isClearButtonClicked, setClearButtonClicked] = useState(false);

  const viewShotRef = useRef(null);
  const navigation = useNavigation();

  const onTouchEnd = () => {
    if (currentPath.length > 0) {
      setPath([...path, currentPath]);
      setCurrentPath([]);
    }
    setClearButtonClicked(false);
  };

  const onTouchMove = (event) => {
    const newPath = [...currentPath];
    const locationX = event.nativeEvent.locationX;
    const locationY = event.nativeEvent.locationY;
    const newPoint = `${newPath.length === 0 ? 'M' : 'L'}${locationX.toFixed(0)},${locationY.toFixed(0)}`;
    newPath.push(newPoint);
    setCurrentPath(newPath);
  };

  const handleClearButtonClick = () => {
    setPath([]);
    setCurrentPath([]);
    setClearButtonClicked(true);
  };

  const captureDrawing = async () => {
    if (viewShotRef.current) {
      try {
        const uri = await viewShotRef.current.capture();
        console.log('Captured image URI:', uri);
        navigation.navigate('ImagePreview', {
          imageUri: uri,
          age: age,
          name: name,
        });
        
      } catch (error) {
        console.error('Error capturing image:', error);
      }
    }
  };

  return (
    <View style={styles.fullScreen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleClearButtonClick} style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={captureDrawing} style={styles.captureButton}>
          <Text style={styles.captureButtonText}>Preview</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <ViewShot ref={viewShotRef} options={{ format: 'png', quality: 1 }}>
          <View
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={styles.svgContainer}
          >
            <Svg style={{ flex: 1 }}>
              {path.map((p, index) => (
                <Path
                  key={`path-${index}`}
                  d={p.join(' ')}
                  stroke="black"
                  fill="transparent"
                  strokeWidth={2}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              ))}
              <Path
                d={currentPath.join(' ')}
                stroke={isClearButtonClicked ? 'transparent' : 'black'}
                fill="transparent"
                strokeWidth={2}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </Svg>
          </View>
        </ViewShot>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgContainer: {
    height: height * 1,
    width: width * 1,
 
    backgroundColor: 'white',
 
  },
  header: {
    backgroundColor: '#0165FC',
    width: '100%',
    height: 200,
    paddingHorizontal: 50,
    paddingTop: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius:8, 
   
    
   
  },
  clearButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight:'bold'
  },
  captureButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight:'bold'
  },
});
