import { useState } from 'react'
import { View, StatusBar, Button } from 'react-native'

export default function App() {
  const [isStatusVisible, setIsStatusVisible] = useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title="Hide / Show StatusBar"
        onPress={() => setIsStatusVisible(!isStatusVisible)}
      />

      <StatusBar
        backgroundColor="lightgreen"
        barStyle="light-content"
        hidden={isStatusVisible}
      />
    </View>
  )
}
