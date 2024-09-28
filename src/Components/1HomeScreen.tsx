/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import {SCREEN_NAMES} from '../utils/constants';
import HorizontalRule from '../commonComponent/HorizontalRule';

const Home = ({navigation}: any) => {
  return (
    <ScrollView style={styles.container}>
      <Text>Home Screen</Text>
      <HorizontalRule />
      <Button
        title={`Go To 2. ${SCREEN_NAMES.DynamicSizeItemScroll} Screen`}
        onPress={() => navigation.navigate(SCREEN_NAMES.DynamicSizeItemScroll)}
      />
      <HorizontalRule />
      <Button
        title={`Go To 3. ${SCREEN_NAMES.DynamicSizeItemScrollUsingMoti} Screen`}
        onPress={() =>
          navigation.navigate(SCREEN_NAMES.DynamicSizeItemScrollUsingMoti)
        }
      />
      <Text>Using Moti For some extra touch of animation</Text>
      <HorizontalRule />
      <Button
        title={`Go To 4. ${SCREEN_NAMES.PhoneRingIndicatorWave} Screen`}
        onPress={() => navigation.navigate(SCREEN_NAMES.PhoneRingIndicatorWave)}
      />
      <HorizontalRule />
      <Button
        title={`Go To 5. ${SCREEN_NAMES.GalleryViewSyncFlatLists} Screen`}
        onPress={() =>
          navigation.navigate(SCREEN_NAMES.GalleryViewSyncFlatLists)
        }
      />
      <HorizontalRule />
      <Button
        title={`Go To 6. ${SCREEN_NAMES.ScrollItemAnimationEffect} Screen`}
        onPress={() =>
          navigation.navigate(SCREEN_NAMES.ScrollItemAnimationEffect)
        }
      />
      <HorizontalRule />
      <Button
        title={`Go To 7. ${SCREEN_NAMES.CarouselAnimation} Screen`}
        onPress={() => navigation.navigate(SCREEN_NAMES.CarouselAnimation)}
      />
      <HorizontalRule />
      <Button
        title={`Go To 8. ${SCREEN_NAMES.ThreeDCarouselAnimation} Screen`}
        onPress={() =>
          navigation.navigate(SCREEN_NAMES.ThreeDCarouselAnimation)
        }
      />
      <HorizontalRule />
      <Button
        title={`Go To 9. ${SCREEN_NAMES.FirstReanimatedAnimation} Screen`}
        onPress={() =>
          navigation.navigate(SCREEN_NAMES.FirstReanimatedAnimation)
        }
      />
      <HorizontalRule />
      <Button
        title={`Go To 10. ${SCREEN_NAMES.AnimatingStyleAndProps} Screen`}
        onPress={() => navigation.navigate(SCREEN_NAMES.AnimatingStyleAndProps)}
      />
      <HorizontalRule />
      <Button
        title={`Go To 11. ${SCREEN_NAMES.ApplyingModifiers} Screen`}
        onPress={() => navigation.navigate(SCREEN_NAMES.ApplyingModifiers)}
      />
      <HorizontalRule />
      <Button
        title={`Go To 12. ${SCREEN_NAMES.HandlingGestures} Screen`}
        onPress={() => navigation.navigate(SCREEN_NAMES.HandlingGestures)}
      />
      <HorizontalRule />
      <Button
        title={`Go To 13. ${SCREEN_NAMES.WithTimingExample} Screen`}
        onPress={() => navigation.navigate(SCREEN_NAMES.WithTimingExample)}
      />
      <HorizontalRule />
      <Button
        title={`Go To 14. ${SCREEN_NAMES.WithSpringExample} Screen`}
        onPress={() => navigation.navigate(SCREEN_NAMES.WithSpringExample)}
      />
      <HorizontalRule />
      <Button
        title={`Go To 14. ${SCREEN_NAMES.WithDecayExample} Screen`}
        onPress={() => navigation.navigate(SCREEN_NAMES.WithDecayExample)}
      />
      <HorizontalRule />
      <Button
        title={`Go To 17. ${SCREEN_NAMES.WithDecayExample} Screen`}
        onPress={() => navigation.navigate(SCREEN_NAMES.WithDelayExample)}
      />
      <HorizontalRule />
      <Button
        title={`Go To 18. ${SCREEN_NAMES.WithDerivedValueExample} Screen`}
        onPress={() =>
          navigation.navigate(SCREEN_NAMES.WithDerivedValueExample)
        }
      />
      <HorizontalRule />
      <Button
        title={`Go To 19. ${SCREEN_NAMES.CancelAnimationExample} Screen`}
        onPress={() => navigation.navigate(SCREEN_NAMES.CancelAnimationExample)}
      />
      <HorizontalRule />
      <Button
        title={`Go To 20. ${SCREEN_NAMES.ScrollToExample} Screen`}
        onPress={() => navigation.navigate(SCREEN_NAMES.ScrollToExample)}
      />
      <HorizontalRule />
      <Button
        title={`Go To 21. ${SCREEN_NAMES.AnimatedKeyboardExample} Screen`}
        onPress={() =>
          navigation.navigate(SCREEN_NAMES.AnimatedKeyboardExample)
        }
      />
      <HorizontalRule />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default Home;
