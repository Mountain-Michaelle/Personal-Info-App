import { useMemo, useState } from 'react';
import { SafeAreaView, StatusBar, Switch, Text, View } from 'react-native';

export default function HomeScreen() {


  const [isDark, setIsDark] = useState(false)

  const theme = useMemo(
    () => 
      isDark ? {
      name:'dark',
      bg:'red',
      switchTrackOn: 'white',
      switchTrackOff: 'black',
      switchThumb:'cyan',
    }
    : 
    {
    name: 'light',
    switchTrackOn: 'green',
    switchTrackOff: 'gray',
    switchThumb: 'grey',
    },

    [isDark]
  )
  return (
    <SafeAreaView>

      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      
      <View>
        <View>
          <Text>
            Personal Info
          </Text>
        </View>

        <View>
          <Text>
            {isDark ? 'Dark':'Light'}
          </Text>

          <Switch 
          value={isDark}   
          onValueChange={setIsDark}
          trackColor={{
            false: theme.switchTrackOff,
            true: theme.switchTrackOn,
          }}
          thumbColor={theme.switchThumb}
          />
        </View>
      

      </View>
      
    </SafeAreaView>
  );
}

