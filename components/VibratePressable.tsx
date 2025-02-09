import React, { useState } from 'react';
import { Vibration, View, StyleSheet, Text } from 'react-native';
import { Pressable, PressableProps } from 'react-native-gesture-handler';

const DEFAULT = 1000;

type Props = PressableProps & {
    pattern: number
};

const VibratePressable: React.FC<Props> = ({ pattern = DEFAULT}) => {
    const [isVibrating, setIsVibrating] = useState<boolean>(false);
  
    const styles = StyleSheet.create({
        container:{
            width: 200,
            height: 200
        },
        button:{
            backgroundColor: '#0338FE',
            padding: 10,
            width: 200,
            height: 200,
            borderRadius: 100
        },
        text:{
            color: 'white',
            textAlign: 'center',
            margin: 'auto',
            fontSize: 45
        }
      });
      

    const startVibration = () => {
        Vibration.vibrate(pattern, true);
        console.log(pattern);
        setIsVibrating(true);
    };
      
    const stopVibration = () => {
        Vibration.cancel();
        console.log(pattern);
        setIsVibrating(false);
    };

    const longPress = () => {
        if(isVibrating){
            pattern+=500;
            Vibration.vibrate(pattern, true);
            console.log('long press');
            console.log(pattern);
        }else{
            startVibration();
        }
    }
    
    return(
        <View style={styles.container}>
            {isVibrating ? (
                <Pressable onPress={stopVibration} onLongPress={longPress} style={styles.button}>
                    <Text style={styles.text}>Stop</Text>
                </Pressable>
            ):(
                <Pressable onPress={startVibration} style={styles.button}>
                    <Text style={styles.text}>Start</Text>
                </Pressable>
            )}
        </View>
    )
}

export default VibratePressable;