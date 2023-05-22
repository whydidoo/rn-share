import React from 'react';
import { SafeArea } from '../../components';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { usePinCode } from './usePinCode';
import { Sphere } from './Sphere';

const gap = 32;

export const Pincode: React.FC = () => {
  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'remove', '0', 'next'] as const;
  const { values, changeValue, removeValue } = usePinCode();

  return (
    <SafeArea style={style.safeArea}>
      <Text style={style.header}>You're welcome</Text>

      <View>
        <View style={style.wrapper}>
          {values.map((item, key) => {
            return <Sphere code={item} key={key} />;
          })}
        </View>
        <View style={style.wrapperButtons}>
          {buttons.map((item) => {
            if (item === 'remove') {
              return (
                <TouchableOpacity key={item} onPress={removeValue}>
                  <View style={[style.button]}>
                    <Text style={style.buttonText}>RM</Text>
                  </View>
                </TouchableOpacity>
              );
            }

            if (item === 'next') {
              return (
                <TouchableOpacity key={item}>
                  <View style={[style.button]}>
                    <Text style={style.buttonText}>NT</Text>
                  </View>
                </TouchableOpacity>
              );
            }

            return (
              <TouchableOpacity key={item} onPress={() => changeValue(item)}>
                <View style={[style.button]}>
                  <Text style={style.buttonText}>{item}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeArea>
  );
};

const style = StyleSheet.create({
  safeArea: { justifyContent: 'space-between', alignItems: 'center' },
  wrapper: { flexDirection: 'row', gap: 20, justifyContent: 'center', marginBottom: 20, alignItems: 'flex-end' },
  header: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 60,
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  wrapperButtons: { flexDirection: 'row', gap, justifyContent: 'center', flexWrap: 'wrap', width: 244, rowGap: 20 },
});
