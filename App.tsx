import Home from "./src/screens/Home";
import { StatusBar } from "expo-status-bar";

export default function App(){
  return(
    <>
    <StatusBar
      style="inverted"
      backgroundColor="transparent"
      translucent
      
    />
    
    <Home/>
    </>
  );
}