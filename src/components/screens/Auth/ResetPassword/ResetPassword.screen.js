import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS, SCREEN_SIZE} from 'theme/theme';

export default function ResetPassword(props) {
  const {navigation} = props;
  return (
    <View style={{height: SCREEN_SIZE.HEIGHT}}>
      <View style={styles.container}>
        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flex: 3,
          }}>
          <Text style={styles.welcomeText}>Reset password</Text>
        </View>
        <View style={{marginTop: 20, flex: 4}}>
          <Text style={styles.topInputText}>Email address</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="you@your-domain.com"
              placeholderTextColor="#000000"
              //   value={this.state.email}
              onChangeText={val => {
                // this.setState({email: val});
              }}
            />
          </View>
          <Text style={styles.authText}>
            Please follow the instructions received in the email!
          </Text>
        </View>

        <View style={[styles.bntView, {flex: 2}]}>
          <TouchableOpacity
            style={[styles.btn, styles.shadow]}
            onPress={() => {}}>
            <Text style={styles.btnText}>Recover</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{paddingTop: 25}}
            onPress={() => navigation.goBack()}>
            <Text style={styles.forgotPassText}>I remembered my password</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            marginTop: 30,
            flex: 1,
          }}>
          <Text>or connect with</Text>
        </View>
        <View style={[styles.socialMediaView, {flex: 5}]}>
          <TouchableOpacity
            style={[
              styles.socialMediaButton,
              {backgroundColor: '#2596be'},
              styles.shadow,
            ]}>
            <FontAwesome
              name="facebook"
              size={SCREEN_SIZE.WIDTH * 0.1}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.socialMediaButton,
              {backgroundColor: '#DD2C00'},
              styles.shadow,
            ]}
            onPress={() => {}}>
            <FontAwesome
              name="google"
              size={SCREEN_SIZE.WIDTH * 0.1}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: SCREEN_SIZE.HEIGHT,
  },
  welcomeText: {
    fontSize: SCREEN_SIZE.WIDTH * 0.055,
    textAlign: 'center',
  },
  authText: {
    color: COLORS.GRAY,
    fontSize: 14,
    marginTop: 10,
    width: SCREEN_SIZE.WIDTH * 0.8,
  },
  bntView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_SIZE.WIDTH * 0.8,
    height: SCREEN_SIZE.HEIGHT * 0.06,
    backgroundColor: COLORS.PURPLE,
    borderRadius: 20,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: Platform.OS === 'ios' ? 18 : 16,
  },
  socialMediaView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialMediaButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_SIZE.WIDTH * 0.2,
    height: SCREEN_SIZE.WIDTH * 0.2,
    borderRadius: SCREEN_SIZE.WIDTH * 0.2,
    marginHorizontal: 20,
  },
  textInput: {
    paddingLeft: 20,
    width: SCREEN_SIZE.WIDTH * 0.8,
    height: SCREEN_SIZE.HEIGHT * 0.065,
    borderRadius: 10,
    backgroundColor: '#CFD8DC',
    opacity: 0.3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    height: SCREEN_SIZE.HEIGHT * 0.065,
  },
  topInputText: {
    // fontFamily: "Roboto-Light",
    marginLeft: 10,
    marginBottom: 5,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  forgotPassText: {
    color: COLORS.PURPLE,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
