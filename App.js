/*
 * @Project Bluezone
 * @Author Bluezone Global (contact@bluezone.ai)
 * @Createdate 04/26/2020, 16:36
 *
 * This file is part of Bluezone (https://bluezone.ai)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import {useState, useEffect} from 'react';
import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import analytics from '@react-native-firebase/analytics';

// Navigate
import AuthLoading from './app/main/components/AuthLoadingScreen';
import Home from './app/main/components/MainScreen';
import decorateMainAppStart from './app/main/decorateMainAppStart';
import WatchScan from './app/main/components/WatchScanScreen';
import HistoryScan from './app/main/components/HistoryScanScreen';
import Invite from './app/main/components/InviteScreen';
import Register from './app/main/components/RegisterScreen';
import VerifyOTP from './app/main/components/VerifyOTPScreen';

import {registerAppWithFCM} from './app/CloudMessaging';

const Stack = createStackNavigator();
// const prefix = 'mic.bluezone://';

// Gets the current screen from navigation state
const getActiveRouteName = state => {
  const route = state.routes[state.index];

  if (route.state) {
    // Dive into nested navigators
    return getActiveRouteName(route.state);
  }

  return route.name;
};

export default function App() {
  const [loading, setLoading] = useState(false);
  const [initialRoute /* , setInitialRoute*/] = useState('AuthLoading');

  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();

  React.useEffect(() => {
    const state = navigationRef.current.getRootState();

    // Save the initial route name
    routeNameRef.current = getActiveRouteName(state);
  }, []);

  const setAuthLoading = () => {
    setLoading(true);
    // TODO admin: xem thêm lỗi render lần nữa
    // setInitialRoute('Home');
  };

  registerAppWithFCM();

  useEffect(() => {}, []);

  return (
    <NavigationContainer
        ref={navigationRef}
        onStateChange={state => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = getActiveRouteName(state);

          if (previousRouteName !== currentRouteName) {
            analytics().setCurrentScreen(currentRouteName, currentRouteName);
            alert(`The route changed to ${currentRouteName}`);
          }
        }}
    >
      <Stack.Navigator
        headerMode="none"
        mode="card"
        initialRoute={initialRoute}>
        {!loading ? (
          <Stack.Screen
            name="AuthLoading"
            component={() => <AuthLoading setLoading={setAuthLoading} />}
          />
        ) : (
          <>
            <Stack.Screen name="Home" component={decorateMainAppStart(Home)} />
            <Stack.Screen name="WatchScan" component={WatchScan} />
            <Stack.Screen name="HistoryScan" component={HistoryScan} />
            <Stack.Screen name="Invite" component={Invite} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
