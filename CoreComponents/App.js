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

import { View } from 'react-native'
import Greet from './components/Greet'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Greet name="Bruce Wayne" />
      <Greet name="Clark Kent" />
    </View>
  )
}
