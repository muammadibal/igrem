import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Avatar1, Avatar2 } from '../../assets'
import { FeedPost, Header, Story } from '../../components'
const Home = () => {
    return (
      <View>
        <Header type="home" title="instagram" />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.story}>
          <Story isMe avatar={Avatar1} />
          <Story avatar={Avatar2} name="ibal" />
          <Story avatar={Avatar2} name="ibal" />
          <Story avatar={Avatar2} name="ibal" />
          <Story avatar={Avatar2} name="ibal" />
          <Story avatar={Avatar2} name="ibal" />
          <Story avatar={Avatar2} name="ibal" />
          <Story avatar={Avatar2} name="ibal" />
        </ScrollView>
        
        <FeedPost/>
        <Text>Home</Text>
      </View>
    );
}

export default Home

const styles = StyleSheet.create({
    story: {
        backgroundColor: 'white'
    }
})
