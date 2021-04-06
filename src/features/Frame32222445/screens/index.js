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
      <View style={styles.View_26_3}>
        <Text style={styles.Text_26_3}>Flights</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0aec/d17c/e16692bef60fb5045882aff93a079560"
        }}
        style={styles.ImageBackground_26_4}
      />
      <View style={styles.View_26_5}>
        <Text style={styles.Text_26_5}>Destinations</Text>
      </View>
      <View style={styles.View_26_6}>
        <Text style={styles.Text_26_6}>Airports</Text>
      </View>
      <View style={styles.View_26_7}>
        <Text style={styles.Text_26_7}>Airlines</Text>
      </View>
      <View style={styles.View_26_8}>
        <Text style={styles.Text_26_8}>Sign In</Text>
      </View>
      <View style={styles.View_26_9} />
      <View style={styles.View_26_10}>
        <Text style={styles.Text_26_10}>Get Started</Text>
      </View>
      <View style={styles.View_26_11}>
        <View style={styles.View_26_12}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3784/fb6c/894c433213cfac27feacb54e0d9c8b2d"
            }}
            style={styles.ImageBackground_26_13}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d8f/b8ba/b67d748b5cfcde2d4e323420971265fe"
            }}
            style={styles.ImageBackground_26_14}
          />
        </View>
        <View style={styles.View_26_19}>
          <Text style={styles.Text_26_19}>Aero</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/231c/f233/c49f4c179087ca035297fb0cb33e822b"
        }}
        style={styles.ImageBackground_26_322}
      />
      <View style={styles.View_26_321} />
      <View style={styles.View_27_0} />
      <View style={styles.View_27_1} />
      <View style={styles.View_26_2125}>
        <Text style={styles.Text_26_2125}>12:00 EST</Text>
      </View>
      <View style={styles.View_26_2134}>
        <Text style={styles.Text_26_2134}>April 5th</Text>
      </View>
      <View style={styles.View_26_2126}>
        <Text style={styles.Text_26_2126}>18:00 EST</Text>
      </View>
      <View style={styles.View_26_2138}>
        <Text style={styles.Text_26_2138}>April 6th</Text>
      </View>
      <View style={styles.View_26_2132}>
        <Text style={styles.Text_26_2132}>Jet Blue</Text>
      </View>
      <View style={styles.View_26_240}>
        <Text style={styles.Text_26_240}>Flights &gt; Flight 1234567</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43d8/ae5b/8cdc873890d66be5ebf6441b527a07b6"
        }}
        style={styles.ImageBackground_26_293}
      />
      <View style={styles.View_26_241}>
        <View style={styles.View_26_242}>
          <View style={styles.View_26_243}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a93c/8ed7/4aabd75ebcf09fe54c5cd007b04bcac7"
              }}
              style={styles.ImageBackground_26_244}
            />
            <View source={{ uri: "null" }} style={styles.View_26_247} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b341/0f90/1cb526a966caa1b35009e3d65a2852bd"
          }}
          style={styles.ImageBackground_26_249}
        />
      </View>
      <View style={styles.View_26_313}>
        <View style={styles.View_I26_313_26_242}>
          <View style={styles.View_I26_313_26_243}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0006/2037/100c0fcec3d947b12be3554c3b7fc7be"
              }}
              style={styles.ImageBackground_I26_313_26_244}
            />
            <View source={{ uri: "null" }} style={styles.View_I26_313_26_247} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ab7/2c8c/a76812e3fa7ee6236e6179ee5a9b1695"
          }}
          style={styles.ImageBackground_I26_313_26_249}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf6f/b2ca/54464db976be265fe5e7f714f4766cf7"
        }}
        style={styles.ImageBackground_26_302}
      />
      <View style={styles.View_26_307}>
        <Text style={styles.Text_26_307}>NWK</Text>
      </View>
      <View style={styles.View_26_310}>
        <Text style={styles.Text_26_310}>Newark</Text>
      </View>
      <View style={styles.View_26_311}>
        <Text style={styles.Text_26_311}>London</Text>
      </View>
      <View style={styles.View_26_309}>
        <Text style={styles.Text_26_309}>LND</Text>
      </View>
      <View style={styles.View_26_2123}>
        <Text style={styles.Text_26_2123}>Departure</Text>
      </View>
      <View style={styles.View_26_2135}>
        <Text style={styles.Text_26_2135}>Monday</Text>
      </View>
      <View style={styles.View_26_2124}>
        <Text style={styles.Text_26_2124}>Arrival</Text>
      </View>
      <View style={styles.View_26_2139}>
        <Text style={styles.Text_26_2139}>Tuesday</Text>
      </View>
      <View style={styles.View_26_2130}>
        <Text style={styles.Text_26_2130}>1234653B</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5141/60bb/e99b9eaa5ea79a495ec7b6962be8dfa3"
        }}
        style={styles.ImageBackground_26_2140}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3df3/432d/14b5e6d13e5837e31461c3b54c3598f3"
        }}
        style={styles.ImageBackground_26_2141}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3df3/432d/14b5e6d13e5837e31461c3b54c3598f3"
        }}
        style={styles.ImageBackground_26_2142}
      />
      <View style={styles.View_28_11}>
        <View style={styles.View_28_9} />
        <View style={styles.View_28_10}>
          <Text style={styles.Text_28_10}>Buy Ticket</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_26_3: {
    width: wp("3.805037140846253%"),
    minWidth: wp("3.805037140846253%"),
    minHeight: 41.377254486083984,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.0234375%"),
    top: 86
  },
  Text_26_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22.451053619384766,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_26_4: {
    width: wp("3.3167800307273865%"),
    minWidth: wp("3.3167800307273865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.0234375%"),
    top: 129.53231811523438
  },
  View_26_5: {
    width: wp("8.014149069786072%"),
    minWidth: wp("8.014149069786072%"),
    minHeight: 41.377254486083984,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.78634262084961%"),
    top: 86
  },
  Text_26_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22.451053619384766,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_6: {
    width: wp("8.014149069786072%"),
    minWidth: wp("8.014149069786072%"),
    minHeight: 41.377254486083984,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.88153839111328%"),
    top: 86
  },
  Text_26_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22.451053619384766,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_7: {
    width: wp("8.014149069786072%"),
    minWidth: wp("8.014149069786072%"),
    minHeight: 41.377254486083984,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.95963287353516%"),
    top: 86
  },
  Text_26_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22.451053619384766,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_8: {
    width: wp("3.56932669878006%"),
    minWidth: wp("3.56932669878006%"),
    minHeight: 41.377254486083984,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.453125%"),
    top: 82
  },
  Text_26_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22.451053619384766,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_9: {
    width: wp("7.104980945587158%"),
    minWidth: wp("7.104980945587158%"),
    height: 56.89372253417969,
    minHeight: 56.89372253417969,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.01859664916992%"),
    top: 75,
    backgroundColor: "rgba(97, 55, 254, 1)",
    borderTopLeftRadius: 17.240522384643555,
    borderTopRightRadius: 17.240522384643555,
    borderBottomLeftRadius: 17.240522384643555,
    borderBottomRightRadius: 17.240522384643555
  },
  View_26_10: {
    width: wp("4.714205265045166%"),
    minWidth: wp("4.714205265045166%"),
    minHeight: 31.828655242919922,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.12979888916016%"),
    top: 89.25659942626953
  },
  Text_26_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.116195678710938,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_11: {
    width: wp("6.104089021682739%"),
    minWidth: wp("6.104089021682739%"),
    height: 57.35814666748047,
    minHeight: 57.35814666748047,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.849037170410158%"),
    top: 80.0157470703125
  },
  View_26_12: {
    width: wp("2.240552604198456%"),
    minWidth: wp("2.240552604198456%"),
    height: 57.35814666748047,
    minHeight: 57.35814666748047,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  ImageBackground_26_13: {
    width: wp("2.240552604198456%"),
    minWidth: wp("2.240552604198456%"),
    height: 57.35814666748047,
    minHeight: 57.35814666748047,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  ImageBackground_26_14: {
    width: wp("1.6369780898094175%"),
    height: 31.9554500579834,
    top: 12.791183471679688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.30328750610351385%")
  },
  View_26_19: {
    width: wp("3.4888613224029545%"),
    minWidth: wp("3.4888613224029545%"),
    minHeight: 44.78181838989258,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6152229309082013%"),
    top: 4.933135986328125
  },
  Text_26_19: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 28.825454711914062,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.9408000183105467,
    textTransform: "none"
  },
  ImageBackground_26_322: {
    width: wp("113.4765625%"),
    height: 942,
    top: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11.6015625%")
  },
  View_26_321: {
    width: wp("30.7421875%"),
    minWidth: wp("30.7421875%"),
    height: 324.8130187988281,
    minHeight: 324.8130187988281,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8046875%"),
    top: 772,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 30.048677444458008,
    borderTopRightRadius: 30.048677444458008,
    borderBottomLeftRadius: 30.048677444458008,
    borderBottomRightRadius: 30.048677444458008
  },
  View_27_0: {
    width: wp("30.7421875%"),
    minWidth: wp("30.7421875%"),
    height: 324.8130187988281,
    minHeight: 324.8130187988281,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8046875%"),
    top: 416,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 30.048677444458008,
    borderTopRightRadius: 30.048677444458008,
    borderBottomLeftRadius: 30.048677444458008,
    borderBottomRightRadius: 30.048677444458008
  },
  View_27_1: {
    width: wp("19.0625%"),
    minWidth: wp("19.0625%"),
    height: 684,
    minHeight: 684,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.1875%"),
    top: 413,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 30.048677444458008,
    borderTopRightRadius: 30.048677444458008,
    borderBottomLeftRadius: 30.048677444458008,
    borderBottomRightRadius: 30.048677444458008
  },
  View_26_2125: {
    width: wp("6.582500934600829%"),
    minWidth: wp("6.582500934600829%"),
    minHeight: 57.230499267578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.877914428710934%"),
    top: 828.170654296875
  },
  Text_26_2125: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 30.153667449951172,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_2134: {
    width: wp("6.582500934600829%"),
    minWidth: wp("6.582500934600829%"),
    minHeight: 57.230499267578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.307220458984375%"),
    top: 1008.8937377929688
  },
  Text_26_2134: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 30.153667449951172,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_2126: {
    width: wp("6.868696808815003%"),
    minWidth: wp("6.868696808815003%"),
    minHeight: 57.39177703857422,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.652645111083984%"),
    top: 828.170654296875
  },
  Text_26_2126: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 30.153667449951172,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_2138: {
    width: wp("6.868696808815003%"),
    minWidth: wp("6.868696808815003%"),
    minHeight: 57.39177703857422,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.795753479003906%"),
    top: 1006.4515380859375
  },
  Text_26_2138: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 30.153667449951172,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_2132: {
    width: wp("4.210089445114136%"),
    minWidth: wp("4.210089445114136%"),
    minHeight: 39.5748405456543,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.93830871582031%"),
    top: 902.2803344726562
  },
  Text_26_2132: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21.3090877532959,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_240: {
    width: wp("8.5546875%"),
    minWidth: wp("8.5546875%"),
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.1328125%"),
    top: 287
  },
  Text_26_240: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_26_293: {
    width: wp("22.361114025115967%"),
    minWidth: wp("22.361114025115967%"),
    height: 137.20152282714844,
    minHeight: 137.20152282714844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.218158721923825%"),
    top: 522.8199462890625
  },
  View_26_241: {
    width: wp("1.5032681822776794%"),
    height: 38.483665466308594,
    top: 626.3486328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.403892517089847%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_242: {
    flexGrow: 1,
    width: wp("1.1274511367082596%"),
    height: 35.80194854736328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18789291381835227%"),
    top: 1.60345458984375
  },
  View_26_243: {
    width: wp("1.1274511367082596%"),
    minWidth: wp("1.1274511367082596%"),
    height: 35.80194854736328,
    minHeight: 35.80194854736328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  ImageBackground_26_244: {
    width: wp("1.1274511367082596%"),
    height: 35.80194854736328,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_26_247: {
    width: wp("0.6263617426156998%"),
    height: 16.034860610961914,
    top: 6.413909912109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.25054931640625355%")
  },
  ImageBackground_26_249: {
    flexGrow: 1,
    width: wp("1.0021787881851196%"),
    height: 32.871463775634766,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2505302429199219%"),
    top: 3.206939697265625
  },
  View_26_313: {
    width: wp("1.2600655853748322%"),
    height: 32.2576789855957,
    top: 627.7759399414062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.01221084594727%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_313_26_242: {
    flexGrow: 1,
    width: wp("0.9450491517782211%"),
    height: 30.009815216064453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15748977661131391%"),
    top: 1.34405517578125
  },
  View_I26_313_26_243: {
    width: wp("0.9450491517782211%"),
    minWidth: wp("0.9450491517782211%"),
    height: 30.009815216064453,
    minHeight: 30.009815216064453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  ImageBackground_I26_313_26_244: {
    width: wp("0.9450491517782211%"),
    height: 30.009815216064453,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I26_313_26_247: {
    width: wp("0.5250272899866104%"),
    height: 13.440698623657227,
    top: 5.376251220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.21001815795899148%")
  },
  ImageBackground_I26_313_26_249: {
    flexGrow: 1,
    width: wp("0.8400436490774155%"),
    height: 27.55343246459961,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20999908447265625%"),
    top: 2.6881103515625
  },
  ImageBackground_26_302: {
    width: wp("1.7220273613929749%"),
    height: 57.37964630126953,
    top: 494.86285400390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.4904899597168%")
  },
  View_26_307: {
    width: wp("6.639434099197388%"),
    minWidth: wp("6.639434099197388%"),
    minHeight: 96.20915985107422,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.8984375%"),
    top: 466
  },
  Text_26_307: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 51.970176696777344,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_310: {
    width: wp("4.0087151527404785%"),
    minWidth: wp("4.0087151527404785%"),
    minHeight: 37.545040130615234,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.213783264160156%"),
    top: 664.832275390625
  },
  Text_26_310: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20.354215621948242,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_311: {
    width: wp("4.0087151527404785%"),
    minWidth: wp("4.0087151527404785%"),
    minHeight: 37.545040130615234,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.762821197509766%"),
    top: 664.832275390625
  },
  Text_26_311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20.354215621948242,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_309: {
    width: wp("5.825164318084717%"),
    minWidth: wp("5.825164318084717%"),
    minHeight: 96.10226440429688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.823280334472656%"),
    top: 466
  },
  Text_26_309: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 51.970176696777344,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_2123: {
    width: wp("4.388333857059479%"),
    minWidth: wp("4.388333857059479%"),
    minHeight: 32.96974563598633,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.877914428710934%"),
    top: 797.6431274414062
  },
  Text_26_2123: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.979829788208008,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_2135: {
    width: wp("3.5297468304634094%"),
    minWidth: wp("3.5297468304634094%"),
    minHeight: 32.96974563598633,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.307220458984375%"),
    top: 978.3661499023438
  },
  Text_26_2135: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.979829788208008,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_2124: {
    width: wp("2.790408134460449%"),
    minWidth: wp("2.790408134460449%"),
    minHeight: 32.96974563598633,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.44474029541015%"),
    top: 797.6431274414062
  },
  Text_26_2124: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.979829788208008,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_2139: {
    width: wp("3.6966943740844727%"),
    minWidth: wp("3.6966943740844727%"),
    minHeight: 32.96974563598633,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.37151336669922%"),
    top: 978.3661499023438
  },
  Text_26_2139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.979829788208008,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_2130: {
    width: wp("2.4010665714740753%"),
    minWidth: wp("2.4010665714740753%"),
    minHeight: 19.628215789794922,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.72770309448242%"),
    top: 935.9609985351562
  },
  Text_26_2130: {
    color: "rgba(97, 55, 254, 1)",
    fontSize: 10.12087631225586,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_26_2140: {
    width: wp("5.580816268920898%"),
    minWidth: wp("5.580816268920898%"),
    height: 142.868896484375,
    minHeight: 142.868896484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.301902770996094%"),
    top: 857.4771118164062
  },
  ImageBackground_26_2141: {
    width: wp("11.328579187393188%"),
    minWidth: wp("11.328579187393188%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.997161865234375%"),
    top: 928.301025390625
  },
  ImageBackground_26_2142: {
    width: wp("11.328579187393188%"),
    minWidth: wp("11.328579187393188%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.88270950317383%"),
    top: 927.6904296875
  },
  View_28_11: {
    width: wp("9.765625%"),
    minWidth: wp("9.765625%"),
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.64062500000001%"),
    top: 1007
  },
  View_28_9: {
    width: wp("9.765625%"),
    minWidth: wp("9.765625%"),
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(97, 55, 254, 1)",
    borderTopLeftRadius: 17.240522384643555,
    borderTopRightRadius: 17.240522384643555,
    borderBottomLeftRadius: 17.240522384643555,
    borderBottomRightRadius: 17.240522384643555
  },
  View_28_10: {
    width: wp("4.714205265045166%"),
    minWidth: wp("4.714205265045166%"),
    minHeight: 31.828655242919922,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.617187499999993%"),
    top: 13
  },
  Text_28_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.116195678710938,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 3177 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
