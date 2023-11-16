
import { createTheme } from '@rneui/themed';
import { COLOR } from '../theme/colorSchema';
import { Platform } from 'react-native';
import { FONT } from '../theme/fontSchema';

const getCustomTheme = () => {
    return createTheme(
        {
            lightColors: COLOR,
            mode: 'light',
            components: {
                Button: (props, theme) => ({
                    containerStyle: {
                        marginVertical: 10,
                        borderRadius: 10,
                    },
                    buttonStyle: {
                        backgroundColor: (props.type == 'solid' || props.type == null) ? theme.colors.primary : 'transparent',
                        borderRadius: 10,
                    },
                    titleStyle: {
                        color: (props.type == 'solid' || props.type == null) ? theme.colors.white : theme.colors.primary,
                    },
                }),
                Input: (_, theme) => ({
                    containerStyle: {
                        marginBottom: 0,
                    },
                    inputStyle: {
                        paddingBottom: 0,
                    },
                    style: {
                        fontSize: 16,
                        color: theme.colors.black,
                    }
                }),
                SelectDropdown: (props, theme) => ({
                    buttonStyle: {
                        width: "50%",
                        height: 35,
                        marginTop: 10,
                        backgroundColor: theme.colors.white,
                        borderRadius: 10,
                        borderWidth: 0.5,
                        borderColor: theme.colors.silver,
                    },
                }),
            },
        }
    );
};

export default getCustomTheme;
