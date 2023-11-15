import { SafeAreaView, View, Pressable, ScrollView, FlatList, Alert, BackHandler, TouchableOpacity, Modal } from "react-native";
import { Button, Divider, Image, Text, Input, useTheme } from '@rneui/themed';
import { useEffect, useState } from "react";
import { ImageResource } from "../../utils/constant/resource";
import RenderIf from "../../utils/helper/renderIf";
import useStyles from "./switchAccount.style";

const SwitchAccount = ({ closeModal = () => { }, isUserLogout = false }) => {
    const style = useStyles();
    return (
        <>
            {/* <RenderIf isTrue={isUserLogout}> */}
                <Modal animationType='slide' transparent={true}>
                    <Pressable style={style.backdrop} onPress={closeModal} />
                    <View style={style.modalcontainer}>
                        <View style={style.customHandleIndicator}>
                            <View style={style.customHandleLineWrapper}>
                                <Text style={style.titleTxt}>Switch Account</Text>
                            </View>
                            <TouchableOpacity style={style.closeBtn} onPress={closeModal}>
                                <Text style={style.closeText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            {/* </RenderIf> */}
        </>
    );
};

export default SwitchAccount;
