import {
  Alert,
  SafeAreaView,
  View,
  BackHandler,
  ScrollView,
  TouchableOpacity,
  Animated, Easing
} from "react-native";
import { Badge, Button, Divider, Image, Text, Input, useTheme, Icon } from '@rneui/themed';
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
import { ImageResource } from "../../../utils/constant/resource";


const ParentHome = ({ navigation }) => {
  const style = useStyles();
  const { theme } = useTheme();

  const [userInfo, setUserInfo] = useState({});
  // const { setNotiCount, userUnreadNotiCount, selectedChild } = useContext(AuthContext);
  //const [notice, setNotice] = useState(null);
  const notice = {
    title: 'ok',
    text: 'owijfi'
  }
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

  const handleClick = (item) => {
    // navigation.navigate("Notice", { noticeId: item.id })
  }
  const card = (title, imageSource, handleNavigate) => {
    return (
      <TouchableOpacity
        borderless={true}
        activeOpacity={0.6}
        onPress={handleNavigate}
        style={style.touchableWrapper}
      >
        <View style={style.squareCard}>
          <Image style={style.image} source={imageSource} />
          <Text style={style.btnTxt}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const cardData = [
    {
      onPress: () => navigation.navigate('AttendanceList'),
      imageSource: ImageResource.home.attendance,
      title: "Attendance",
    },
    {
      onPress: () => navigation.navigate('Timetable'),
      imageSource: ImageResource.home.timetable,
      title: "Timetable",
    },
    {
      onPress: () => navigation.navigate('ReportCardDetail', {
        studentId: selectedChild.id, academic_year: selectedChild.academic_year, student_no: selectedChild.student_no, entry_no: selectedChild.entry_no
      }),
      imageSource: ImageResource.home.report,
      title: "Report Card",
    },
    {
      onPress: () => navigation.navigate('CourseDetailList'),
      imageSource: ImageResource.home.course,
      title: "Course",
    },
    {
      onPress: () => navigation.navigate('PaymentDetail'),
      imageSource: ImageResource.home.payment,
      title: "Payment",
    },
    {
      onPress: () => navigation.navigate('FerrySchedule'),
      imageSource: ImageResource.home.ferry,
      title: "Ferry",
    },
    {
      onPress: () => navigation.navigate('UpdatePassword'),
      imageSource: ImageResource.home.updatePW,
      title: "Update Password",
    },
  ]

  return (
    <>
      <CustomStatusBar />
      <SafeAreaView style={style.container}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={style.body}>
            <View style={style.row}>
              {cardData.map((data, index) => (
                <React.Fragment key={index}>
                  {card(data.title, data.imageSource, data.onPress)}
                </React.Fragment>
              ))}
            </View>
          </View>
        </ScrollView>

        {notice &&
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
            </Animated.View>
          </TouchableOpacity>
        }
      </SafeAreaView>
    </>
  );
};

export default ParentHome;
