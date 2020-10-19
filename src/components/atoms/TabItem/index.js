import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IcCircle,
  IcHeart,
  IcHeartActive,
  IcHome,
  IcHomeActive,
  IcSearch,
  IcSearchActive,
} from '../../../assets';
import Icons from 'react-native-vector-icons/Ionicons'

const TabItem = ({title, onPress, onLongPress, active}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <Icons name="home" size={25} /> : <Icons name="home-outline" size={25}/>
    }
    if (title === 'Search') {
      return active ? <Icons name="search" size={25} /> : <Icons name="search-outline" size={25}/>
    }
    if (title === 'Activity') {
      return active ? <Icons name="heart" size={25} /> : <Icons name="heart-outline" size={25}/>
    }
    if (title === 'Profile') {
      return active ? <Icons name="ellipse" size={25} /> : <Icons name="ellipse-outline" size={25}/>
    }
    return <Icons name="home" size={25} />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon/>
      {/* <Text style={styles.text(active)}>{title}</Text> */}
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  // text: (active) => ({
  //   fontSize: 10,
  //   color: active ? 'black' : 'blue',
  // }),
});
