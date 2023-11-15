import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    Pressable,
    View,
    Platform,
    TouchableOpacity
} from "react-native";
import RenderIf from "../../../utils/helper/renderIf";
import useStyles from "./customAlert.style";
import { useTheme } from '@rneui/themed';

const CustomAlert = ({
    modalVisible,
    title,
    message,
    hasCancel = false,
    handleOk,
    handleCancel,
    confirmBtnText = "OK"
}) => {
    const style = useStyles();
    const {theme} = useTheme();

    return (
        <>
            <Modal animationType="fade" transparent={true} visible={modalVisible}>
                <Pressable
                    style={[
                        Platform.OS === "ios" ? style.iOSBackdrop : style.androidBackdrop,
                        style.backdrop,
                    ]}
                />
                <View style={style.centeredView}>
                    <View style={style.alertView}>
                        <RenderIf isTrue={title}>
                            <View style={style.title}>
                                <Text style={style.titleText}>{title}</Text>
                            </View>
                        </RenderIf>
                        <View style={style.message}>
                            <Text style={style.messageText}>{message}</Text>
                        </View>
                        <View style={style.btnContainer}>
                            <RenderIf isTrue={hasCancel}>
                                <TouchableOpacity
                                    borderless={true}
                                    rippleColor="#00000020"
                                    onPress={handleCancel}
                                    style={[
                                        style.touchableWrapper,
                                        { borderRightWidth: 1, borderRightColor: theme.colors.lightGrey },
                                    ]}
                                >
                                    <Text style={[style.btnText,{ color: theme.colors.danger } ]}>
                                        Cancel
                                    </Text>
                                </TouchableOpacity>
                            </RenderIf>
                            <TouchableOpacity
                                borderless={true}
                                rippleColor="#00000020"
                                onPress={handleOk}
                                style={[
                                    style.touchableWrapper,
                                    !hasCancel && { width: "100%" },
                                ]}
                            >
                                <Text style={style.btnText}>{confirmBtnText}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default CustomAlert;
