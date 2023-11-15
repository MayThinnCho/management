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
    fontWeight:'bold',
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

  dropdown: {
    width: 200,
    height: 40,
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  dropdownItem: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownLabel: {
    flex: 1,
    fontSize: 16,
  },
  labelStyle: {
    fontSize: 16,
    color: 'black',
  },
  iconStyle: {
    width: 30,
    height: 30,
    tintColor: '#000',
  },

  loginTitle: {
    marginVertical: 22,
    textAlign: 'center'
  },
  loginPreviousText: {
    textAlign: 'center',
    marginTop: 15,
  },
  errorStyle: {
    color: theme.colors.error,
    fontSize: 11,
    marginBottom: 20,
  },
  loginBtn: {
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: theme.colors.success,
  },

}));

export default useStyles;
