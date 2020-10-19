import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import { Gap } from '../../atoms'

const Header = ({title, type}) => {
    if(type == 'home') {
        return (
            <View style={styles.home}>
                <Icons name="camera-outline" size={30}/>
                <Text style={styles.homeTitle}>{title}</Text>
                <Icons name="paper-plane-outline" size={25}/>
            </View>
        )
    }

    if (type == 'profile') {
      return (
        <View style={styles.profile}>
          <Icons name="add-outline" size={30} />
          <Text style={styles.profileTitle}>{title}</Text>
          <Icons name="menu-outline" size={25} />
        </View>
      );
    }

    if (type == 'search') {
      return (
        <>
          <View style={styles.search}>
            <Icons name="search-outline" size={28} />
            <Text style={styles.searchTitle}>{title}</Text>
            <Icons name="scan-outline" size={23} />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ backgroundColor: 'white', paddingBottom: 9 }}>
            <Gap width={8} />
            <Text
              style={{
                color: 'black',
                paddingVertical: 4,
                paddingHorizontal: 20,
                backgroundColor: 'silver',
                borderRadius: 4,
              }}>
              Halo
            </Text>
            <Gap width={8} />
            <Text
              style={{
                color: 'black',
                paddingVertical: 4,
                paddingHorizontal: 20,
                backgroundColor: 'silver',
                borderRadius: 4,
              }}>
              Halo
            </Text>
            <Gap width={8} />
            <Text
              style={{
                color: 'black',
                paddingVertical: 4,
                paddingHorizontal: 20,
                backgroundColor: 'silver',
                borderRadius: 4,
              }}>
              Halo
            </Text>
            <Gap width={8} />
            <Text
              style={{
                color: 'black',
                paddingVertical: 4,
                paddingHorizontal: 20,
                backgroundColor: 'silver',
                borderRadius: 4,
              }}>
              Halo
            </Text>
            <Gap width={8} />
            <Text
              style={{
                color: 'black',
                paddingVertical: 4,
                paddingHorizontal: 20,
                backgroundColor: 'silver',
                borderRadius: 4,
              }}>
              Halo
            </Text>
            <Gap width={8} />
            <Text
              style={{
                color: 'black',
                paddingVertical: 4,
                paddingHorizontal: 20,
                backgroundColor: 'silver',
                borderRadius: 4,
              }}>
              Halo
            </Text>
            <Gap width={8} />
            <Text
              style={{
                color: 'black',
                paddingVertical: 4,
                paddingHorizontal: 20,
                backgroundColor: 'silver',
                borderRadius: 4,
              }}>
              Halo
            </Text>
            <Gap width={8} />
          </ScrollView>
        </>
      );
    }

    return (
      <View style={styles.default}>
        <Text style={styles.defaultTitle}>{title}</Text>
      </View>
    );
}

export default Header

const styles = StyleSheet.create({
  default: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    elevation: 1,
  },
  defaultTitle: {
    marginLeft: 10,
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    flex: 1,
  },
  home: {
    paddingVertical: 9,
    paddingHorizontal: 12,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    elevation: 3,
  },
  homeTitle: {
    marginLeft: 10,
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    flex: 1,
  },
  profile: {
    paddingVertical: 9,
    paddingHorizontal: 12,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    elevation: 1,
  },
  profileTitle: {
    marginLeft: 10,
    fontSize: 18,
    flex: 1,
  },
  search: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  searchTitle: {
    marginLeft: 10,
    fontSize: 18,
    flex: 1,
  },
});
