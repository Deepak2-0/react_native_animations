import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import Animated, {
  useAnimatedRef,
  useDerivedValue,
  useSharedValue,
  scrollTo,
  useScrollViewOffset,
  useAnimatedProps,
} from 'react-native-reanimated';
import type {DerivedValue, SharedValue} from 'react-native-reanimated';

const ITEM_COUNT = 10;
const ITEM_SIZE = 100;
const ITEM_MARGIN = 10;

const ScrollToExample = () => {
  const animatedRef = useAnimatedRef<Animated.ScrollView>();
  const scroll = useSharedValue<number>(0);

  useDerivedValue(() => {
    // highlight-start
    scrollTo(
      animatedRef,
      0,
      scroll.value * (ITEM_SIZE + 2 * ITEM_MARGIN),
      true,
    );
    // highlight-end
  });

  const items = Array.from(Array(ITEM_COUNT).keys());

  return (
    <ScrollView>
      <View style={styles.container}>
        <Incrementor increment={-1} scroll={scroll} />
        <View style={styles.boxWrapper}>
          <Animated.ScrollView ref={animatedRef}>
            {items.map((_, i) => (
              <View key={i} style={styles.box}>
                <Text style={styles.textCenter}>{i}</Text>
              </View>
            ))}
          </Animated.ScrollView>
        </View>
        <Incrementor increment={1} scroll={scroll} />
      </View>
      <ScrollOffsetComponent />
    </ScrollView>
  );
};

export default ScrollToExample;

const Incrementor = ({
  increment,
  scroll,
}: {
  increment: number;
  scroll: SharedValue<number>;
}) => (
  <View style={styles.buttonWrapper}>
    <Button
      onPress={() => {
        scroll.value =
          scroll.value + increment > 0
            ? scroll.value + increment
            : ITEM_COUNT - 1 + increment;

        if (scroll.value >= ITEM_COUNT - 2) {
          return (scroll.value = 0);
        }
      }}
      title={`Scroll ${Math.abs(increment)} ${increment > 0 ? 'down' : 'up'}`}
    />
  </View>
);

const ScrollOffsetComponent = () => {
  const animatedRef = useAnimatedRef<Animated.ScrollView>();
  // highlight-start
  const offset = useScrollViewOffset(animatedRef);
  const text = useDerivedValue(
    () => `Scroll offset: ${offset.value.toFixed(1)}`,
  );
  // highlight-end
  const [isScrollHorizontal, setIsScrollHorizontal] =
    React.useState<boolean>(false);

  return (
    <View style={styles.container}>
      <AnimatedText text={text} />
      <Animated.ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        ref={animatedRef}
        horizontal={isScrollHorizontal}>
        {Array.from({length: 10}).map((_, i) => (
          <View key={i} style={styles.box}>
            <Text style={styles.center}>{i}</Text>
          </View>
        ))}
      </Animated.ScrollView>
      <Button
        title={`Toggle scroll to ${
          isScrollHorizontal ? 'vertical' : 'horizontal'
        }`}
        onPress={() => setIsScrollHorizontal(!isScrollHorizontal)}
      />
    </View>
  );
};

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
Animated.addWhitelistedNativeProps({text: true});

function AnimatedText({text, ...props}: {text: DerivedValue<string>}) {
  const animatedProps = useAnimatedProps(() => ({
    text: text.value,
    defaultValue: text.value,
  }));
  return (
    <AnimatedTextInput
      editable={false}
      {...props}
      value={text.value}
      animatedProps={animatedProps}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    margin: ITEM_MARGIN,
    borderRadius: 15,
    backgroundColor: '#b58df1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxWrapper: {
    width: '100%',
    height: 250,
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  scroll: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 250,
    width: 250,
    margin: 20,
  },
  scrollContent: {
    alignItems: 'center',
  },
  center: {
    textAlign: 'center',
  },
});
