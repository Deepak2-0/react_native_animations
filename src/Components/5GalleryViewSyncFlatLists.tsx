/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from 'react-native';
import {PEXELS_API_KEY} from '@env';

const {width, height} = Dimensions.get('screen');

const API_URL =
  'https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=small&per_page=20';

const IMAGE_SIZE = 50;
const SPACING = 10;

const fetchImagesFromPexels = async () => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    });

    const data = await response.json();
    console.log('data:::', data.photos);

    return data?.photos;
  } catch (error) {
    console.error('Error fetching images from Pexels: ', error);
  }
};

const GalleryViewSyncFlatLists = () => {
  const [images, setImages] = useState();
  const topGalleryRef = useRef(null);
  const bottomGalleryRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const getImages = async () => {
      const imagesFromPexels = await fetchImagesFromPexels();
      setImages(imagesFromPexels);
    };

    getImages();
  }, []);

  const scrollToActiveIndex = (index: number) => {
    setActiveIndex(index);
    topGalleryRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });

    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
      bottomGalleryRef?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      bottomGalleryRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  if (!images) {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <StatusBar hidden />
      <FlatList
        ref={topGalleryRef}
        data={images}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={event => {
          scrollToActiveIndex(
            Math.floor(event.nativeEvent.contentOffset.x) / width,
          );
        }}
        renderItem={({item}) => {
          return (
            <View style={{width, height}}>
              <Image
                source={{uri: item.src.portrait}}
                style={StyleSheet.absoluteFillObject}
              />
            </View>
          );
        }}
      />
      <FlatList
        ref={bottomGalleryRef}
        data={images}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{position: 'absolute', bottom: IMAGE_SIZE / 2}}
        contentContainerStyle={{padding: SPACING}}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
              <Image
                source={{uri: item.src.portrait}}
                style={{
                  width: IMAGE_SIZE,
                  height: IMAGE_SIZE,
                  borderRadius: 10,
                  marginLeft: index !== 0 ? SPACING : 0,
                  borderWidth: 2,
                  borderColor: activeIndex === index ? '#fff' : 'transparent',
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default GalleryViewSyncFlatLists;
