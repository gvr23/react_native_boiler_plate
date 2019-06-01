import React, { PureComponent } from 'react';
import { View, Text, SafeAreaView, Dimensions} from "react-native";
import { connect } from 'react-redux'
import { containerStyles } from "../../assets/values/styles";

const { width, height } = Dimensions.get('window');

class Login extends PureComponent {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <SafeAreaView stylr={{ flex: 1 }}>
                <View style={containerStyles.container}><Text>hey login</Text></View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, {})(Login);