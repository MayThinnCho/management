
import { createTheme } from '@rneui/themed';
import { COLOR } from '../theme/colorSchema';
import { Platform } from 'react-native';
import { FONT } from '../theme/fontSchema';

const getCustomTheme = () => {
    return createTheme(
        {
            lightColors: COLOR,
            fonts: FONT,
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
                        fontFamily: theme.fonts.regular,
                    },
                }),
                Text: (_, theme) => ({
                    style: {
                        fontFamily: theme.fonts.regular,
                    }
                }),
                Input: (_, theme) => ({
                    style: {
                        fontFamily: theme.fonts.regular,
                        fontSize: 16,
                        color: theme.colors.black,
                    }
                }),
            },
        }
    );
};

export default getCustomTheme;
