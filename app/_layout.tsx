import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

import '../global.css'

const AppRoutes = () => {
  return (
    <>
      <StatusBar style='auto' />
      <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />

        <Stack.Screen name='onboarding' options={{ headerShown: false }} />
        <Stack.Screen name='+not-found' />
      </Stack>
    </>
  )
}
export default function Layout () {
  const [loaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Regular.ttf')
  })

  if (!loaded) {
    return null
  }

  return <AppRoutes />
}
