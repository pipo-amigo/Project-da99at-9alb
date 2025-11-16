import Page1 from '@/screens/page1';
import Page2 from '@/screens/page2';
import Page3 from '@/screens/page3';
import { useEffect, useState } from 'react';
import { View, Text ,TouchableOpacity} from 'react-native';

export default function Index() {
    const [Routes, setRoutes] = useState("Page1");
    
const warriElPage = () => {

    if (Routes === "Page1") {
        return <Page1 />;
    }

    if (Routes === "Page2") {
        return <Page2 />;
    }

    if (Routes === "Page3") {
        return <Page3 />;
    }

   
};


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       
     <TouchableOpacity 
     onPress={()=>setRoutes("Page1")} 
      style={{
          paddingVertical: 12,
          paddingHorizontal: 25,
          borderWidth: 1,
          borderRadius: 8,
          width: 200,
          alignItems: 'center',
          marginBottom:10
        }}>page1
        </TouchableOpacity>

         <TouchableOpacity  
         onPress={()=>setRoutes("Page2")} 
      style={{
          paddingVertical: 12,
          paddingHorizontal: 25,
          borderWidth: 1,
          borderRadius: 8,
          width: 200,
          alignItems: 'center',
          marginBottom:10
        }}>page2
        </TouchableOpacity>

         <TouchableOpacity  
         onPress={()=>setRoutes("Page3")} 
      style={{
          paddingVertical: 12,
          paddingHorizontal: 25,
          borderWidth: 1,
          borderRadius: 8,
          width: 200,
          alignItems: 'center',
          marginBottom:10
        }}>page3
        </TouchableOpacity>
         {warriElPage()}
    </View>
  );
}
