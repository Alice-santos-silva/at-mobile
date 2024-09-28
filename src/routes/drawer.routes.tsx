import {createDrawerNavigator} from "@react-navigation/drawer"

import {Feather} from "@expo/vector-icons"

import Login from "../pages/Login"
import Register from "../pages/Register"
import Profile from "../pages/Profile"

const Drawer = createDrawerNavigator()

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="login" component={Login} options={{drawerIcon:() => <Feather name="log-in"/>}}/>
            <Drawer.Screen name="register" component={Register} options={{drawerIcon:() => <Feather name="log-in"/>}}/>
            <Drawer.Screen name="profile" component={Profile} options={{drawerIcon:() => <Feather name="log-in"/>}}/>
        </Drawer.Navigator>
    )
}