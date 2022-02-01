import React from 'react';
import { View, Text , Image, Button, Alert, TextInput, SafeAreaView, StatusBar ,StyleSheet} from 'react-native';
// import styles from './styles/style.js';

const  Body =  (props) => {
        return(
            <View>
                <Button title={props.titulo}></Button>
            </View>
        );
    }
export default Body;







// exportar como função maneira mais organizada
// const  Body =  (props) => {
//     return(
//         <View>
//             <Button title={props.titulo}></Button>
//         </View>
//     );
// }
// export default Body;