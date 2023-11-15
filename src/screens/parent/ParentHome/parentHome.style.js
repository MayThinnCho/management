import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bgColor,
    // marginBottom: 80
  },
  image: {
    width: 70,
    height: 70,
  },
  body: {
    marginTop: 40,
    marginHorizontal: 30,
    paddingBottom: 70,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 30
  },
  squareCard: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 10,
    height: 140,
  },
  touchableWrapper: {
    borderRadius: 10,
    width: "48%",
    marginBottom: 12,
  },
  btnTxt: {
    marginTop: 7,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
  },
  rippleContainer: {
    borderRadius: 10,
    marginBottom: 20,
    // alignSelf: "flex-end"
    borderRadius: 50,
  },
  Cardcontainer: {
    // width: Device.width - 40,
    position: 'absolute',
    bottom: -40,
    left: 30,
    marginBottom: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 65,
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    justifyContent: "space-between",
    shadowColor: theme.colors.brightGrey,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textContainer: {
    width: "100%",
    marginVertical: 5,
    overflow: "hidden"
  },
  titleText: {
    color: theme.colors.darkBlue,
    fontWeight: "600",
    fontSize: 14,
    marginLeft: 10,
  },
  messageText: {
    color: theme.colors.darkBlue,
    // fontWeight: "600",
    fontSize: 12,
    marginLeft: 10,
  },
  newNoti: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.danger,
    position: 'absolute',
    top: 15,
    left: 45
  }
}))

export default useStyles;
