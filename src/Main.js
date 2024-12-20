import React from 'react';
import {Provider} from 'react-redux';
import {store, sagaMiddleware} from 'app-redux/store/store';
import Navigation from 'navigation/index';
import sagas from 'app-redux/sagas/index';
import axios from 'axios';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Settings} from 'react-native-fbsdk-next';
import RealtimeVideoChat from 'components/screens/User/Home/RealTimeVideo.component';

GoogleSignin.configure({
  webClient:
    '1057553385734-enjolc0737atqati641v1u32ong78hhr.apps.googleusercontent.com',
});

// axios.defaults.baseURL = 'http://192.168.149.22:8080';
axios.defaults.baseURL = 'http://192.168.1.11:8080';

sagaMiddleware.run(sagas);

export default function App() {
  React.useEffect(() => {
    Settings.setAdvertiserTrackingEnabled(true);
  }, []);
  return (
    <Provider store={store}>
      <RealtimeVideoChat />
      <Navigation />
    </Provider>
  );
}
