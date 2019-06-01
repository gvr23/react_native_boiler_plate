import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { login } from "../screens";

const AppNavigator = createSwitchNavigator({
    Login: { screen: login }
},
{
    headerMode: 'none',
    navigationOptions: () => {
        return {
            gesturesEnabled: false
        }
    }
});
const App = createAppContainer(AppNavigator);

export default App;