import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

const Story = ({isMe, avatar, name}) => {
    if(isMe) {
        return (
          <View style={styles.wrapper}>
            <View style={styles.container}>
              <Image source={avatar} style={styles.imageStory} />
              <Icons
                name="add-circle-sharp"
                size={18}
                color="#3b5998"
                light
                style={styles.addStory}
              />
            </View>
            <Text style={styles.textStory}>Your Story</Text>
          </View>
        );
    }
    return (
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <Image source={avatar} style={styles.imageStory} />
          </View>
          <Text style={styles.textStory}>{name}</Text>
        </View>
    );
}

export default Story

const styles = StyleSheet.create({
    wrapper: {
        margin: 10,
        height: 70,
        width: 55,
        // backgroundColor: 'red',
    },
  container: {
    justifyContent: 'center',
  },
  imageStory: {
    height: 55,
    width: 55,
    borderRadius: 50,
  },
  addStory: {
    position: 'absolute',
    bottom: 0,
    right: -3,
  },
  textStory: {
    color: 'black',
    fontSize: 11,
    textAlign: 'center',
    marginVertical: 5,
  },
});
