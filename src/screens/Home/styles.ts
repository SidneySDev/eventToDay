import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: '#708090',
    padding: 24,
    
    },

    eventName:{
      fontWeight:'bold',
      marginTop:48,
      fontSize:29,
      color:'white',

  },
  input:{
    flex: 1,
    height: 56,
    backgroundColor: 'white',
    borderRadius: 5,
    color: 'black',
    padding: 22,
    fontSize: 14,
    marginRight: 12,
    marginTop:30,
    
  },
  buttonText:{
    color: '#fff',
    fontSize:24,
    fontWeight:"bold",
  },
  button:{
    width:56,
    height:56,
    borderRadius:5,
    backgroundColor:'#31CF67',
    alignItems:'center',
    justifyContent:"center",
    marginTop:30,
  },
  form:{
    widht:'100%',
    flexDirection:'row',
    marginBottom:42,
    marginTop:40
    
  
  },
  eventDate:{
    color:'white',
    fontSize:16,
  },
  listEmptyText:{
    color:'white',
    fontSize: 14,
    textAlign:'justify',
    fontWeight:'bold'
    
  }
  });