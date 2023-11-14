import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  LoginHeader: {
    backgroundColor: theme.colors.success,
    alignItems: 'center',
    borderBottomLeftRadius: 80,
    paddingVertical: 30,
  },
  logoText: {
    color: theme.colors.white,
    fontFamily: theme.fonts.bold,
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 20,
  },
  logoContainer:(w,h)=>({
    width: w,
    height: h,
  }),
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },
 
}));

export default useStyles;
