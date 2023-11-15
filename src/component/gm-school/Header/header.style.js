import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    backgroundColor: theme.colors.white,
    shadowColor: theme.colors.brightGrey,
    // height:65,
    justifyContent: "center",
    shadowOffset: { width: 0, height: 1 },
    paddingVertical: 8,
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
  },
  logo: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  title: {
    color: theme.colors.darkBlue,
    fontWeight: "bold",
    fontSize: 16,
  },
  profile: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  chat: {
    paddingVertical: 4,
    paddingHorizontal: 5,
    backgroundColor: theme.colors.darkBlue,
    borderRadius: 20,
    marginRight: 10,
  },
  chatCountContainer: {
    position:'absolute',
    backgroundColor:theme.colors.danger,
    width:20,
    height:20,
    justifyContent: "center",
    right:-5,
    top:-7,
    borderRadius:10,
  },
  chatCount:{

    color:theme.colors.white,

    textAlign:'center',
    fontSize:11,
  }

}))

export default useStyles;
