import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { View, TouchableOpacity,Modal } from "react-native";
import { Badge, Button, Divider, Image, Text, Input, useTheme, } from '@rneui/themed';
import useStyles from "./header.style";
import { Menu } from "react-native-paper";
// import style from "./header.style";
import RenderIf from "../../../utils/helper/renderIf";
import Ionicons from "react-native-vector-icons/Ionicons";
// import { APP_IMG, APP_NAME, Color, IMAGE_URL } from "../../../utils/constant/constant";
// import { useRoute } from '@react-navigation/native';
// import { useDispatch, useSelector } from "react-redux";
// import { reset } from "../../../store/roomMessageSlice";
// import { changeNotiFlag, changeTotalUnreadMsgCount, getConversationList, getTotalUnreadCount, isNotiTrigger, resetConversation, resetTotalUnreadMsgCount } from "../../../store/conversationSlice";
// import { Audio } from 'expo-av';
// import { useEffect } from "react";
// import ChatService from "../../../services/chatService";
import { ImageResource } from "../../../utils/constant/resource";

const userInfo = { "account": { "campus_id": 2, "campus_master": { "address": "Yangon", "campus_code": "0001", "campus_name": "BIB Campus 1", "created_at": "2023-02-15 11:36:54", "created_id": 1, "deleted_at": null, "id": 2, "latitude": null, "longitude": null, "phone1": "09799253293", "phone2": null, "updated_at": null, "updated_id": null }, "contact_address": "Pha-An", "dob": "1990-02-28", "email": null, "father_name": "U Aung", "gender": 1, "id": 1, "join_date": "2023-02-17", "marital_status": 1, "name": "U Zarni", "nationality": "Burmese", "nrc_number": "၁၀/သထန(နိုင်)၀၉၈၇၆၅", "permanent_address": null, "phone1": "09771300604", "phone2": null, "profile_name": null, "religion": null, "teacher_no": "T000001", "teacher_type": 1 }, "success": true, "teacher_id": 1, "token": "1057|rqNix60gBhLdzSKeSTqXlFHZxMXbBCLRkFDGVl7W", "usertype": "teacher" }
const Header = () => {

    const { theme } = useTheme();
    const isPreviousUserExist = true;
    const route = {
        name: 'ChooseChild'
    };
    const totalUnreadMessage = 2;

    const [visible, setVisible] = useState(false);
    const [sound, setSound] = useState(null);
    const openMenu = () => setVisible(true); 7
    const closeMenu = () => setVisible(false);
    // const notiFlag = useSelector(isNotiTrigger);
    // const conversationList = useSelector(getConversationList);
    // const [newConversation, setNewConversation] = useState([]);
    // const totalUnreadMessage = useSelector(getTotalUnreadCount);
    // const isFocused = useIsFocused();
    // const route = useRoute();
    // const dispatch = useDispatch();
    const [pushToken, setPushToken] = useState(null);
    const [showSwitchAccountModal, setShowSwitchAccountModal] = useState(false)


    const style = useStyles()
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleProfileOption = (option) => {
        // Handle the selected profile option
        console.log(`Selected option: ${option}`);
        toggleModal(); // Close the modal after selecting an option
    };

    return (
        <>
            <View style={style.container}>
                <View style={style.headerContainer}>
                    <View style={style.logoContainer}>
                        <Image
                            source={ImageResource.logo.bib_logo}
                            style={style.logo}
                        />
                        <Text style={style.title}>BIB Institute</Text>
                    </View>
                    <View style={{ flexDirection: "row" }} >
                       
                        {/* <Menu
                            visible={visible}
                            onDismiss={closeMenu}
                            contentStyle={{ width: 200, marginTop: 25 }}
                            anchor={
                                <TouchableOpacity onPress={openMenu}>
                                    <RenderIf isTrue={userInfo?.usertype == "parent"}>
                                        <Image
                                            source={require("../../../../assets/image/student_logo.png")}
                                            style={style.profile}
                                        />
                                    </RenderIf>
                                    <RenderIf isTrue={userInfo?.usertype == "teacher"}>
                                        <Image
                                            source={require("../../../../assets/image/header_profile.png")}
                                            style={style.profile}
                                        />
                                    </RenderIf>
                                    <RenderIf isTrue={userInfo?.usertype == "admin"}>
                                        <Image
                                            source={require("../../../../assets/image/header_profile.png")}
                                            style={style.profile}
                                        />
                                    </RenderIf>
                                </TouchableOpacity>
                            }>
                            <RenderIf
                                isTrue={
                                    userInfo?.usertype == "teacher" ||
                                    (userInfo?.usertype == "parent" && selectedChild)
                                }
                            >
                                <>
                                    <Menu.Item onPress={() => handleNavigation()} title="Profile" />
                                    <Divider />
                                    {userInfo?.usertype == "parent" && route.name != "ChooseChild" &&
                                        <Menu.Item onPress={() => { setVisible(false); setShowNotiIcon(false); }} title="Choose Child" />
                                    }
                                    <Divider />
                                </>
                            </RenderIf>
                            <RenderIf isTrue={userInfo?.usertype == 'admin'}>
                                <Menu.Item title={userInfo?.account?.admin_no} />
                                <Divider />
                            </RenderIf>
                            <RenderIf isTrue={isPreviousUserExist}>
                                <Menu.Item onPress={() => {
                                    setVisible(false)
                                    //   navigation.navigate("SwitchAccount")
                                    // setShowSwitchAccountModal(true)
                                }} title="Switch Account" />
                                <Divider />
                            </RenderIf>
                            <Menu.Item title="Log Out" />
                        </Menu>
                        <RenderIf isTrue={(userInfo?.usertype == "teacher" || (userInfo?.usertype == "admin" && userInfo?.account.role == 1) ||
                            (userInfo?.usertype == "parent" && route.name != "ChooseChild" && selectedChild)) && route.name != "ChatList"}>
                            <TouchableOpacity style={style.chat} >
                                <Ionicons
                                    color={theme.colors.white}
                                    name="chatbubbles"
                                    size={20}
                                />
                                <RenderIf isTrue={totalUnreadMessage && totalUnreadMessage > 0}>
                                    <View style={style.chatCountContainer} >
                                        <Text style={style.chatCount}>{totalUnreadMessage}</Text></View>
                                </RenderIf>
                            </TouchableOpacity>
                        </RenderIf> */}
                    </View>
                </View>
            </View>
        </>
    );
};

export default Header;
