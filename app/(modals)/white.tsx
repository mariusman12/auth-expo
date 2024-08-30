import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const white = (props: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'gray' }}>
      <Text>white</Text>
    </View>
  );
};

export default white;

const styles = StyleSheet.create({});
