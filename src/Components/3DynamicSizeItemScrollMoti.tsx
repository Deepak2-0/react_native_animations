/* eslint-disable react-native/no-inline-styles */
// import {Entypo, Feather} from '@expo/vector-icons';
import {faker} from '@faker-js/faker';
import {MotiView} from 'moti';
import React, {useState, useRef, useEffect} from 'react';
import {Dimensions, FlatList, Text, TouchableOpacity, View} from 'react-native';

const {width, height} = Dimensions.get('screen');

faker.seed(10);

const data = [...Array(20).keys()].map(() => ({
  key: faker.string.uuid(),
  job: faker.animal.crocodilia(),
}));

const _colors = {
  active: '#FCD259ff',
  inactive: '#FCD25900',
};
const _spacing = 10;

enum Position {
  AlignLeft = 0,
  AlignMiddle = 0.5,
  AlignRight = 1,
}

export default function DynamicSizeItemScrollMoti() {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<FlatList>(null);
  const [viewPostion, setViewPosition] = useState(Position.AlignLeft);

  useEffect(() => {
    scrollRef.current?.scrollToIndex({
      animated: true,
      index,
      viewOffset: viewPostion === Position.AlignLeft ? _spacing : 0,
      viewPosition: viewPostion, // percentage from viewside starting from left size
    });
  }, [index, viewPostion]);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        ref={scrollRef}
        initialScrollIndex={index}
        style={{flexGrow: 0}}
        data={data}
        keyExtractor={item => item.key}
        contentContainerStyle={{paddingLeft: _spacing}}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item, index: fIndex}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setIndex(fIndex);
              }}>
              <MotiView
                animate={{
                  backgroundColor:
                    fIndex === index ? _colors.active : _colors.inactive,
                  opacity: fIndex === index ? 1 : 0.6,
                }}
                transition={{duration: 500}}
                style={{
                  marginRight: _spacing,
                  padding: _spacing,
                  borderWidth: 2,
                  borderColor: _colors.active,
                  borderRadius: 12,
                }}>
                <Text style={{color: '#36303F', fontWeight: '700'}}>
                  {item.job}
                </Text>
              </MotiView>
            </TouchableOpacity>
          );
        }}
      />
      <View
        style={{
          alignItems: 'center',
          // flexDirection: 'row',
          marginTop: _spacing * 10,
        }}>
        <Text
          style={{
            color: '#36303F',
            fontWeight: '700',
            marginBottom: _spacing,
          }}>
          Scroll position
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: width / 2,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setViewPosition(Position.AlignLeft);
            }}>
            <View
              style={{
                padding: _spacing,
                backgroundColor:
                  viewPostion === Position.AlignLeft ? '#FCD259' : '#ABC259',
                borderRadius: _spacing,
                marginRight: _spacing,
              }}>
              {/* <Entypo name="align-left" size={24} color="#36303F" /> */}
              <Text>align-left</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setViewPosition(Position.AlignMiddle);
            }}>
            <View
              style={{
                padding: _spacing,
                backgroundColor:
                  viewPostion === Position.AlignMiddle ? '#FCD259' : '#ABC259',
                borderRadius: _spacing,
                marginRight: _spacing,
              }}>
              {/* <Entypo
                  name="align-horizontal-middle"
                  size={24}
                  color="#36303F"
                /> */}
              <Text>align-horizontal-middle</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setViewPosition(Position.AlignRight);
            }}>
            <View
              style={{
                padding: _spacing,
                backgroundColor:
                  viewPostion === Position.AlignRight ? '#FCD259' : '#ABC259',
                borderRadius: _spacing,
              }}>
              {/* <Entypo name="align-right" size={24} color="#36303F" /> */}
              <Text>align-right</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          // flexDirection: 'row
          marginTop: _spacing * 10,
        }}>
        <Text style={{color: '#36303F', fontWeight: '700', marginBottom: 10}}>
          Navigation
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: width / 2,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              if (index > 0) setIndex(val => val - 1);
            }}>
            <View
              style={{
                padding: _spacing,
                backgroundColor: '#FCD259',
                borderRadius: _spacing,
                marginRight: _spacing,
              }}>
              {/* <Feather name="arrow-left" size={24} color="#36303F" /> */}
              <Text>arrow-left</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (data?.length > index + 1) setIndex(val => val + 1);
            }}>
            <View
              style={{
                padding: _spacing,
                backgroundColor: '#FCD259',
                borderRadius: _spacing,
              }}>
              {/* <Feather name="arrow-right" size={24} color="#36303F" /> */}
              <Text>arrow-right</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
