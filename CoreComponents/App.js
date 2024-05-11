import { useState } from 'react'
import { View, Button, Text, Modal } from 'react-native'
// const logoImg = require('./assets/adaptive-icon.png')

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title="Press"
        onPress={() => setIsModalVisible(true)}
        color="midnightblue"
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
          <Text>Modal content</Text>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
      {/* <Pressable onPress={() => console.log('Image pressed out')}>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </Pressable>
      <Pressable onPress={() => console.log('Text pressed')}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac
          habitasse platea dictumst quisque sagittis purus sit amet. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Et
          netus et malesuada fames ac turpis egestas sed. Non blandit massa enim
          nec dui nunc. Cursus sit amet dictum sit amet justo donec. Dignissim
          diam quis enim lobortis scelerisque fermentum dui faucibus. Amet justo
          donec enim diam. Habitasse platea dictumst quisque sagittis. Vel risus
          commodo viverra maecenas. Pharetra diam sit amet nisl suscipit
          adipiscing bibendum est. Bibendum at varius vel pharetra vel turpis
          nunc eget. Arcu odio ut sem nulla pharetra diam sit. Orci a
          scelerisque purus semper eget duis.
        </Text>
      </Pressable> */}
    </View>
  )
}
