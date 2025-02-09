import React, { useState } from 'react';
import { Button, Vibration, View, StyleSheet} from 'react-native';
import { red } from 'react-native-reanimated/lib/typescript/Colors';

const ONE_SECOND_MS = 1000;

interface ButtonProps {
  startTitle: string;
  stopTitle: string
  pattern: number[]
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#191919',
    height: 100,
  },
  button:{
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  }
  
});

const VibrateButton: React.FC<ButtonProps> = ({startTitle="Vibrate", stopTitle="Cancel", pattern=[1*ONE_SECOND_MS, 2*ONE_SECOND_MS]}) => {
  const [isVibrating, setIsVibrating] = useState<boolean>(false);
  
  const startVibration = () => {
    Vibration.vibrate(pattern, true);
    setIsVibrating(true);
  };
  
  const stopVibration = () => {
    Vibration.cancel();
    setIsVibrating(false);
  };
  
  
  return (
    <View style = {styles.container}>
      Hi
        <View style = {styles.button}>
        {isVibrating ? (
          <Button title={stopTitle} onPress={stopVibration}/>
        ) : (
          <Button title={startTitle} onPress={startVibration}/>
        )}
        </View>
    </View>
    
  );
};

export default VibrateButton;