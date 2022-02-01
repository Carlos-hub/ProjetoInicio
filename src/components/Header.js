import React from 'react';
import { View, Text , Image, Button, Alert, TextInput, SafeAreaView, StatusBar ,StyleSheet} from 'react-native';
import styles from '../styles/style';

        const Header = () => {   
            return(     
            <View style={styles.headerStyle}>
                <View>
                <Image style={{flex:2,flexDirection:'row',marginLeft:10, width:50,height:50}}
                source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
                />
                </View>
                <View>
                <Button style={{marginLeft:90}}
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
                />
                </View>
            </View>
                );
            }

export default Header;

