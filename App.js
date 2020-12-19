import React, { Component ,componentDidMount} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


 class  CalculatorScreen extends Component {
   
  constructor(prop){
    super(prop);
    this.state={
      OriginalPrice:"",
      DiscountPercentage:"",
      YouSave:"You Save",
      FinalPrice:"Final Price",
      check:false,
      list:([])
    }
  }

  //  useList=() => {

  //   if (this.route.params?.returnList) {
  //     this.setState({list:this.route.params.returnList})
  //     this.navigation.setParams({ returnList: undefined });

  //   }
  // };

  calculation=()=>{
    if(this.state.OriginalPrice===0 || this.state.DiscountPercentage==="" ){
      alert("Problem")
      this.setState({
        check:false
      })
    }
    else if(this.state.OriginalPrice==0){
      alert("price cannot be less than 0")
      this.setState({
        check:false
      })

    }
    else if(this.state.DiscountPercentage>100){
      alert("Discount is never greater than 100")
      this.setState({
        check:false
      })

    }
    else if(this.state.DiscountPercentage<0){
      alert("Discount is never lesser than 0")
      this.setState({
        check:false
      })

    }
    else{
      const discount=this.state.OriginalPrice-(this.state.OriginalPrice*(this.state.DiscountPercentage/100));
    const saved=(this.state.OriginalPrice-this.state.OriginalPrice-(this.state.OriginalPrice*(this.state.DiscountPercentage/100)))
    this.setState({
      FinalPrice:discount.toFixed(2),
      YouSave:(Math.abs(saved).toFixed(2)),
      check:true
    })

  }}
  saveInfo=()=>{
    if(this.state.check==true){
      this.setState({
        list:[...this.state.list,
        {key: Math.random().toString(), OriginalPrice: this.state.OriginalPrice, DiscountP: this.state.DiscountPercentage , FP: this.state.FinalPrice }],
      })
      alert("Saved")
      this.setState({
        OriginalPrice:"",
        DiscountPercentage:"",
        YouSave:"You Save",
        FinalPrice:"Final Price",
      })


  
      
    }
    else{
      alert("empty fields")
    }
  }


  render() {
    const { navigation } = this.props;
    // this.useList();
  return (
    <View style={styles.container}>
      <Text style={{fontSize:22, fontWeight:"bold", marginBottom:45 }}>DISCOUNT CALCULATING APP</Text>
  
      <View >
        
      <TextInput value={this.state.OriginalPrice} style={styles.input} placeholder="Original price" placeholderTextColor="blue" keyboardType="number-pad"
      onChangeText={(OriginalPrice)=> this.setState({OriginalPrice})}/>

      <TextInput value={this.state.DiscountPercentage} style={styles.input} placeholder="Discount Percentage" placeholderTextColor="blue" keyboardType="number-pad"
       onChangeText={(DiscountPercentage)=> this.setState({DiscountPercentage})}/>

        </View>
<TouchableOpacity style={styles.btn1} onPress={()=>this.calculation()}><Text style={{fontSize:20, color:"#ffff"}}>Calculate</Text></TouchableOpacity>

        <View style={{flexDirection:"row" }}>
  <Text style={styles.output}>{this.state.FinalPrice}</Text>
  <Text style={styles.output}>{this.state.YouSave}</Text>
  </View>

  <TouchableOpacity style={styles.btn1} onPress={()=>this.saveInfo()}><Text style={{fontSize:20, color:"#ffff"}}>Save</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn1} onPress={()=>this.props.navigation.navigate("History",{list:this.state.list})}><Text style={{fontSize:20, color:"#ffff"}}>View History</Text></TouchableOpacity>
  
  </View>

  );
}

function(props) {
  const navigation = useNavigation();

  return (
    <StartScreen {...props} navigation={navigation} />);

}
}

class History extends React.Component {
  constructor(props){
    super(props);
    this.state={
      list:this.props.route.params.list,
    }
  }

   
  removeItem =(itemKey)=>{
   this.setState({
      list:this.state.list.filter((item) => item.key!=itemKey)
    })
  }


  render() {

    const { navigation } = this.props;

    return (
      <View >
        <ScrollView>
        {this.state.list.map((item, index) =>
          <View key={item.key} style={{flexDirection:"row" , marginRight:3, marginTop:20}} >
            <View style={{borderColor:"blue",borderWidth:2, alignSelf:"center", marginLeft:40}}>
            <Text style={{fontSize:30, fontWeight:"bold", padding:5}}>Original Price:  {item.OriginalPrice}</Text>
            <Text style={{fontSize:30, fontWeight:"bold", padding:5}}>Discount %:  {item.DiscountP }</Text>
            <Text style={{ fontSize:30, fontWeight:"bold", padding:5}}>Final Price :  {item.FP}</Text>
             <TouchableOpacity  
            style={styles.btn1} onPress={()=>this.removeItem(item.key)}>
              <Text style={{color:"#ffff", fontSize:18, fontWeight:"bold" }}>X</Text>
            </TouchableOpacity>
           
            </View>
          </View>)}
          
      </ScrollView>
      <TouchableOpacity style={styles.btn1}onPress={()=>this.props.navigation.navigate("CalculatorScreen",{returnList:this.state.list})}><Text style={{fontSize:20, color:"#ffff"}}>Back</Text></TouchableOpacity>

      </View>
    );
  }

}

const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="CalculatorScreen" component={CalculatorScreen} />
          <Stack.Screen name="History" component={History} />



        </Stack.Navigator>
      </NavigationContainer>);

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderBottomWidth:2,
    margin:7,
    borderRadius:9,
    height:30,
    width:200,
    textAlign:"center",
    fontSize:20,
    padding:4
   
    
  },
  btn1:{
    backgroundColor:"blue",
    padding:8,
    width:120,
    textAlign:"center",
    alignItems:"center",
    margin:10

  },
  output:{
    padding:10,
    borderColor:"black",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    fontSize:22,
    marginTop:40,
    borderWidth:1,
    color:"grey",
    margin:6,
    width:150,
   

  },


});