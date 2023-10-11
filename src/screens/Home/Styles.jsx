import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f01f1f"
    },
    headComponent : {
        height: 320,
       backgroundColor: "red",
       // backgroundColor: "#f01f1f",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    top : {
        margin:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }

  });