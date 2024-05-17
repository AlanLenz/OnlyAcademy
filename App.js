import 'react-native-reanimated';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./screens/Profile";
import CameraScreen from "./screens/Camera";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Perfil" }}
        />
        <Stack.Screen
          name="TelaCamera"
          component={CameraScreen}
          options={{ title: "Câmera" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
