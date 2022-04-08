import React, {useState} from "react";
import{Button, Text, TouchableHighlight,TouchableOpacity,View} from "react-native";

const Cat = (props) =>{
const [isHungry,setIsHungry] = useState(true);
return(
  <View>
    <Text>
      I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
    </Text>
    <Button onPress={() =>{
      setIsHungry(false);
    }}
    disabled={!isHungry}
    title={isHungry ? "เทนมให้ฉันหน่อย,please!":"Thank you!"}
    color="#990033"/>
  </View>
);
}
const Cafe = () =>{
  return(
  <>
  <Cat name="MunKustrap"/>
  <Cat name="Spot"/>
  </>
  );
}
export default Cafe;