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

import { View, Alert, Button } from 'react-native'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button title="Alert" onPress={() => Alert.alert('Invalid data!')} />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert('Invalid data!', 'DOB incorrect')}
      />
      <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert('Invalid data!', 'DOB incorrect', [
            { text: 'Cancel', onPress: () => console.log('Cancel pressed') },
            {
              text: 'OK',
              onPress: () => console.log('OK pressed'),
            },
            {
              text: 'Teehee',
              onPress: () => console.log('teehee pressed'),
            },
          ])
        }
      />
    </View>
  )
}
