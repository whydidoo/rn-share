import React, { useMemo } from 'react';
import { ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = ViewProps;

const padding = 24;

export const SafeArea: React.FC<Props> = ({ children, style, ...props }) => {
  const listStyle = useMemo(
    () => [
      {
        paddingHorizontal: padding,
        flex: 1,
        backgroundColor: '#181A20',
      },
      style,
    ],
    [style],
  );

  return (
    <SafeAreaView style={listStyle} {...props}>
      {children}
    </SafeAreaView>
  );
};
