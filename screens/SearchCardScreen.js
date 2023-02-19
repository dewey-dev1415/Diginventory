import { useState } from 'react';
import { FlatList, View, SafeAreaView, StyleSheet, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import FastImage from 'react-native-fast-image';

const arr = Array.from(Array(115 + 1).keys()).slice(1);

const DATA = arr.map(id => ({ id: `BT1-${String(id).padStart(3, '0')}` }));

const Item = ({ id }) => (
  <FastImage
    style={{ width: 50, height: 100 }}
    source={{
      uri: `https://world.digimoncard.com/images/cardlist/card/${id}.png`,
    }}
    resizeMode={FastImage.resizeMode.contain}
  />
);

const SearchCardScreen = () => {
  const [cardName, setCardName] = useState('');

  const onChangeSearch = cardName => setCardName(cardName);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{ width: '100%' }}>
          <Searchbar
            placeholder="search card"
            value={cardName}
            onChangeText={onChangeSearch}
          />
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item id={item.id} />}
            keyExtractor={item => item.id}
            numColumns={6}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});
export default SearchCardScreen;
