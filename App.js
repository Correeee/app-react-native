import { Text, View, Button, TextInput } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container__div}>
        <TextInput placeholder='Input' style={styles.container__div_input}></TextInput>
        <Button title='Add' color={'#e63946'} />
      </View>
      <View style={styles.listcontainer}>
        <View style={styles.itemcontainer}>
          <Text style={styles.item}>ITEM 1</Text>
        </View>
        <View style={styles.itemcontainer}>
          <Text style={styles.item}>ITEM 2</Text>
        </View>
        <View style={styles.itemcontainer}>
          <Text style={styles.item}>ITEM 3</Text>
        </View>
      </View>
    </View>
  );
}


