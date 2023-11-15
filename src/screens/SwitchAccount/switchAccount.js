import { SafeAreaView, View, Pressable, ScrollView, FlatList, Alert, BackHandler, TouchableOpacity, Modal } from "react-native";
import { Button, Divider, Image, Text, Input, useTheme } from '@rneui/themed';
import { useEffect, useState } from "react";
import { ImageResource } from "../../utils/constant/resource";
import RenderIf from "../../utils/helper/renderIf";
import useStyles from "./switchAccount.style";
import { pipe, capitalizeFirstOfEachWord, truncateStr } from "../../utils/helper/helper";
import CustomAlert from "../../component/gm-school/CustomAlert/customAlert";

const filterCurrentUserList = [
    {
        id: 1,
        name: 'Orange',
        iconSource: 'female',
        loginId: 'S00088',
    },
    {
        id: 2,
        name: 'Strawberrry',
        iconSource: 'female',
        loginId: 'S00089',
    },
    {
        id: 3,
        name: 'Peach',
        iconSource: 'female',
        loginId: 'S00009',
    }
];

const SwitchAccount = ({ closeModal = () => { }, isUserLogout = false }) => {
    const style = useStyles();
    const [showCustomAlert, setShowCustomAlert] = useState(false)
    const [alertMsg, setAlertMsg] = useState()
    const [alertType, setAlertType] = useState()
    const [currentPressedUser, setCurrentPressedUser] = useState({})

    const handleAlertSubmit = () => {
        if (alertType == "DeleteConfirm") removeAccount(currentPressedUser)
        if (alertType == "SwitchConfirm") switchAccount();
        setShowCustomAlert(false)
    }

    const filterCurrentLoginUser = (userList) => {
        return userList
    }

    const removeAccount = (selectedUser) => {
        closeModal()
    }
    const switchAccount = async () => {
    }


    const renderItem = ({ item: user }) => {
        return (
            <TouchableOpacity
                style={style.Cardcontainer}
                activeOpacity={.7}
                onPress={() => {
                    setShowCustomAlert(true)
                    setAlertType("SwitchConfirm")
                    setCurrentPressedUser(user)
                    setAlertMsg(`Are you sure you want to switch into ${capitalizeFirstOfEachWord(user.name)}'s Account?`)
                }}
                key={user.id}
            >
                <>
                    <View style={style.studentInfoContainer}>
                        <Image source={ImageResource.icon[user.iconSource ?? 'male']} style={style.image} />
                        <View style={style.nameContainer}>
                            <Text style={style.text}>
                                {pipe(capitalizeFirstOfEachWord, truncateStr)(user.name)}
                            </Text>
                            <Text style={style.text}>
                                Login ID: {user.loginId}
                            </Text>
                        </View>
                    </View>
                    <RenderIf isTrue={!isUserLogout}>
                        <TouchableOpacity onPress={() => {
                            setShowCustomAlert(true)
                            setAlertType("DeleteConfirm")
                            setAlertMsg("Remove This Account?")
                            setCurrentPressedUser(user)
                        }}>
                            <Image
                                source={ImageResource.icon.cross}
                                style={style.icon}
                            />
                        </TouchableOpacity>
                    </RenderIf>
                </>
            </TouchableOpacity>
        );
    };
    const renderListEmpty = () => {
        return (
            <View style={{ height: 100, alignItems: 'center' }}>
                <Text style={style.emptyText}>No User Has Found</Text>
            </View>
        )
    }
    const renderFlatList = () => (
        <FlatList
            data={filterCurrentUserList}
            overScrollMode="never"
            style={{ marginTop: 20 }}
            contentContainerStyle={{ marginHorizontal: 22 }}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
            ListEmptyComponent={renderListEmpty}
        />
    )

    return (
        <>
            <RenderIf isTrue={isUserLogout}>
                <Modal animationType='slide' transparent={true}>
                    <Pressable style={style.backdrop} onPress={closeModal} />
                    <CustomAlert
                        modalVisible={showCustomAlert}
                        hasCancel={true}
                        message={alertMsg}
                        handleCancel={() => setShowCustomAlert(false)}
                        handleOk={handleAlertSubmit}
                    />
                    <View style={style.modalcontainer}>
                        <View style={style.customHandleIndicator}>
                            <View style={style.customHandleLineWrapper}>
                                <Text style={style.titleTxt}>Switch Account</Text>
                            </View>
                            <TouchableOpacity style={style.closeBtn} onPress={closeModal}>
                                <Text style={style.closeText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                        {renderFlatList()}
                    </View>
                </Modal>
            </RenderIf>
        </>
    );
};

export default SwitchAccount;
