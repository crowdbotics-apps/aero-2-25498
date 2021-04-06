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
      <View style={styles.View_6_33}>
        <Text style={styles.Text_6_33}>Flights</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0aec/d17c/e16692bef60fb5045882aff93a079560"
        }}
        style={styles.ImageBackground_6_36}
      />
      <View style={styles.View_6_35}>
        <Text style={styles.Text_6_35}>Destinations</Text>
      </View>
      <View style={styles.View_6_46}>
        <Text style={styles.Text_6_46}>Airports</Text>
      </View>
      <View style={styles.View_6_47}>
        <Text style={styles.Text_6_47}>Airlines</Text>
      </View>
      <View style={styles.View_6_48}>
        <Text style={styles.Text_6_48}>Sign In</Text>
      </View>
      <View style={styles.View_6_50} />
      <View style={styles.View_6_49}>
        <Text style={styles.Text_6_49}>Get Started</Text>
      </View>
      <View style={styles.View_12_0}>
        <View style={styles.View_6_29}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3784/fb6c/894c433213cfac27feacb54e0d9c8b2d"
            }}
            style={styles.ImageBackground_6_14}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d8f/b8ba/b67d748b5cfcde2d4e323420971265fe"
            }}
            style={styles.ImageBackground_6_15}
          />
        </View>
        <View style={styles.View_6_51}>
          <Text style={styles.Text_6_51}>Aero</Text>
        </View>
      </View>
      <View style={styles.View_6_106}>
        <Text style={styles.Text_6_106}>All Flights</Text>
      </View>
      <View style={styles.View_6_193}>
        <Text style={styles.Text_6_193}>24h</Text>
      </View>
      <View style={styles.View_6_194}>
        <Text style={styles.Text_6_194}>5h</Text>
      </View>
      <View style={styles.View_6_195}>
        <Text style={styles.Text_6_195}>1 h</Text>
      </View>
      <View style={styles.View_6_196}>
        <View style={styles.View_6_52}>
          <Text style={styles.Text_6_52}>Upcoming Flights</Text>
        </View>
        <View style={styles.View_6_60} />
        <View style={styles.View_6_68} />
        <View style={styles.View_6_62} />
        <View style={styles.View_6_69} />
        <View style={styles.View_6_54}>
          <Text style={styles.Text_6_54}>NWK </Text>
        </View>
        <View style={styles.View_6_70}>
          <Text style={styles.Text_6_70}>NWK </Text>
        </View>
        <View style={styles.View_6_63}>
          <Text style={styles.Text_6_63}>NWK </Text>
        </View>
        <View style={styles.View_6_71}>
          <Text style={styles.Text_6_71}>NWK </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0542/9748/369f0c8fe069d6379c0cad7a4f00720b"
          }}
          style={styles.ImageBackground_6_56}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0542/9748/369f0c8fe069d6379c0cad7a4f00720b"
          }}
          style={styles.ImageBackground_6_72}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0542/9748/369f0c8fe069d6379c0cad7a4f00720b"
          }}
          style={styles.ImageBackground_6_64}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0542/9748/369f0c8fe069d6379c0cad7a4f00720b"
          }}
          style={styles.ImageBackground_6_73}
        />
        <View style={styles.View_6_57}>
          <Text style={styles.Text_6_57}>LND</Text>
        </View>
        <View style={styles.View_6_74}>
          <Text style={styles.Text_6_74}>LND</Text>
        </View>
        <View style={styles.View_6_65}>
          <Text style={styles.Text_6_65}>LND</Text>
        </View>
        <View style={styles.View_6_75}>
          <Text style={styles.Text_6_75}>LND</Text>
        </View>
        <View style={styles.View_6_59}>
          <Text style={styles.Text_6_59}>Jet Blue</Text>
        </View>
        <View style={styles.View_6_76}>
          <Text style={styles.Text_6_76}>Jet Blue</Text>
        </View>
        <View style={styles.View_6_66}>
          <Text style={styles.Text_6_66}>Jet Blue</Text>
        </View>
        <View style={styles.View_6_77}>
          <Text style={styles.Text_6_77}>Jet Blue</Text>
        </View>
        <View style={styles.View_6_61}>
          <Text style={styles.Text_6_61}>22:00</Text>
        </View>
        <View style={styles.View_6_78}>
          <Text style={styles.Text_6_78}>22:00</Text>
        </View>
        <View style={styles.View_6_67}>
          <Text style={styles.Text_6_67}>22:00</Text>
        </View>
        <View style={styles.View_6_79}>
          <Text style={styles.Text_6_79}>22:00</Text>
        </View>
      </View>
      <View style={styles.View_6_197}>
        <View style={styles.View_6_198}>
          <Text style={styles.Text_6_198}>Delayed Flights</Text>
        </View>
        <View style={styles.View_6_199} />
        <View style={styles.View_6_200} />
        <View style={styles.View_6_201} />
        <View style={styles.View_6_202} />
        <View style={styles.View_6_203}>
          <Text style={styles.Text_6_203}>NWK </Text>
        </View>
        <View style={styles.View_6_204}>
          <Text style={styles.Text_6_204}>NWK </Text>
        </View>
        <View style={styles.View_6_205}>
          <Text style={styles.Text_6_205}>NWK </Text>
        </View>
        <View style={styles.View_6_206}>
          <Text style={styles.Text_6_206}>NWK </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/fadf/e98214c273c832f7b32c2bfe014441cf"
          }}
          style={styles.ImageBackground_24_0}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0542/9748/369f0c8fe069d6379c0cad7a4f00720b"
          }}
          style={styles.ImageBackground_6_208}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0542/9748/369f0c8fe069d6379c0cad7a4f00720b"
          }}
          style={styles.ImageBackground_6_209}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0542/9748/369f0c8fe069d6379c0cad7a4f00720b"
          }}
          style={styles.ImageBackground_6_210}
        />
        <View style={styles.View_6_211}>
          <Text style={styles.Text_6_211}>LND</Text>
        </View>
        <View style={styles.View_6_212}>
          <Text style={styles.Text_6_212}>LND</Text>
        </View>
        <View style={styles.View_6_213}>
          <Text style={styles.Text_6_213}>LND</Text>
        </View>
        <View style={styles.View_6_214}>
          <Text style={styles.Text_6_214}>LND</Text>
        </View>
        <View style={styles.View_6_215}>
          <Text style={styles.Text_6_215}>Jet Blue</Text>
        </View>
        <View style={styles.View_6_216}>
          <Text style={styles.Text_6_216}>Jet Blue</Text>
        </View>
        <View style={styles.View_6_217}>
          <Text style={styles.Text_6_217}>Jet Blue</Text>
        </View>
        <View style={styles.View_6_218}>
          <Text style={styles.Text_6_218}>Jet Blue</Text>
        </View>
        <View style={styles.View_6_219}>
          <Text style={styles.Text_6_219}>22:00</Text>
        </View>
        <View style={styles.View_6_220}>
          <Text style={styles.Text_6_220}>22:00</Text>
        </View>
        <View style={styles.View_6_221}>
          <Text style={styles.Text_6_221}>22:00</Text>
        </View>
        <View style={styles.View_6_222}>
          <Text style={styles.Text_6_222}>22:00</Text>
        </View>
      </View>
      <View style={styles.View_6_107}>
        <Text style={styles.Text_6_107}>Flight Id</Text>
      </View>
      <View style={styles.View_6_108}>
        <Text style={styles.Text_6_108}>Price</Text>
      </View>
      <View style={styles.View_6_109}>
        <Text style={styles.Text_6_109}>Arrival Time</Text>
      </View>
      <View style={styles.View_6_111}>
        <Text style={styles.Text_6_111}>Departure Airport</Text>
      </View>
      <View style={styles.View_6_112}>
        <Text style={styles.Text_6_112}>Arrival Airport</Text>
      </View>
      <View style={styles.View_6_113}>
        <Text style={styles.Text_6_113}>Airline</Text>
      </View>
      <View style={styles.View_6_114}>
        <Text style={styles.Text_6_114}>Buy</Text>
      </View>
      <View style={styles.View_6_110}>
        <Text style={styles.Text_6_110}>Departure Time</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b685/b866/34f0439b2cb26bfdcd01b38a9ca09ea6"
        }}
        style={styles.ImageBackground_6_115}
      />
      <View style={styles.View_6_126}>
        <View style={styles.View_6_123} />
        <View style={styles.View_6_116}>
          <Text style={styles.Text_6_116}>12345678</Text>
        </View>
        <View style={styles.View_6_125}>
          <Text style={styles.Text_6_125}>Gate 4c</Text>
        </View>
        <View style={styles.View_6_117}>
          <Text style={styles.Text_6_117}>450$</Text>
        </View>
        <View style={styles.View_6_118}>
          <Text style={styles.Text_6_118}>12:00 EST</Text>
        </View>
        <View style={styles.View_6_119}>
          <Text style={styles.Text_6_119}>18:00 EST</Text>
        </View>
        <View style={styles.View_6_120}>
          <Text style={styles.Text_6_120}>Newark</Text>
        </View>
        <View style={styles.View_6_121}>
          <Text style={styles.Text_6_121}>Heathrow</Text>
        </View>
        <View style={styles.View_6_122}>
          <Text style={styles.Text_6_122}>British Airlines</Text>
        </View>
        <View style={styles.View_6_124}>
          <Text style={styles.Text_6_124}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_6_249}>
        <View style={styles.View_6_250} />
        <View style={styles.View_6_251}>
          <Text style={styles.Text_6_251}>12345678</Text>
        </View>
        <View style={styles.View_6_252}>
          <Text style={styles.Text_6_252}>Gate 4c</Text>
        </View>
        <View style={styles.View_6_253}>
          <Text style={styles.Text_6_253}>450$</Text>
        </View>
        <View style={styles.View_6_254}>
          <Text style={styles.Text_6_254}>12:00 EST</Text>
        </View>
        <View style={styles.View_6_255}>
          <Text style={styles.Text_6_255}>18:00 EST</Text>
        </View>
        <View style={styles.View_6_256}>
          <Text style={styles.Text_6_256}>Newark</Text>
        </View>
        <View style={styles.View_6_257}>
          <Text style={styles.Text_6_257}>Heathrow</Text>
        </View>
        <View style={styles.View_6_258}>
          <Text style={styles.Text_6_258}>British Airlines</Text>
        </View>
        <View style={styles.View_6_259}>
          <Text style={styles.Text_6_259}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_6_127}>
        <View style={styles.View_6_128} />
        <View style={styles.View_6_129}>
          <Text style={styles.Text_6_129}>12345678</Text>
        </View>
        <View style={styles.View_6_130}>
          <Text style={styles.Text_6_130}>Gate 4c</Text>
        </View>
        <View style={styles.View_6_131}>
          <Text style={styles.Text_6_131}>450$</Text>
        </View>
        <View style={styles.View_6_132}>
          <Text style={styles.Text_6_132}>12:00 EST</Text>
        </View>
        <View style={styles.View_6_133}>
          <Text style={styles.Text_6_133}>18:00 EST</Text>
        </View>
        <View style={styles.View_6_134}>
          <Text style={styles.Text_6_134}>Newark</Text>
        </View>
        <View style={styles.View_6_135}>
          <Text style={styles.Text_6_135}>Heathrow</Text>
        </View>
        <View style={styles.View_6_136}>
          <Text style={styles.Text_6_136}>British Airlines</Text>
        </View>
        <View style={styles.View_6_137}>
          <Text style={styles.Text_6_137}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_6_260}>
        <View style={styles.View_6_261} />
        <View style={styles.View_6_262}>
          <Text style={styles.Text_6_262}>12345678</Text>
        </View>
        <View style={styles.View_6_263}>
          <Text style={styles.Text_6_263}>Gate 4c</Text>
        </View>
        <View style={styles.View_6_264}>
          <Text style={styles.Text_6_264}>450$</Text>
        </View>
        <View style={styles.View_6_265}>
          <Text style={styles.Text_6_265}>12:00 EST</Text>
        </View>
        <View style={styles.View_6_266}>
          <Text style={styles.Text_6_266}>18:00 EST</Text>
        </View>
        <View style={styles.View_6_267}>
          <Text style={styles.Text_6_267}>Newark</Text>
        </View>
        <View style={styles.View_6_268}>
          <Text style={styles.Text_6_268}>Heathrow</Text>
        </View>
        <View style={styles.View_6_269}>
          <Text style={styles.Text_6_269}>British Airlines</Text>
        </View>
        <View style={styles.View_6_270}>
          <Text style={styles.Text_6_270}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_6_138}>
        <View style={styles.View_6_139} />
        <View style={styles.View_6_140}>
          <Text style={styles.Text_6_140}>12345678</Text>
        </View>
        <View style={styles.View_6_141}>
          <Text style={styles.Text_6_141}>Gate 4c</Text>
        </View>
        <View style={styles.View_6_142}>
          <Text style={styles.Text_6_142}>450$</Text>
        </View>
        <View style={styles.View_6_143}>
          <Text style={styles.Text_6_143}>12:00 EST</Text>
        </View>
        <View style={styles.View_6_144}>
          <Text style={styles.Text_6_144}>18:00 EST</Text>
        </View>
        <View style={styles.View_6_145}>
          <Text style={styles.Text_6_145}>Newark</Text>
        </View>
        <View style={styles.View_6_146}>
          <Text style={styles.Text_6_146}>Heathrow</Text>
        </View>
        <View style={styles.View_6_147}>
          <Text style={styles.Text_6_147}>British Airlines</Text>
        </View>
        <View style={styles.View_6_148}>
          <Text style={styles.Text_6_148}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_6_271}>
        <View style={styles.View_6_272} />
        <View style={styles.View_6_273}>
          <Text style={styles.Text_6_273}>12345678</Text>
        </View>
        <View style={styles.View_6_274}>
          <Text style={styles.Text_6_274}>Gate 4c</Text>
        </View>
        <View style={styles.View_6_275}>
          <Text style={styles.Text_6_275}>450$</Text>
        </View>
        <View style={styles.View_6_276}>
          <Text style={styles.Text_6_276}>12:00 EST</Text>
        </View>
        <View style={styles.View_6_277}>
          <Text style={styles.Text_6_277}>18:00 EST</Text>
        </View>
        <View style={styles.View_6_278}>
          <Text style={styles.Text_6_278}>Newark</Text>
        </View>
        <View style={styles.View_6_279}>
          <Text style={styles.Text_6_279}>Heathrow</Text>
        </View>
        <View style={styles.View_6_280}>
          <Text style={styles.Text_6_280}>British Airlines</Text>
        </View>
        <View style={styles.View_6_281}>
          <Text style={styles.Text_6_281}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_6_149}>
        <View style={styles.View_6_150} />
        <View style={styles.View_6_151}>
          <Text style={styles.Text_6_151}>12345678</Text>
        </View>
        <View style={styles.View_6_152}>
          <Text style={styles.Text_6_152}>Gate 4c</Text>
        </View>
        <View style={styles.View_6_153}>
          <Text style={styles.Text_6_153}>450$</Text>
        </View>
        <View style={styles.View_6_154}>
          <Text style={styles.Text_6_154}>12:00 EST</Text>
        </View>
        <View style={styles.View_6_155}>
          <Text style={styles.Text_6_155}>18:00 EST</Text>
        </View>
        <View style={styles.View_6_156}>
          <Text style={styles.Text_6_156}>Newark</Text>
        </View>
        <View style={styles.View_6_157}>
          <Text style={styles.Text_6_157}>Heathrow</Text>
        </View>
        <View style={styles.View_6_158}>
          <Text style={styles.Text_6_158}>British Airlines</Text>
        </View>
        <View style={styles.View_6_159}>
          <Text style={styles.Text_6_159}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_6_282}>
        <View style={styles.View_6_283} />
        <View style={styles.View_6_284}>
          <Text style={styles.Text_6_284}>12345678</Text>
        </View>
        <View style={styles.View_6_285}>
          <Text style={styles.Text_6_285}>Gate 4c</Text>
        </View>
        <View style={styles.View_6_286}>
          <Text style={styles.Text_6_286}>450$</Text>
        </View>
        <View style={styles.View_6_287}>
          <Text style={styles.Text_6_287}>12:00 EST</Text>
        </View>
        <View style={styles.View_6_288}>
          <Text style={styles.Text_6_288}>18:00 EST</Text>
        </View>
        <View style={styles.View_6_289}>
          <Text style={styles.Text_6_289}>Newark</Text>
        </View>
        <View style={styles.View_6_290}>
          <Text style={styles.Text_6_290}>Heathrow</Text>
        </View>
        <View style={styles.View_6_291}>
          <Text style={styles.Text_6_291}>British Airlines</Text>
        </View>
        <View style={styles.View_6_292}>
          <Text style={styles.Text_6_292}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_6_160}>
        <View style={styles.View_6_161} />
        <View style={styles.View_6_162}>
          <Text style={styles.Text_6_162}>12345678</Text>
        </View>
        <View style={styles.View_6_163}>
          <Text style={styles.Text_6_163}>Gate 4c</Text>
        </View>
        <View style={styles.View_6_164}>
          <Text style={styles.Text_6_164}>450$</Text>
        </View>
        <View style={styles.View_6_165}>
          <Text style={styles.Text_6_165}>12:00 EST</Text>
        </View>
        <View style={styles.View_6_166}>
          <Text style={styles.Text_6_166}>18:00 EST</Text>
        </View>
        <View style={styles.View_6_167}>
          <Text style={styles.Text_6_167}>Newark</Text>
        </View>
        <View style={styles.View_6_168}>
          <Text style={styles.Text_6_168}>Heathrow</Text>
        </View>
        <View style={styles.View_6_169}>
          <Text style={styles.Text_6_169}>British Airlines</Text>
        </View>
        <View style={styles.View_6_170}>
          <Text style={styles.Text_6_170}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_6_293}>
        <View style={styles.View_6_294} />
        <View style={styles.View_6_295}>
          <Text style={styles.Text_6_295}>12345678</Text>
        </View>
        <View style={styles.View_6_296}>
          <Text style={styles.Text_6_296}>Gate 4c</Text>
        </View>
        <View style={styles.View_6_297}>
          <Text style={styles.Text_6_297}>450$</Text>
        </View>
        <View style={styles.View_6_298}>
          <Text style={styles.Text_6_298}>12:00 EST</Text>
        </View>
        <View style={styles.View_6_299}>
          <Text style={styles.Text_6_299}>18:00 EST</Text>
        </View>
        <View style={styles.View_6_300}>
          <Text style={styles.Text_6_300}>Newark</Text>
        </View>
        <View style={styles.View_6_301}>
          <Text style={styles.Text_6_301}>Heathrow</Text>
        </View>
        <View style={styles.View_6_302}>
          <Text style={styles.Text_6_302}>British Airlines</Text>
        </View>
        <View style={styles.View_6_303}>
          <Text style={styles.Text_6_303}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_6_171}>
        <View style={styles.View_6_172} />
        <View style={styles.View_6_173}>
          <Text style={styles.Text_6_173}>12345678</Text>
        </View>
        <View style={styles.View_6_174}>
          <Text style={styles.Text_6_174}>Gate 4c</Text>
        </View>
        <View style={styles.View_6_175}>
          <Text style={styles.Text_6_175}>450$</Text>
        </View>
        <View style={styles.View_6_176}>
          <Text style={styles.Text_6_176}>12:00 EST</Text>
        </View>
        <View style={styles.View_6_177}>
          <Text style={styles.Text_6_177}>18:00 EST</Text>
        </View>
        <View style={styles.View_6_178}>
          <Text style={styles.Text_6_178}>Newark</Text>
        </View>
        <View style={styles.View_6_179}>
          <Text style={styles.Text_6_179}>Heathrow</Text>
        </View>
        <View style={styles.View_6_180}>
          <Text style={styles.Text_6_180}>British Airlines</Text>
        </View>
        <View style={styles.View_6_181}>
          <Text style={styles.Text_6_181}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_6_304}>
        <View style={styles.View_6_305} />
        <View style={styles.View_6_306}>
          <Text style={styles.Text_6_306}>12345678</Text>
        </View>
        <View style={styles.View_6_307}>
          <Text style={styles.Text_6_307}>Gate 4c</Text>
        </View>
        <View style={styles.View_6_308}>
          <Text style={styles.Text_6_308}>450$</Text>
        </View>
        <View style={styles.View_6_309}>
          <Text style={styles.Text_6_309}>12:00 EST</Text>
        </View>
        <View style={styles.View_6_310}>
          <Text style={styles.Text_6_310}>18:00 EST</Text>
        </View>
        <View style={styles.View_6_311}>
          <Text style={styles.Text_6_311}>Newark</Text>
        </View>
        <View style={styles.View_6_312}>
          <Text style={styles.Text_6_312}>Heathrow</Text>
        </View>
        <View style={styles.View_6_313}>
          <Text style={styles.Text_6_313}>British Airlines</Text>
        </View>
        <View style={styles.View_6_314}>
          <Text style={styles.Text_6_314}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_6_182}>
        <View style={styles.View_6_183} />
        <View style={styles.View_6_184}>
          <Text style={styles.Text_6_184}>12345678</Text>
        </View>
        <View style={styles.View_6_185}>
          <Text style={styles.Text_6_185}>Gate 4c</Text>
        </View>
        <View style={styles.View_6_186}>
          <Text style={styles.Text_6_186}>450$</Text>
        </View>
        <View style={styles.View_6_187}>
          <Text style={styles.Text_6_187}>12:00 EST</Text>
        </View>
        <View style={styles.View_6_188}>
          <Text style={styles.Text_6_188}>18:00 EST</Text>
        </View>
        <View style={styles.View_6_189}>
          <Text style={styles.Text_6_189}>Newark</Text>
        </View>
        <View style={styles.View_6_190}>
          <Text style={styles.Text_6_190}>Heathrow</Text>
        </View>
        <View style={styles.View_6_191}>
          <Text style={styles.Text_6_191}>British Airlines</Text>
        </View>
        <View style={styles.View_6_192}>
          <Text style={styles.Text_6_192}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_6_315}>
        <View style={styles.View_6_316} />
        <View style={styles.View_6_317}>
          <Text style={styles.Text_6_317}>12345678</Text>
        </View>
        <View style={styles.View_6_318}>
          <Text style={styles.Text_6_318}>Gate 4c</Text>
        </View>
        <View style={styles.View_6_319}>
          <Text style={styles.Text_6_319}>450$</Text>
        </View>
        <View style={styles.View_6_320}>
          <Text style={styles.Text_6_320}>12:00 EST</Text>
        </View>
        <View style={styles.View_6_321}>
          <Text style={styles.Text_6_321}>18:00 EST</Text>
        </View>
        <View style={styles.View_6_322}>
          <Text style={styles.Text_6_322}>Newark</Text>
        </View>
        <View style={styles.View_6_323}>
          <Text style={styles.Text_6_323}>Heathrow</Text>
        </View>
        <View style={styles.View_6_324}>
          <Text style={styles.Text_6_324}>British Airlines</Text>
        </View>
        <View style={styles.View_6_325}>
          <Text style={styles.Text_6_325}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_6_33: {
    width: wp("3.805037140846253%"),
    minWidth: wp("3.805037140846253%"),
    minHeight: 41.377254486083984,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.0234375%"),
    top: 86
  },
  Text_6_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22.451053619384766,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_6_36: {
    width: wp("3.3167800307273865%"),
    minWidth: wp("3.3167800307273865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.0234375%"),
    top: 129.53231811523438
  },
  View_6_35: {
    width: wp("8.014149069786072%"),
    minWidth: wp("8.014149069786072%"),
    minHeight: 41.377254486083984,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.78634738922119%"),
    top: 86
  },
  Text_6_35: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22.451053619384766,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_46: {
    width: wp("8.014149069786072%"),
    minWidth: wp("8.014149069786072%"),
    minHeight: 41.377254486083984,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.88153839111328%"),
    top: 86
  },
  Text_6_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22.451053619384766,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_47: {
    width: wp("8.014149069786072%"),
    minWidth: wp("8.014149069786072%"),
    minHeight: 41.377254486083984,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.959623336791985%"),
    top: 86
  },
  Text_6_47: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22.451053619384766,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_48: {
    width: wp("3.56932669878006%"),
    minWidth: wp("3.56932669878006%"),
    minHeight: 41.377254486083984,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.453125%"),
    top: 82
  },
  Text_6_48: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22.451053619384766,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_50: {
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
  View_6_49: {
    width: wp("4.714205265045166%"),
    minWidth: wp("4.714205265045166%"),
    minHeight: 31.828655242919922,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.12979888916016%"),
    top: 89.25659942626953
  },
  Text_6_49: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.116195678710938,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_0: {
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
  View_6_29: {
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
  ImageBackground_6_14: {
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
  ImageBackground_6_15: {
    width: wp("1.6369780898094175%"),
    height: 31.9554500579834,
    top: 12.791183471679688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.30328750610351385%")
  },
  View_6_51: {
    width: wp("3.4888613224029545%"),
    minWidth: wp("3.4888613224029545%"),
    minHeight: 44.78181838989258,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6152276992797834%"),
    top: 4.933135986328125
  },
  Text_6_51: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 28.825454711914062,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.9408000183105467,
    textTransform: "none"
  },
  View_6_106: {
    width: wp("9.450936317443848%"),
    minWidth: wp("9.450936317443848%"),
    minHeight: 41.679420471191406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.1328125%"),
    top: 624.33984375
  },
  Text_6_106: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21.90595245361328,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_193: {
    width: wp("1.328125%"),
    minWidth: wp("1.328125%"),
    minHeight: 24.620689392089844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.7421875%"),
    top: 632.33984375
  },
  Text_6_193: {
    color: "rgba(97, 55, 254, 1)",
    fontSize: 13.358661651611328,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_194: {
    width: wp("2.5390625%"),
    minWidth: wp("2.5390625%"),
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.578125%"),
    top: 632.6502685546875
  },
  Text_6_194: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.358661651611328,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_195: {
    width: wp("2.5390625%"),
    minWidth: wp("2.5390625%"),
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.0234375%"),
    top: 632.6502685546875
  },
  Text_6_195: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.358661651611328,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_196: {
    width: wp("28.475179672241214%"),
    minWidth: wp("28.475179672241214%"),
    height: 239.83505249023438,
    minHeight: 239.83505249023438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.0546875%"),
    top: 294
  },
  View_6_52: {
    width: wp("9.450936317443848%"),
    minWidth: wp("9.450936317443848%"),
    minHeight: 41.679420471191406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27562618255615234%"),
    top: 0
  },
  Text_6_52: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21.90595245361328,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_60: {
    width: wp("13.631428480148317%"),
    minWidth: wp("13.631428480148317%"),
    height: 74.15497589111328,
    minHeight: 74.15497589111328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1171875%"),
    top: 68.99966430664062,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 14.540191650390625,
    borderTopRightRadius: 14.540191650390625,
    borderBottomLeftRadius: 14.540191650390625,
    borderBottomRightRadius: 14.540191650390625
  },
  View_6_68: {
    width: wp("13.631428480148317%"),
    minWidth: wp("13.631428480148317%"),
    height: 74.15497589111328,
    minHeight: 74.15497589111328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.843749999999996%"),
    top: 69.33987426757812,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 14.540191650390625,
    borderTopRightRadius: 14.540191650390625,
    borderBottomLeftRadius: 14.540191650390625,
    borderBottomRightRadius: 14.540191650390625
  },
  View_6_62: {
    width: wp("13.631428480148317%"),
    minWidth: wp("13.631428480148317%"),
    height: 74.15497589111328,
    minHeight: 74.15497589111328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 165.33987426757812,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 14.540191650390625,
    borderTopRightRadius: 14.540191650390625,
    borderBottomLeftRadius: 14.540191650390625,
    borderBottomRightRadius: 14.540191650390625
  },
  View_6_69: {
    width: wp("13.631428480148317%"),
    minWidth: wp("13.631428480148317%"),
    height: 74.15497589111328,
    minHeight: 74.15497589111328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.7265625%"),
    top: 165.68008422851562,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 14.540191650390625,
    borderTopRightRadius: 14.540191650390625,
    borderBottomLeftRadius: 14.540191650390625,
    borderBottomRightRadius: 14.540191650390625
  },
  View_6_54: {
    width: wp("1.981938034296036%"),
    minWidth: wp("1.981938034296036%"),
    minHeight: 33.019718170166016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9362697601318359%"),
    top: 82.00930786132812
  },
  Text_6_54: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18.107952117919922,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_70: {
    width: wp("1.981938034296036%"),
    minWidth: wp("1.981938034296036%"),
    minHeight: 33.019718170166016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.662832260131836%"),
    top: 82.34951782226562
  },
  Text_6_70: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18.107952117919922,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_63: {
    width: wp("1.981938034296036%"),
    minWidth: wp("1.981938034296036%"),
    minHeight: 33.019718170166016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8190822601318359%"),
    top: 178.34951782226562
  },
  Text_6_63: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18.107952117919922,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_71: {
    width: wp("1.981938034296036%"),
    minWidth: wp("1.981938034296036%"),
    minHeight: 33.019718170166016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.545644760131836%"),
    top: 178.68972778320312
  },
  Text_6_71: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18.107952117919922,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_6_56: {
    width: wp("1.1643512547016144%"),
    height: 18.484899520874023,
    top: 88.51412963867188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.375577926635742%")
  },
  ImageBackground_6_72: {
    width: wp("1.1643512547016144%"),
    height: 18.484899520874023,
    top: 88.85433959960938,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.102140426635742%")
  },
  ImageBackground_6_64: {
    width: wp("1.1643512547016144%"),
    height: 18.484899520874023,
    top: 184.85440063476562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.258390426635742%")
  },
  ImageBackground_6_73: {
    width: wp("1.1643512547016144%"),
    height: 18.484899520874023,
    top: 185.19461059570312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.984952926635742%")
  },
  View_6_57: {
    width: wp("1.6262055933475497%"),
    minWidth: wp("1.6262055933475497%"),
    minHeight: 32.524112701416016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.103421211242676%"),
    top: 82.00930786132812
  },
  Text_6_57: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18.107952117919922,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_74: {
    width: wp("1.6262055933475497%"),
    minWidth: wp("1.6262055933475497%"),
    minHeight: 32.524112701416016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.829983711242676%"),
    top: 82.34951782226562
  },
  Text_6_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18.107952117919922,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_65: {
    width: wp("1.6262055933475497%"),
    minWidth: wp("1.6262055933475497%"),
    minHeight: 32.524112701416016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.986233711242676%"),
    top: 178.34951782226562
  },
  Text_6_65: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18.107952117919922,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_75: {
    width: wp("1.6262055933475497%"),
    minWidth: wp("1.6262055933475497%"),
    minHeight: 32.524112701416016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.712796211242676%"),
    top: 178.68972778320312
  },
  Text_6_75: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18.107952117919922,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_59: {
    width: wp("2.0124293863773346%"),
    minWidth: wp("2.0124293863773346%"),
    minHeight: 19.514467239379883,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9362697601318359%"),
    top: 111.93148803710938
  },
  Text_6_59: {
    color: "rgba(97, 55, 254, 1)",
    fontSize: 10.264771461486816,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_76: {
    width: wp("2.0124293863773346%"),
    minWidth: wp("2.0124293863773346%"),
    minHeight: 19.514467239379883,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.662832260131836%"),
    top: 112.27169799804688
  },
  Text_6_76: {
    color: "rgba(97, 55, 254, 1)",
    fontSize: 10.264771461486816,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_66: {
    width: wp("2.0124293863773346%"),
    minWidth: wp("2.0124293863773346%"),
    minHeight: 19.514467239379883,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8190822601318359%"),
    top: 208.27169799804688
  },
  Text_6_66: {
    color: "rgba(97, 55, 254, 1)",
    fontSize: 10.264771461486816,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_77: {
    width: wp("2.0124293863773346%"),
    minWidth: wp("2.0124293863773346%"),
    minHeight: 19.514467239379883,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.545644760131836%"),
    top: 208.61190795898438
  },
  Text_6_77: {
    color: "rgba(97, 55, 254, 1)",
    fontSize: 10.264771461486816,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_61: {
    width: wp("2.317342907190323%"),
    minWidth: wp("2.317342907190323%"),
    minHeight: 32.957763671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.693502426147457%"),
    top: 82.00930786132812
  },
  Text_6_61: {
    color: "rgba(97, 55, 254, 1)",
    fontSize: 18.40272331237793,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_78: {
    width: wp("2.317342907190323%"),
    minWidth: wp("2.317342907190323%"),
    minHeight: 32.957763671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.42006492614746%"),
    top: 82.34951782226562
  },
  Text_6_78: {
    color: "rgba(97, 55, 254, 1)",
    fontSize: 18.40272331237793,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_67: {
    width: wp("2.317342907190323%"),
    minWidth: wp("2.317342907190323%"),
    minHeight: 32.957763671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.576314926147461%"),
    top: 178.34951782226562
  },
  Text_6_67: {
    color: "rgba(97, 55, 254, 1)",
    fontSize: 18.40272331237793,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_79: {
    width: wp("2.317342907190323%"),
    minWidth: wp("2.317342907190323%"),
    minHeight: 32.957763671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.30287742614746%"),
    top: 178.68972778320312
  },
  Text_6_79: {
    color: "rgba(97, 55, 254, 1)",
    fontSize: 18.40272331237793,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_197: {
    width: wp("28.475179672241214%"),
    minWidth: wp("28.475179672241214%"),
    height: 239.83505249023438,
    minHeight: 239.83505249023438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.2890625%"),
    top: 295.3398742675781
  },
  View_6_198: {
    width: wp("9.450936317443848%"),
    minWidth: wp("9.450936317443848%"),
    minHeight: 41.679420471191406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2756309509277344%"),
    top: 0
  },
  Text_6_198: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21.90595245361328,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_199: {
    width: wp("13.631428480148317%"),
    minWidth: wp("13.631428480148317%"),
    height: 74.15497589111328,
    minHeight: 74.15497589111328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1171875%"),
    top: 68.99966430664062,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 14.540191650390625,
    borderTopRightRadius: 14.540191650390625,
    borderBottomLeftRadius: 14.540191650390625,
    borderBottomRightRadius: 14.540191650390625
  },
  View_6_200: {
    width: wp("13.631428480148317%"),
    minWidth: wp("13.631428480148317%"),
    height: 74.15497589111328,
    minHeight: 74.15497589111328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.84375%"),
    top: 69.33987426757812,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 14.540191650390625,
    borderTopRightRadius: 14.540191650390625,
    borderBottomLeftRadius: 14.540191650390625,
    borderBottomRightRadius: 14.540191650390625
  },
  View_6_201: {
    width: wp("13.631428480148317%"),
    minWidth: wp("13.631428480148317%"),
    height: 74.15497589111328,
    minHeight: 74.15497589111328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 165.33987426757812,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 14.540191650390625,
    borderTopRightRadius: 14.540191650390625,
    borderBottomLeftRadius: 14.540191650390625,
    borderBottomRightRadius: 14.540191650390625
  },
  View_6_202: {
    width: wp("13.631428480148317%"),
    minWidth: wp("13.631428480148317%"),
    height: 74.15497589111328,
    minHeight: 74.15497589111328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.726562499999993%"),
    top: 165.68008422851562,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 14.540191650390625,
    borderTopRightRadius: 14.540191650390625,
    borderBottomLeftRadius: 14.540191650390625,
    borderBottomRightRadius: 14.540191650390625
  },
  View_6_203: {
    width: wp("1.981938034296036%"),
    minWidth: wp("1.981938034296036%"),
    minHeight: 33.019718170166016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9362697601318359%"),
    top: 82.00930786132812
  },
  Text_6_203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18.107952117919922,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_204: {
    width: wp("1.981938034296036%"),
    minWidth: wp("1.981938034296036%"),
    minHeight: 33.019718170166016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.662832260131829%"),
    top: 82.34951782226562
  },
  Text_6_204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18.107952117919922,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_205: {
    width: wp("1.981938034296036%"),
    minWidth: wp("1.981938034296036%"),
    minHeight: 33.019718170166016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8190822601318359%"),
    top: 178.34951782226562
  },
  Text_6_205: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18.107952117919922,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_206: {
    width: wp("1.981938034296036%"),
    minWidth: wp("1.981938034296036%"),
    minHeight: 33.019718170166016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.545644760131836%"),
    top: 178.68972778320312
  },
  Text_6_206: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18.107952117919922,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_24_0: {
    width: wp("1.9456012547016142%"),
    height: 38.484901428222656,
    top: 78.51412963867188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.984952926635742%")
  },
  ImageBackground_6_208: {
    width: wp("1.1643512547016144%"),
    height: 18.484899520874023,
    top: 88.85433959960938,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.102140426635742%")
  },
  ImageBackground_6_209: {
    width: wp("1.1643512547016144%"),
    height: 18.484899520874023,
    top: 184.85440063476562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.258390426635742%")
  },
  ImageBackground_6_210: {
    width: wp("1.1643512547016144%"),
    height: 18.484899520874023,
    top: 185.19461059570312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.984952926635742%")
  },
  View_6_211: {
    width: wp("1.6262055933475497%"),
    minWidth: wp("1.6262055933475497%"),
    minHeight: 32.524112701416016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.103416442871087%"),
    top: 82.00930786132812
  },
  Text_6_211: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18.107952117919922,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_212: {
    width: wp("1.6262055933475497%"),
    minWidth: wp("1.6262055933475497%"),
    minHeight: 32.524112701416016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.829978942871094%"),
    top: 82.34951782226562
  },
  Text_6_212: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18.107952117919922,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_213: {
    width: wp("1.6262055933475497%"),
    minWidth: wp("1.6262055933475497%"),
    minHeight: 32.524112701416016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.986228942871094%"),
    top: 178.34951782226562
  },
  Text_6_213: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18.107952117919922,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_214: {
    width: wp("1.6262055933475497%"),
    minWidth: wp("1.6262055933475497%"),
    minHeight: 32.524112701416016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.712791442871094%"),
    top: 178.68972778320312
  },
  Text_6_214: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18.107952117919922,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_215: {
    width: wp("2.0124293863773346%"),
    minWidth: wp("2.0124293863773346%"),
    minHeight: 19.514467239379883,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9362697601318359%"),
    top: 111.93148803710938
  },
  Text_6_215: {
    color: "rgba(97, 55, 254, 1)",
    fontSize: 10.264771461486816,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_216: {
    width: wp("2.0124293863773346%"),
    minWidth: wp("2.0124293863773346%"),
    minHeight: 19.514467239379883,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.662832260131829%"),
    top: 112.27169799804688
  },
  Text_6_216: {
    color: "rgba(97, 55, 254, 1)",
    fontSize: 10.264771461486816,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_217: {
    width: wp("2.0124293863773346%"),
    minWidth: wp("2.0124293863773346%"),
    minHeight: 19.514467239379883,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8190822601318359%"),
    top: 208.27169799804688
  },
  Text_6_217: {
    color: "rgba(97, 55, 254, 1)",
    fontSize: 10.264771461486816,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_218: {
    width: wp("2.0124293863773346%"),
    minWidth: wp("2.0124293863773346%"),
    minHeight: 19.514467239379883,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.545644760131836%"),
    top: 208.61190795898438
  },
  Text_6_218: {
    color: "rgba(97, 55, 254, 1)",
    fontSize: 10.264771461486816,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_219: {
    width: wp("2.317342907190323%"),
    minWidth: wp("2.317342907190323%"),
    minHeight: 32.957763671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.693502426147461%"),
    top: 82.00930786132812
  },
  Text_6_219: {
    color: "rgba(97, 55, 254, 1)",
    fontSize: 18.40272331237793,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_220: {
    width: wp("2.317342907190323%"),
    minWidth: wp("2.317342907190323%"),
    minHeight: 32.957763671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.42006492614746%"),
    top: 82.34951782226562
  },
  Text_6_220: {
    color: "rgba(97, 55, 254, 1)",
    fontSize: 18.40272331237793,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_221: {
    width: wp("2.317342907190323%"),
    minWidth: wp("2.317342907190323%"),
    minHeight: 32.957763671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.576314926147454%"),
    top: 178.34951782226562
  },
  Text_6_221: {
    color: "rgba(97, 55, 254, 1)",
    fontSize: 18.40272331237793,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_222: {
    width: wp("2.317342907190323%"),
    minWidth: wp("2.317342907190323%"),
    minHeight: 32.957763671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.30287742614746%"),
    top: 178.68972778320312
  },
  Text_6_222: {
    color: "rgba(97, 55, 254, 1)",
    fontSize: 18.40272331237793,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_107: {
    width: wp("2.963913083076477%"),
    minWidth: wp("2.963913083076477%"),
    minHeight: 29.507400512695312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.176490783691406%"),
    top: 706.33984375
  },
  Text_6_107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_108: {
    width: wp("2.963913083076477%"),
    minWidth: wp("2.963913083076477%"),
    minHeight: 29.507400512695312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.43214988708496%"),
    top: 706.33984375
  },
  Text_6_108: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_109: {
    width: wp("5.034592151641846%"),
    minWidth: wp("5.034592151641846%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.170509338378906%"),
    top: 706.33984375
  },
  Text_6_109: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_111: {
    width: wp("7.592489719390868%"),
    minWidth: wp("7.592489719390868%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.27578353881836%"),
    top: 706.33984375
  },
  Text_6_111: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_112: {
    width: wp("7.592489719390868%"),
    minWidth: wp("7.592489719390868%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.16751861572266%"),
    top: 706.33984375
  },
  Text_6_112: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_113: {
    width: wp("7.592489719390868%"),
    minWidth: wp("7.592489719390868%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.69384384155273%"),
    top: 706.33984375
  },
  Text_6_113: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_114: {
    width: wp("7.592489719390868%"),
    minWidth: wp("7.592489719390868%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.35701560974121%"),
    top: 706.33984375
  },
  Text_6_114: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_110: {
    width: wp("6.4556461572647095%"),
    minWidth: wp("6.4556461572647095%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.64418411254883%"),
    top: 706.33984375
  },
  Text_6_110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_6_115: {
    width: wp("69.63165283203125%"),
    minWidth: wp("69.63165283203125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.0546875%"),
    top: 761.4281005859375
  },
  View_6_126: {
    width: wp("69.18503761291504%"),
    minWidth: wp("69.18503761291504%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.0546875%"),
    top: 780.13720703125
  },
  View_6_123: {
    width: wp("4.34436559677124%"),
    minWidth: wp("4.34436559677124%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.84066963195801%"),
    top: 0,
    backgroundColor: "rgba(97, 55, 254, 1)",
    borderTopLeftRadius: 5.196998119354248,
    borderTopRightRadius: 5.196998119354248,
    borderBottomLeftRadius: 5.196998119354248,
    borderBottomRightRadius: 5.196998119354248
  },
  View_6_116: {
    width: wp("3.4917330741882324%"),
    minWidth: wp("3.4917330741882324%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 15.59100341796875
  },
  Text_6_116: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_125: {
    width: wp("3.0451160669326782%"),
    minWidth: wp("3.0451160669326782%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.100756645202637%"),
    top: 15.59100341796875
  },
  Text_6_125: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_117: {
    width: wp("1.9488742947578428%"),
    minWidth: wp("1.9488742947578428%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.37746238708496%"),
    top: 15.59100341796875
  },
  Text_6_117: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_118: {
    width: wp("3.288725316524506%"),
    minWidth: wp("3.288725316524506%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.53837299346924%"),
    top: 15.59100341796875
  },
  Text_6_118: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_119: {
    width: wp("3.329326808452606%"),
    minWidth: wp("3.329326808452606%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.1970272064209%"),
    top: 15.59100341796875
  },
  Text_6_119: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_120: {
    width: wp("2.8421083092689514%"),
    minWidth: wp("2.8421083092689514%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.12936973571778%"),
    top: 15.59100341796875
  },
  Text_6_120: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_121: {
    width: wp("3.7353423237800594%"),
    minWidth: wp("3.7353423237800594%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.803062438964844%"),
    top: 15.59100341796875
  },
  Text_6_121: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_122: {
    width: wp("5.237599611282349%"),
    minWidth: wp("5.237599611282349%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.21810531616211%"),
    top: 15.59100341796875
  },
  Text_6_122: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_124: {
    width: wp("1.4210541546344757%"),
    minWidth: wp("1.4210541546344757%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.3835334777832%"),
    top: 8.315185546875
  },
  Text_6_124: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_249: {
    width: wp("69.18503761291504%"),
    minWidth: wp("69.18503761291504%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.9765625%"),
    top: 1279.33984375
  },
  View_6_250: {
    width: wp("4.34436559677124%"),
    minWidth: wp("4.34436559677124%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.84066963195801%"),
    top: 0,
    backgroundColor: "rgba(97, 55, 254, 1)",
    borderTopLeftRadius: 5.196998119354248,
    borderTopRightRadius: 5.196998119354248,
    borderBottomLeftRadius: 5.196998119354248,
    borderBottomRightRadius: 5.196998119354248
  },
  View_6_251: {
    width: wp("3.4917330741882324%"),
    minWidth: wp("3.4917330741882324%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 15.591064453125
  },
  Text_6_251: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_252: {
    width: wp("3.0451160669326782%"),
    minWidth: wp("3.0451160669326782%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.100756645202637%"),
    top: 15.591064453125
  },
  Text_6_252: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_253: {
    width: wp("1.9488742947578428%"),
    minWidth: wp("1.9488742947578428%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.37746238708496%"),
    top: 15.591064453125
  },
  Text_6_253: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_254: {
    width: wp("3.288725316524506%"),
    minWidth: wp("3.288725316524506%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.53837299346924%"),
    top: 15.591064453125
  },
  Text_6_254: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_255: {
    width: wp("3.329326808452606%"),
    minWidth: wp("3.329326808452606%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.1970272064209%"),
    top: 15.591064453125
  },
  Text_6_255: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_256: {
    width: wp("2.8421083092689514%"),
    minWidth: wp("2.8421083092689514%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.12936973571777%"),
    top: 15.591064453125
  },
  Text_6_256: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_257: {
    width: wp("3.7353423237800594%"),
    minWidth: wp("3.7353423237800594%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.803062438964844%"),
    top: 15.591064453125
  },
  Text_6_257: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_258: {
    width: wp("5.237599611282349%"),
    minWidth: wp("5.237599611282349%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.21810531616211%"),
    top: 15.591064453125
  },
  Text_6_258: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_259: {
    width: wp("1.4210541546344757%"),
    minWidth: wp("1.4210541546344757%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.3835334777832%"),
    top: 8.315185546875
  },
  Text_6_259: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_127: {
    width: wp("69.18503761291504%"),
    minWidth: wp("69.18503761291504%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.0546875%"),
    top: 850.81640625
  },
  View_6_128: {
    width: wp("4.34436559677124%"),
    minWidth: wp("4.34436559677124%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.84066963195801%"),
    top: 0,
    backgroundColor: "rgba(97, 55, 254, 1)",
    borderTopLeftRadius: 5.196998119354248,
    borderTopRightRadius: 5.196998119354248,
    borderBottomLeftRadius: 5.196998119354248,
    borderBottomRightRadius: 5.196998119354248
  },
  View_6_129: {
    width: wp("3.4917330741882324%"),
    minWidth: wp("3.4917330741882324%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 15.59100341796875
  },
  Text_6_129: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_130: {
    width: wp("3.0451160669326782%"),
    minWidth: wp("3.0451160669326782%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.100756645202637%"),
    top: 15.59100341796875
  },
  Text_6_130: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_131: {
    width: wp("1.9488742947578428%"),
    minWidth: wp("1.9488742947578428%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.37746238708496%"),
    top: 15.59100341796875
  },
  Text_6_131: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_132: {
    width: wp("3.288725316524506%"),
    minWidth: wp("3.288725316524506%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.53837299346924%"),
    top: 15.59100341796875
  },
  Text_6_132: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_133: {
    width: wp("3.329326808452606%"),
    minWidth: wp("3.329326808452606%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.1970272064209%"),
    top: 15.59100341796875
  },
  Text_6_133: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_134: {
    width: wp("2.8421083092689514%"),
    minWidth: wp("2.8421083092689514%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.12936973571778%"),
    top: 15.59100341796875
  },
  Text_6_134: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_135: {
    width: wp("3.7353423237800594%"),
    minWidth: wp("3.7353423237800594%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.803062438964844%"),
    top: 15.59100341796875
  },
  Text_6_135: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_136: {
    width: wp("5.237599611282349%"),
    minWidth: wp("5.237599611282349%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.21810531616211%"),
    top: 15.59100341796875
  },
  Text_6_136: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_137: {
    width: wp("1.4210541546344757%"),
    minWidth: wp("1.4210541546344757%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.3835334777832%"),
    top: 8.315185546875
  },
  Text_6_137: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_260: {
    width: wp("69.18503761291504%"),
    minWidth: wp("69.18503761291504%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.9765625%"),
    top: 1350.01904296875
  },
  View_6_261: {
    width: wp("4.34436559677124%"),
    minWidth: wp("4.34436559677124%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.84066963195801%"),
    top: 0,
    backgroundColor: "rgba(97, 55, 254, 1)",
    borderTopLeftRadius: 5.196998119354248,
    borderTopRightRadius: 5.196998119354248,
    borderBottomLeftRadius: 5.196998119354248,
    borderBottomRightRadius: 5.196998119354248
  },
  View_6_262: {
    width: wp("3.4917330741882324%"),
    minWidth: wp("3.4917330741882324%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 15.5909423828125
  },
  Text_6_262: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_263: {
    width: wp("3.0451160669326782%"),
    minWidth: wp("3.0451160669326782%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.100756645202637%"),
    top: 15.5909423828125
  },
  Text_6_263: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_264: {
    width: wp("1.9488742947578428%"),
    minWidth: wp("1.9488742947578428%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.37746238708496%"),
    top: 15.5909423828125
  },
  Text_6_264: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_265: {
    width: wp("3.288725316524506%"),
    minWidth: wp("3.288725316524506%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.53837299346924%"),
    top: 15.5909423828125
  },
  Text_6_265: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_266: {
    width: wp("3.329326808452606%"),
    minWidth: wp("3.329326808452606%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.1970272064209%"),
    top: 15.5909423828125
  },
  Text_6_266: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_267: {
    width: wp("2.8421083092689514%"),
    minWidth: wp("2.8421083092689514%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.12936973571777%"),
    top: 15.5909423828125
  },
  Text_6_267: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_268: {
    width: wp("3.7353423237800594%"),
    minWidth: wp("3.7353423237800594%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.803062438964844%"),
    top: 15.5909423828125
  },
  Text_6_268: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_269: {
    width: wp("5.237599611282349%"),
    minWidth: wp("5.237599611282349%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.21810531616211%"),
    top: 15.5909423828125
  },
  Text_6_269: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_270: {
    width: wp("1.4210541546344757%"),
    minWidth: wp("1.4210541546344757%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.3835334777832%"),
    top: 8.315185546875
  },
  Text_6_270: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_138: {
    width: wp("69.18503761291504%"),
    minWidth: wp("69.18503761291504%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.0546875%"),
    top: 921.49560546875
  },
  View_6_139: {
    width: wp("4.34436559677124%"),
    minWidth: wp("4.34436559677124%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.84066963195801%"),
    top: 0,
    backgroundColor: "rgba(97, 55, 254, 1)",
    borderTopLeftRadius: 5.196998119354248,
    borderTopRightRadius: 5.196998119354248,
    borderBottomLeftRadius: 5.196998119354248,
    borderBottomRightRadius: 5.196998119354248
  },
  View_6_140: {
    width: wp("3.4917330741882324%"),
    minWidth: wp("3.4917330741882324%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 15.59100341796875
  },
  Text_6_140: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_141: {
    width: wp("3.0451160669326782%"),
    minWidth: wp("3.0451160669326782%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.100756645202637%"),
    top: 15.59100341796875
  },
  Text_6_141: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_142: {
    width: wp("1.9488742947578428%"),
    minWidth: wp("1.9488742947578428%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.37746238708496%"),
    top: 15.59100341796875
  },
  Text_6_142: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_143: {
    width: wp("3.288725316524506%"),
    minWidth: wp("3.288725316524506%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.53837299346924%"),
    top: 15.59100341796875
  },
  Text_6_143: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_144: {
    width: wp("3.329326808452606%"),
    minWidth: wp("3.329326808452606%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.1970272064209%"),
    top: 15.59100341796875
  },
  Text_6_144: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_145: {
    width: wp("2.8421083092689514%"),
    minWidth: wp("2.8421083092689514%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.12936973571778%"),
    top: 15.59100341796875
  },
  Text_6_145: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_146: {
    width: wp("3.7353423237800594%"),
    minWidth: wp("3.7353423237800594%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.803062438964844%"),
    top: 15.59100341796875
  },
  Text_6_146: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_147: {
    width: wp("5.237599611282349%"),
    minWidth: wp("5.237599611282349%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.21810531616211%"),
    top: 15.59100341796875
  },
  Text_6_147: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_148: {
    width: wp("1.4210541546344757%"),
    minWidth: wp("1.4210541546344757%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.3835334777832%"),
    top: 8.31524658203125
  },
  Text_6_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_271: {
    width: wp("69.18503761291504%"),
    minWidth: wp("69.18503761291504%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.9765625%"),
    top: 1420.6982421875
  },
  View_6_272: {
    width: wp("4.34436559677124%"),
    minWidth: wp("4.34436559677124%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.84066963195801%"),
    top: 0,
    backgroundColor: "rgba(97, 55, 254, 1)",
    borderTopLeftRadius: 5.196998119354248,
    borderTopRightRadius: 5.196998119354248,
    borderBottomLeftRadius: 5.196998119354248,
    borderBottomRightRadius: 5.196998119354248
  },
  View_6_273: {
    width: wp("3.4917330741882324%"),
    minWidth: wp("3.4917330741882324%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 15.591064453125
  },
  Text_6_273: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_274: {
    width: wp("3.0451160669326782%"),
    minWidth: wp("3.0451160669326782%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.100756645202637%"),
    top: 15.591064453125
  },
  Text_6_274: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_275: {
    width: wp("1.9488742947578428%"),
    minWidth: wp("1.9488742947578428%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.37746238708496%"),
    top: 15.591064453125
  },
  Text_6_275: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_276: {
    width: wp("3.288725316524506%"),
    minWidth: wp("3.288725316524506%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.53837299346924%"),
    top: 15.591064453125
  },
  Text_6_276: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_277: {
    width: wp("3.329326808452606%"),
    minWidth: wp("3.329326808452606%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.1970272064209%"),
    top: 15.591064453125
  },
  Text_6_277: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_278: {
    width: wp("2.8421083092689514%"),
    minWidth: wp("2.8421083092689514%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.12936973571777%"),
    top: 15.591064453125
  },
  Text_6_278: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_279: {
    width: wp("3.7353423237800594%"),
    minWidth: wp("3.7353423237800594%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.803062438964844%"),
    top: 15.591064453125
  },
  Text_6_279: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_280: {
    width: wp("5.237599611282349%"),
    minWidth: wp("5.237599611282349%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.21810531616211%"),
    top: 15.591064453125
  },
  Text_6_280: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_281: {
    width: wp("1.4210541546344757%"),
    minWidth: wp("1.4210541546344757%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.3835334777832%"),
    top: 8.315185546875
  },
  Text_6_281: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_149: {
    width: wp("69.18503761291504%"),
    minWidth: wp("69.18503761291504%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.095290184020996%"),
    top: 992.1746826171875
  },
  View_6_150: {
    width: wp("4.34436559677124%"),
    minWidth: wp("4.34436559677124%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.84066486358643%"),
    top: 0.00006103515625,
    backgroundColor: "rgba(97, 55, 254, 1)",
    borderTopLeftRadius: 5.196998119354248,
    borderTopRightRadius: 5.196998119354248,
    borderBottomLeftRadius: 5.196998119354248,
    borderBottomRightRadius: 5.196998119354248
  },
  View_6_151: {
    width: wp("3.4917330741882324%"),
    minWidth: wp("3.4917330741882324%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 15.591064453125
  },
  Text_6_151: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_152: {
    width: wp("3.0451160669326782%"),
    minWidth: wp("3.0451160669326782%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.100756645202637%"),
    top: 15.591064453125
  },
  Text_6_152: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_153: {
    width: wp("1.9488742947578428%"),
    minWidth: wp("1.9488742947578428%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.37746238708496%"),
    top: 15.591064453125
  },
  Text_6_153: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_154: {
    width: wp("3.288725316524506%"),
    minWidth: wp("3.288725316524506%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.53837299346924%"),
    top: 15.591064453125
  },
  Text_6_154: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_155: {
    width: wp("3.329326808452606%"),
    minWidth: wp("3.329326808452606%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.197022438049316%"),
    top: 15.591064453125
  },
  Text_6_155: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_156: {
    width: wp("2.8421083092689514%"),
    minWidth: wp("2.8421083092689514%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.12936496734619%"),
    top: 15.591064453125
  },
  Text_6_156: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_157: {
    width: wp("3.7353423237800594%"),
    minWidth: wp("3.7353423237800594%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.80305767059326%"),
    top: 15.591064453125
  },
  Text_6_157: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_158: {
    width: wp("5.237599611282349%"),
    minWidth: wp("5.237599611282349%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.21811008453369%"),
    top: 15.591064453125
  },
  Text_6_158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_159: {
    width: wp("1.4210541546344757%"),
    minWidth: wp("1.4210541546344757%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.38352870941162%"),
    top: 8.31524658203125
  },
  Text_6_159: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_282: {
    width: wp("69.18503761291504%"),
    minWidth: wp("69.18503761291504%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.017165184020996%"),
    top: 1491.3773193359375
  },
  View_6_283: {
    width: wp("4.34436559677124%"),
    minWidth: wp("4.34436559677124%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.84066486358643%"),
    top: 0,
    backgroundColor: "rgba(97, 55, 254, 1)",
    borderTopLeftRadius: 5.196998119354248,
    borderTopRightRadius: 5.196998119354248,
    borderBottomLeftRadius: 5.196998119354248,
    borderBottomRightRadius: 5.196998119354248
  },
  View_6_284: {
    width: wp("3.4917330741882324%"),
    minWidth: wp("3.4917330741882324%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 15.591064453125
  },
  Text_6_284: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_285: {
    width: wp("3.0451160669326782%"),
    minWidth: wp("3.0451160669326782%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.100756645202637%"),
    top: 15.591064453125
  },
  Text_6_285: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_286: {
    width: wp("1.9488742947578428%"),
    minWidth: wp("1.9488742947578428%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.37746238708496%"),
    top: 15.591064453125
  },
  Text_6_286: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_287: {
    width: wp("3.288725316524506%"),
    minWidth: wp("3.288725316524506%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.53837299346924%"),
    top: 15.591064453125
  },
  Text_6_287: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_288: {
    width: wp("3.329326808452606%"),
    minWidth: wp("3.329326808452606%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.197022438049316%"),
    top: 15.591064453125
  },
  Text_6_288: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_289: {
    width: wp("2.8421083092689514%"),
    minWidth: wp("2.8421083092689514%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.1293649673462%"),
    top: 15.591064453125
  },
  Text_6_289: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_290: {
    width: wp("3.7353423237800594%"),
    minWidth: wp("3.7353423237800594%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.80305767059326%"),
    top: 15.591064453125
  },
  Text_6_290: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_291: {
    width: wp("5.237599611282349%"),
    minWidth: wp("5.237599611282349%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.21811008453369%"),
    top: 15.591064453125
  },
  Text_6_291: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_292: {
    width: wp("1.4210541546344757%"),
    minWidth: wp("1.4210541546344757%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.38352870941162%"),
    top: 8.3153076171875
  },
  Text_6_292: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_160: {
    width: wp("69.18503761291504%"),
    minWidth: wp("69.18503761291504%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.0546875%"),
    top: 1064.9327392578125
  },
  View_6_161: {
    width: wp("4.34436559677124%"),
    minWidth: wp("4.34436559677124%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.84066963195801%"),
    top: 0,
    backgroundColor: "rgba(97, 55, 254, 1)",
    borderTopLeftRadius: 5.196998119354248,
    borderTopRightRadius: 5.196998119354248,
    borderBottomLeftRadius: 5.196998119354248,
    borderBottomRightRadius: 5.196998119354248
  },
  View_6_162: {
    width: wp("3.4917330741882324%"),
    minWidth: wp("3.4917330741882324%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 15.5909423828125
  },
  Text_6_162: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_163: {
    width: wp("3.0451160669326782%"),
    minWidth: wp("3.0451160669326782%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.100756645202637%"),
    top: 15.5909423828125
  },
  Text_6_163: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_164: {
    width: wp("1.9488742947578428%"),
    minWidth: wp("1.9488742947578428%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.37746238708496%"),
    top: 15.5909423828125
  },
  Text_6_164: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_165: {
    width: wp("3.288725316524506%"),
    minWidth: wp("3.288725316524506%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.53837299346924%"),
    top: 15.5909423828125
  },
  Text_6_165: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_166: {
    width: wp("3.329326808452606%"),
    minWidth: wp("3.329326808452606%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.1970272064209%"),
    top: 15.5909423828125
  },
  Text_6_166: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_167: {
    width: wp("2.8421083092689514%"),
    minWidth: wp("2.8421083092689514%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.12936973571778%"),
    top: 15.5909423828125
  },
  Text_6_167: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_168: {
    width: wp("3.7353423237800594%"),
    minWidth: wp("3.7353423237800594%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.803062438964844%"),
    top: 15.5909423828125
  },
  Text_6_168: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_169: {
    width: wp("5.237599611282349%"),
    minWidth: wp("5.237599611282349%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.21810531616211%"),
    top: 15.5909423828125
  },
  Text_6_169: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_170: {
    width: wp("1.4210541546344757%"),
    minWidth: wp("1.4210541546344757%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.3835334777832%"),
    top: 8.315185546875
  },
  Text_6_170: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_293: {
    width: wp("69.18503761291504%"),
    minWidth: wp("69.18503761291504%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.9765625%"),
    top: 1564.1353759765625
  },
  View_6_294: {
    width: wp("4.34436559677124%"),
    minWidth: wp("4.34436559677124%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.84066963195801%"),
    top: 0,
    backgroundColor: "rgba(97, 55, 254, 1)",
    borderTopLeftRadius: 5.196998119354248,
    borderTopRightRadius: 5.196998119354248,
    borderBottomLeftRadius: 5.196998119354248,
    borderBottomRightRadius: 5.196998119354248
  },
  View_6_295: {
    width: wp("3.4917330741882324%"),
    minWidth: wp("3.4917330741882324%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 15.5909423828125
  },
  Text_6_295: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_296: {
    width: wp("3.0451160669326782%"),
    minWidth: wp("3.0451160669326782%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.100756645202637%"),
    top: 15.5909423828125
  },
  Text_6_296: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_297: {
    width: wp("1.9488742947578428%"),
    minWidth: wp("1.9488742947578428%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.37746238708496%"),
    top: 15.5909423828125
  },
  Text_6_297: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_298: {
    width: wp("3.288725316524506%"),
    minWidth: wp("3.288725316524506%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.53837299346924%"),
    top: 15.5909423828125
  },
  Text_6_298: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_299: {
    width: wp("3.329326808452606%"),
    minWidth: wp("3.329326808452606%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.1970272064209%"),
    top: 15.5909423828125
  },
  Text_6_299: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_300: {
    width: wp("2.8421083092689514%"),
    minWidth: wp("2.8421083092689514%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.12936973571777%"),
    top: 15.5909423828125
  },
  Text_6_300: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_301: {
    width: wp("3.7353423237800594%"),
    minWidth: wp("3.7353423237800594%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.803062438964844%"),
    top: 15.5909423828125
  },
  Text_6_301: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_302: {
    width: wp("5.237599611282349%"),
    minWidth: wp("5.237599611282349%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.21810531616211%"),
    top: 15.5909423828125
  },
  Text_6_302: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_303: {
    width: wp("1.4210541546344757%"),
    minWidth: wp("1.4210541546344757%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.3835334777832%"),
    top: 8.315185546875
  },
  Text_6_303: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_171: {
    width: wp("69.18503761291504%"),
    minWidth: wp("69.18503761291504%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.135892868041992%"),
    top: 1137.690673828125
  },
  View_6_172: {
    width: wp("4.34436559677124%"),
    minWidth: wp("4.34436559677124%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.84066963195801%"),
    top: 0,
    backgroundColor: "rgba(97, 55, 254, 1)",
    borderTopLeftRadius: 5.196998119354248,
    borderTopRightRadius: 5.196998119354248,
    borderBottomLeftRadius: 5.196998119354248,
    borderBottomRightRadius: 5.196998119354248
  },
  View_6_173: {
    width: wp("3.4917330741882324%"),
    minWidth: wp("3.4917330741882324%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 15.59100341796875
  },
  Text_6_173: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_174: {
    width: wp("3.0451160669326782%"),
    minWidth: wp("3.0451160669326782%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.100751876831055%"),
    top: 15.59100341796875
  },
  Text_6_174: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_175: {
    width: wp("1.9488742947578428%"),
    minWidth: wp("1.9488742947578428%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.37746238708496%"),
    top: 15.59100341796875
  },
  Text_6_175: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_176: {
    width: wp("3.288725316524506%"),
    minWidth: wp("3.288725316524506%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.538368225097656%"),
    top: 15.59100341796875
  },
  Text_6_176: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_177: {
    width: wp("3.329326808452606%"),
    minWidth: wp("3.329326808452606%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.1970272064209%"),
    top: 15.59100341796875
  },
  Text_6_177: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_178: {
    width: wp("2.8421083092689514%"),
    minWidth: wp("2.8421083092689514%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.12936973571778%"),
    top: 15.59100341796875
  },
  Text_6_178: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_179: {
    width: wp("3.7353423237800594%"),
    minWidth: wp("3.7353423237800594%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.80305290222168%"),
    top: 15.59100341796875
  },
  Text_6_179: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_180: {
    width: wp("5.237599611282349%"),
    minWidth: wp("5.237599611282349%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.218095779418945%"),
    top: 15.59100341796875
  },
  Text_6_180: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_181: {
    width: wp("1.4210541546344757%"),
    minWidth: wp("1.4210541546344757%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.38352394104004%"),
    top: 8.315185546875
  },
  Text_6_181: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_304: {
    width: wp("69.18503761291504%"),
    minWidth: wp("69.18503761291504%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.057767868041992%"),
    top: 1636.893310546875
  },
  View_6_305: {
    width: wp("4.34436559677124%"),
    minWidth: wp("4.34436559677124%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.84066963195801%"),
    top: 0,
    backgroundColor: "rgba(97, 55, 254, 1)",
    borderTopLeftRadius: 5.196998119354248,
    borderTopRightRadius: 5.196998119354248,
    borderBottomLeftRadius: 5.196998119354248,
    borderBottomRightRadius: 5.196998119354248
  },
  View_6_306: {
    width: wp("3.4917330741882324%"),
    minWidth: wp("3.4917330741882324%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 15.591064453125
  },
  Text_6_306: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_307: {
    width: wp("3.0451160669326782%"),
    minWidth: wp("3.0451160669326782%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.100751876831055%"),
    top: 15.591064453125
  },
  Text_6_307: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_308: {
    width: wp("1.9488742947578428%"),
    minWidth: wp("1.9488742947578428%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.37746238708496%"),
    top: 15.591064453125
  },
  Text_6_308: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_309: {
    width: wp("3.288725316524506%"),
    minWidth: wp("3.288725316524506%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.538368225097656%"),
    top: 15.591064453125
  },
  Text_6_309: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_310: {
    width: wp("3.329326808452606%"),
    minWidth: wp("3.329326808452606%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.1970272064209%"),
    top: 15.591064453125
  },
  Text_6_310: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_311: {
    width: wp("2.8421083092689514%"),
    minWidth: wp("2.8421083092689514%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.12936973571777%"),
    top: 15.591064453125
  },
  Text_6_311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_312: {
    width: wp("3.7353423237800594%"),
    minWidth: wp("3.7353423237800594%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.80305290222168%"),
    top: 15.591064453125
  },
  Text_6_312: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_313: {
    width: wp("5.237599611282349%"),
    minWidth: wp("5.237599611282349%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.218095779418945%"),
    top: 15.591064453125
  },
  Text_6_313: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_314: {
    width: wp("1.4210541546344757%"),
    minWidth: wp("1.4210541546344757%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.38352394104004%"),
    top: 8.315185546875
  },
  Text_6_314: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_182: {
    width: wp("69.18503761291504%"),
    minWidth: wp("69.18503761291504%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.135892868041992%"),
    top: 1215.6456298828125
  },
  View_6_183: {
    width: wp("4.34436559677124%"),
    minWidth: wp("4.34436559677124%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.84066963195801%"),
    top: 0,
    backgroundColor: "rgba(97, 55, 254, 1)",
    borderTopLeftRadius: 5.196998119354248,
    borderTopRightRadius: 5.196998119354248,
    borderBottomLeftRadius: 5.196998119354248,
    borderBottomRightRadius: 5.196998119354248
  },
  View_6_184: {
    width: wp("3.4917330741882324%"),
    minWidth: wp("3.4917330741882324%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 15.59100341796875
  },
  Text_6_184: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_185: {
    width: wp("3.0451160669326782%"),
    minWidth: wp("3.0451160669326782%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.100751876831055%"),
    top: 15.59100341796875
  },
  Text_6_185: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_186: {
    width: wp("1.9488742947578428%"),
    minWidth: wp("1.9488742947578428%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.37746238708496%"),
    top: 15.59100341796875
  },
  Text_6_186: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_187: {
    width: wp("3.288725316524506%"),
    minWidth: wp("3.288725316524506%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.538368225097656%"),
    top: 15.59100341796875
  },
  Text_6_187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_188: {
    width: wp("3.329326808452606%"),
    minWidth: wp("3.329326808452606%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.1970272064209%"),
    top: 15.59100341796875
  },
  Text_6_188: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_189: {
    width: wp("2.8421083092689514%"),
    minWidth: wp("2.8421083092689514%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.12936973571778%"),
    top: 15.59100341796875
  },
  Text_6_189: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_190: {
    width: wp("3.7353423237800594%"),
    minWidth: wp("3.7353423237800594%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.80305290222168%"),
    top: 15.59100341796875
  },
  Text_6_190: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_191: {
    width: wp("5.237599611282349%"),
    minWidth: wp("5.237599611282349%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.218095779418945%"),
    top: 15.59100341796875
  },
  Text_6_191: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_192: {
    width: wp("1.4210541546344757%"),
    minWidth: wp("1.4210541546344757%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.38352394104004%"),
    top: 8.31524658203125
  },
  Text_6_192: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_315: {
    width: wp("69.18503761291504%"),
    minWidth: wp("69.18503761291504%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.057767868041992%"),
    top: 1714.8482666015625
  },
  View_6_316: {
    width: wp("4.34436559677124%"),
    minWidth: wp("4.34436559677124%"),
    height: 44.694183349609375,
    minHeight: 44.694183349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.84066963195801%"),
    top: 0,
    backgroundColor: "rgba(97, 55, 254, 1)",
    borderTopLeftRadius: 5.196998119354248,
    borderTopRightRadius: 5.196998119354248,
    borderBottomLeftRadius: 5.196998119354248,
    borderBottomRightRadius: 5.196998119354248
  },
  View_6_317: {
    width: wp("3.4917330741882324%"),
    minWidth: wp("3.4917330741882324%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 15.591064453125
  },
  Text_6_317: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_318: {
    width: wp("3.0451160669326782%"),
    minWidth: wp("3.0451160669326782%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.100751876831055%"),
    top: 15.591064453125
  },
  Text_6_318: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_319: {
    width: wp("1.9488742947578428%"),
    minWidth: wp("1.9488742947578428%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.37746238708496%"),
    top: 15.591064453125
  },
  Text_6_319: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_320: {
    width: wp("3.288725316524506%"),
    minWidth: wp("3.288725316524506%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.538368225097656%"),
    top: 15.591064453125
  },
  Text_6_320: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_321: {
    width: wp("3.329326808452606%"),
    minWidth: wp("3.329326808452606%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.1970272064209%"),
    top: 15.591064453125
  },
  Text_6_321: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_322: {
    width: wp("2.8421083092689514%"),
    minWidth: wp("2.8421083092689514%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.12936973571777%"),
    top: 15.591064453125
  },
  Text_6_322: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_323: {
    width: wp("3.7353423237800594%"),
    minWidth: wp("3.7353423237800594%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.80305290222168%"),
    top: 15.591064453125
  },
  Text_6_323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_324: {
    width: wp("5.237599611282349%"),
    minWidth: wp("5.237599611282349%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.218095779418945%"),
    top: 15.591064453125
  },
  Text_6_324: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15.605525970458984,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_325: {
    width: wp("1.4210541546344757%"),
    minWidth: wp("1.4210541546344757%"),
    minHeight: 29.10318946838379,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.38352394104004%"),
    top: 8.315185546875
  },
  Text_6_325: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.605525970458984,
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
