
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
                        borderRadius: 10, //မပါရင် effect squareဖစ်
                    },
                    buttonStyle: {
                        backgroundColor: (props.type == 'solid' || props.type == null) ? theme.colors.primary : 'transparent',
                        borderRadius: 10,
                    },
                    titleStyle: {
                        color: (props.type == 'solid' || props.type == null) ? theme.colors.white : theme.colors.primary,
                        // fontFamily: theme.fonts.regular,
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

            },
        }
    );
};

export default getCustomTheme;
