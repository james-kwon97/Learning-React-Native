// import { useState } from 'react'
// import { View, StatusBar, Button } from 'react-native'

// export default function App() {
//   const [isStatusVisible, setIsStatusVisible] = useState(false)
//   return (
//     <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
//       <Button
//         title="Hide / Show StatusBar"
//         onPress={() => setIsStatusVisible(!isStatusVisible)}
//       />

//       <StatusBar
//         backgroundColor="lightgreen"
//         barStyle="light-content"
//         hidden={isStatusVisible}
//       />
//     </View>
//   )
// }

import { View, ActivityIndicator } from 'react-native'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <ActivityIndicator />
      <ActivityIndicator size="small" />
      <ActivityIndicator size="large" color="midnightblue" animating={false} />
    </View>
  )
}
