import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width/541; //541


export default function App() {
  return (
    <View style={styles.container}>

      <Image source={require("./assets/pngegg.png")} style={styles.road}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  road: {
    flex: 1,
    alignSelf: 'stretch',
    width: win.width,
    height: win.height,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
