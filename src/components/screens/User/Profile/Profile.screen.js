import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {ProfileScreens} from 'constants/screens/screens.selector';
import {COLORS, SCREEN_SIZE, APP_STYLES} from 'theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile(props) {
  const {navigation, logout} = props;
  const renderStats = ({item}) => {
    return (
      <View style={styles.statsItem}>
        <Text style={styles.statsValueText}>{item.value}</Text>
        <Text style={styles.statsLabelText}>{item.label}</Text>
      </View>
    );
  };

  const renderOptions = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.optionItem}
        onPress={() => navigation.navigate(item.name)}>
        <View style={APP_STYLES.ROW}>
          <Ionicons name={item.icon} size={40} color={item.color} />
          <Text style={styles.optionText}>{item.label}</Text>
        </View>
        <View>
          <Ionicons name="chevron-forward" size={24} color={COLORS.GRAY} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Ionicons name="log-out-outline" size={36} color="white" />
        </TouchableOpacity>
        <View style={styles.userInfoContainer}>
          <Animatable.Image
            source={require('assets/dummy.png')}
            style={styles.userImage}
            animation="slideInDown"
          />
          <Animatable.Text animation="slideInRight" style={styles.userNameText}>
            FirstName LastName
          </Animatable.Text>
        </View>
        <Animatable.View
          animation="slideInUp"
          style={styles.statisticsContainer}>
          <FlatList
            renderItem={renderStats}
            data={dummyStats}
            scrollEnabled={false}
            horizontal
            contentContainerStyle={styles.statsRenderContainer}
            ItemSeparatorComponent={() => (
              <View style={styles.statsSeparator} />
            )}
          />
        </Animatable.View>
      </View>
      <Animatable.View style={styles.body} animation="slideInLeft">
        <FlatList
          renderItem={renderOptions}
          contentContainerStyle={styles.optionsContainer}
          data={ProfileScreens}
          ItemSeparatorComponent={() => <View style={styles.bottomSeparator} />}
        />
      </Animatable.View>
    </View>
  );
}

const dummyStats = [
  {
    label: 'Likes',
    value: 24,
  },
  {
    label: 'Reports',
    value: 14,
  },
  {
    label: 'Favorite',
    value: 24,
  },
  {
    label: 'Dislikes',
    value: 24,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1.7,
    backgroundColor: COLORS.DARK_BLUE,
    borderBottomEndRadius: 100,
    borderBottomStartRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 3,
    backgroundColor: 'transparent',
  },
  statisticsContainer: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: SCREEN_SIZE.WIDTH * 0.9,
    alignSelf: 'center',
    height: 100,
    flex: 1,
    position: 'absolute',
    bottom: -15,
    ...APP_STYLES.LIGHT_SHADOW,
  },
  userInfoContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  userImage: {
    height: 100,
    width: 100,
    borderRadius: 300,
    borderWidth: 2,
    borderColor: 'white',
    alignSelf: 'center',
  },
  userNameText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  statsRenderContainer: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  statsLabelText: {
    fontSize: 14,
    color: COLORS.GRAY,
    marginVertical: 5,
    fontWeight: '500',
    textAlign: 'center',
  },
  statsValueText: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  logoutButton: {
    position: 'absolute',
    right: 30,
    top: 50,
  },
  statsSeparator: {
    borderRightWidth: 1,
    width: SCREEN_SIZE.WIDTH * 0.05,
    marginVertical: 35,
    borderColor: COLORS.GRAY,
  },
  optionsContainer: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: SCREEN_SIZE.WIDTH * 0.9,
    alignSelf: 'center',
    marginVertical: 40,
    padding: 15,
    ...APP_STYLES.LIGHT_SHADOW,
  },
  statsItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: SCREEN_SIZE.WIDTH * 0.15,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 10,
  },
  bottomSeparator: {
    marginVertical: 10,
    height: 2,
    borderRadius: 10,
    backgroundColor: COLORS.LIGHT_GRAY,
    width: SCREEN_SIZE.WIDTH * 0.7,
    alignSelf: 'center',
    borderColor: COLORS.LIGHT_GRAY,
    marginHorizontal: 15,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});