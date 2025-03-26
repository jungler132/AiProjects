import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from './store/store';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: 'Mini Apps',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="dental"
          options={{
            title: 'Стоматология',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="app2"
          options={{
            title: 'Недвижимость',
            headerShown: false,
          }}
        />
      </Stack>
    </Provider>
  );
} 