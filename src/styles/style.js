import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    headerStyle:{
      backgroundColor:'#00B4D8',
      fontSize:25,
      textAlign:'center',
      height:100,
      textAlignVertical:'center',
      borderRadius:20
    },
    btnStyleContent:{
      top:-3,
      position:'relative',
      fontSize:40,
      color:'#90E0EF',
      textAlign:'center'
    },
    btnButton:{
      position:'absolute',
      right:10,
      bottom:10,
      width:50,
      height:50,
      borderRadius:25,
      backgroundColor: '#48CAE4'
    },
    saveBtn:{
      position:'absolute',
      right:10,
      bottom:10,
      width:100,
      height:40,
      borderRadius:15,
      backgroundColor: '#48CAE4'
    },
    saveTextBtn:{
      position:'relative',
      textAlign:'center',
      textAlignVertical:'center',
      alignItems:'center',
      top:9
    },
    updateNota:{
      margin:20,
      height: 'auto',
      backgroundColor: '#CAF0F8'
    }
  });

export default styles;