/**
 * Sample React Native Index
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import Config from '@/config';

const Index = () => {
  return (
    <SafeAreaView>
      <Text>{`Environment: ${Config.env.environment}`}</Text>
    </SafeAreaView>
  );
};

export default Index;
