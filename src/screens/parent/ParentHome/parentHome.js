import {
  Alert,
  SafeAreaView,
  View,
  BackHandler,
  ScrollView,
  TouchableOpacity,
  Animated, Easing
} from "react-native";
import { Badge, Button, Divider, Image, Text, Input, useTheme, } from '@rneui/themed';
import { TouchableRipple } from "react-native-paper";
import React, { useContext, useEffect, useRef, useState } from "react";
import useStyles from "./parentHome.style";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Device } from '../../../utils/constant/constant'
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomStatusBar from "../../../component/gm-school/CustomStatusBar/customStatusBar";
import Header from "../../../component/gm-school/Header/header";
import BottomTabNavigator from "../../../navigation/bottomtab/bottomTabNavigator";
import { pipe, capitalizeFirstOfEachWord, truncateStr } from "../../../utils/helper/helper";
import RenderIf from "../../../utils/helper/renderIf";

const ParentHome = ({ navigation }) => {
  const style = useStyles();
  const { theme } = useTheme();

  const [userInfo, setUserInfo] = useState({});
  // const { setNotiCount, userUnreadNotiCount, selectedChild } = useContext(AuthContext);
  const [notice, setNotice] = useState(null);
  // const latestNoticeId = useSelector(getLatestNoticeId)
  const [readNotiList, setReadNotiList] = useState(null);
  const [currentNoticeId, setCurrentNoticeId] = useState(null);

  const [expanded, setExpanded] = useState(true);
  const animationWidth = useRef(new Animated.Value(65)).current;

  const textOpacity = {
    opacity: animationWidth.interpolate({
      inputRange: [120, Device.width - 60],
      outputRange: [0, 1],
    }),
  }

  const closeOpacity = {
    opacity: animationWidth.interpolate({
      inputRange: [160, Device.width - 60],
      outputRange: [0, 1],
    }),
  }

  const getUserInfo = async () => {
    await AsyncStorage.getItem("userInfo")
      .then((res) => {
        setUserInfo(JSON.parse(res));
      })
      .catch((e) => console.log(e));
  };

  const goToReportCardDetail = () => {
    // navigation.navigate('ReportCardDetail', { studentId: selectedChild.id, academic_year: selectedChild.academic_year, student_no: selectedChild.student_no, entry_no: selectedChild.entry_no })
  }

  const showAlert = () =>
    Alert.alert("Book List", "This feature is not available right now.", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  useEffect(() => {
    getUserInfo();

    const backAction = () => {
      if (navigation.isFocused()) {
        Alert.alert("", "Are You Sure You Want To Exit?", [
          {
            text: "cancel",
            onPress: () => null,
            style: "cancel",
          },
          { text: "ok", onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      }
    };

    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const fetchNoticeDetail = () => {
    console.log(latestNoticeId.notice_id);
    TeacherService.getNoticeDetailByStudentId(latestNoticeId.notice_id, selectedChild?.id, selectedChild?.campus_id, userInfo.token)
      .then((res) => {
        setNotice(res.data)
      }).catch(e => console.log(e))
  }

  const handleClick = (item) => {
    // navigation.navigate("Notice", { noticeId: item.id })
  }


  return (
    <>
      <CustomStatusBar />
      <SafeAreaView style={style.container}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={style.body}>
            <View style={style.row}>
              <TouchableOpacity
                borderless={true}
                activeOpacity={0.6}
                // onPress={() => { navigation.navigate("AttendanceList") }}
                onPress={() => { console.log("ok"); }}
                style={style.touchableWrapper}
              >
                <View style={style.squareCard}>
                  <Image
                    style={style.image}
                    source={require("../../../../assets/image/attendance.png")}
                  />
                  <Text style={style.btnTxt}>Attendance</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                borderless={true}
                activeOpacity={0.6}
                onPress={() => { navigation.navigate("Timetable") }}
                style={style.touchableWrapper}
              >
                <View style={style.squareCard}>
                  <Image
                    style={style.image}
                    source={require("../../../../assets/image/schedule.png")}
                  />
                  <Text style={style.btnTxt}>Timetable</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                borderless={true}
                activeOpacity={0.6}
                onPress={goToReportCardDetail}
                style={style.touchableWrapper}
              >
                <View style={style.squareCard}>
                  <Image
                    style={style.image}
                    source={require("../../../../assets/image/report.png")}
                  />
                  <Text style={style.btnTxt}>Report Card</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                borderless={true}
                activeOpacity={0.6}
                onPress={() => { navigation.navigate("CourseDetailList") }}
                style={style.touchableWrapper}
              >
                <View style={style.squareCard}>
                  <Image
                    style={style.image}
                    source={require("../../../../assets/image/online-course.png")}
                  />
                  <Text style={style.btnTxt}>Course</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                borderless={true}
                activeOpacity={0.6}
                onPress={() => { navigation.navigate("PaymentDetail", { id: null, student_no: null }) }}
                style={style.touchableWrapper}
              >
                <View style={style.squareCard}>
                  <Image
                    style={style.image}
                    source={require("../../../../assets/image/invoice.png")}
                  />
                  <Text style={style.btnTxt}>Payment</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                borderless={true}
                activeOpacity={0.6}
                onPress={() => {
                  navigation.navigate("FerrySchedule")
                }}
                style={style.touchableWrapper}
              >
                <View style={style.squareCard}>
                  <Image
                    // style={style.image}
                    style={{ width: 60, height: 75 }}
                    source={require("../../../../assets/image/ferry.png")}
                  />
                  <Text style={style.btnTxt}>Ferry</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                borderless={true}
                activeOpacity={0.6}
                onPress={() => {
                  navigation.navigate("UpdatePassword", {
                    type: userInfo.usertype,
                    id: userInfo.account?.id,
                    firstLogin: 0,
                    campusId: selectedChild?.campus_id,
                  });
                }}
                style={style.touchableWrapper}
              >
                <View style={style.squareCard}>
                  <Image
                    style={style.image}
                    source={require("../../../../assets/image/resetPW.png")}
                  />
                  <Text style={style.btnTxt}>Update Password</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        {!notice &&
          <TouchableOpacity borderless={true} style={[style.rippleContainer]} onPress={() => { setExpanded(!expanded) }}>
            <Animated.View style={[style.Cardcontainer, { width: animationWidth }]}>
              <RenderIf isTrue={!expanded && currentNoticeId && latestNoticeId?.notice_id != currentNoticeId}>
                <View style={style.newNoti}></View>
              </RenderIf>
              <Ionicons
                color={theme.colors.orange}
                name="megaphone-outline"
                size={24}
                onPress={() => setExpanded(!expanded)}
              />
              <Animated.View style={[{ width: "85%", }, textOpacity]} >
                <TouchableOpacity activeOpacity={0.7} style={style.textContainer} onPress={() => handleClick(notice)}>
                  <Text style={style.titleText}>{truncateStr(notice?.title, 20)}</Text>
                  <Text style={style.messageText}>{truncateStr(notice?.message, 30)}</Text>
                </TouchableOpacity>
              </Animated.View>
              <Animated.View style={closeOpacity}>
                <Ionicons
                  color={theme.colors.silver}
                  name="close-circle-outline"
                  size={22}
                  onPress={() => setExpanded(!expanded)}
                />
              </Animated.View>
              {/* <Text style={style.time(notice?.status == 2 || readNotiList.includes(notice?.id))}>{moment(notice.created_at).fromNow()}</Text> */}
            </Animated.View>
          </TouchableOpacity>
        }
      </SafeAreaView>
    </>
  );
};

export default ParentHome;
