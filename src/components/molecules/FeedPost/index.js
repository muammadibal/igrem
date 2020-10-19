import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import Icons from 'react-native-vector-icons/Ionicons';
import { Avatar1, Avatar3 } from '../../../assets';

const FeedPost = () => {
  return (
    <View>
      <Swiper>
        <Image source={Avatar1} style={styles.image} />
        <Image source={Avatar3} style={styles.image} />
        <View></View>
      </Swiper>
      <View style={styles.footer}>
        <Icons style={styles.iconFooter} size={25} name="heart-outline" />
        <Icons style={styles.iconFooter} size={25} name="chatbubble-outline" />
        <Icons style={styles.iconFooter} size={25} name="paper-plane-outline" />
        <View style={{flex: 1}} />
        <Icons style={styles.iconFooter} size={25} name="bookmark-outline" />
      </View>
    </View>
  );
};

export default FeedPost;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 200
  },
    footer: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        backgroundColor: 'white'
    },
    iconFooter: {
      margin: 8,
    }
});
