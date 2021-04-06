import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_5_477}>
        <Text style={styles.Text_5_477}>Aero</Text>
      </View>
      <View style={styles.View_6_22}>
        <Text style={styles.Text_6_22}>Aero</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ffe/9322/b12d42bed5f1cb8c0397c852fb09e19d"
        }}
        style={styles.ImageBackground_6_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83be/2f3b/87944ab00f50f387481dc4c17cb67aec"
        }}
        style={styles.ImageBackground_6_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83be/2f3b/87944ab00f50f387481dc4c17cb67aec"
        }}
        style={styles.ImageBackground_26_297}
      />
      <View style={styles.View_10_2}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0b3/df59/80748cf4ae7408a65496670f0c0a602b"
          }}
          style={styles.ImageBackground_6_23}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83be/2f3b/87944ab00f50f387481dc4c17cb67aec"
          }}
          style={styles.ImageBackground_6_24}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_5_477: {
    width: wp("16.240373849868774%"),
    minWidth: wp("16.240373849868774%"),
    minHeight: 208.45584106445312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.33774757385254%"),
    top: 672
  },
  Text_5_477: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 133.76467895507812,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 18.344114685058592,
    textTransform: "none"
  },
  View_6_22: {
    width: wp("16.240373849868774%"),
    minWidth: wp("16.240373849868774%"),
    minHeight: 208.45584106445312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.46274757385254%"),
    top: 682
  },
  Text_6_22: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 133.76467895507812,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 18.344114685058592,
    textTransform: "none"
  },
  ImageBackground_6_11: {
    width: wp("7.328525781631471%"),
    minWidth: wp("7.328525781631471%"),
    height: 187.61026000976562,
    minHeight: 187.61026000976562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.968750000000002%"),
    top: 682.4229736328125
  },
  ImageBackground_6_2: {
    width: wp("5.35431981086731%"),
    height: 104.52168273925781,
    top: 724.2610473632812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.960742950439453%")
  },
  ImageBackground_26_297: {
    width: wp("5.35431981086731%"),
    height: 104.52168273925781,
    top: 724.2610473632812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.960742950439453%")
  },
  View_10_2: {
    width: wp("7.328525781631471%"),
    minWidth: wp("7.328525781631471%"),
    height: 187.61026000976562,
    minHeight: 187.61026000976562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.09375%"),
    top: 692.4229736328125
  },
  ImageBackground_6_23: {
    width: wp("7.328525781631471%"),
    minWidth: wp("7.328525781631471%"),
    height: 187.61026000976562,
    minHeight: 187.61026000976562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  ImageBackground_6_24: {
    width: wp("5.35431981086731%"),
    height: 104.52168273925781,
    top: 41.83807373046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9919929504394531%")
  },
  View_2: { height: 1440 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
