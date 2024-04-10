import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import {
  Entypo,
  Feather,
  AntDesign,
  FontAwesome6,
  FontAwesome,
} from "@expo/vector-icons";

const routes = [
  {
    path: "/home",
    icon: <Entypo name="home" size={20} color="gray" />,
    text_help: "Inicio",
  },
  {
    path: "/home",
    icon: <Feather name="list" size={20} color="gray" />,
    text_help: "Departamentos",
  },
  {
    path: "/home",
    icon: <AntDesign name="heart" size={20} color="gray" />,
    text_help: "Favoritos",
  },
  {
    path: "/home",
    icon: <FontAwesome6 name="bag-shopping" size={20} color="gray" />,
    text_help: "Sacola",
  },
  {
    path: "/home",
    icon: <FontAwesome name="user" size={20} color="gray" />,
    text_help: "Sua Conta",
  },
];

export default function FooterWithIcons() {
  return (
    <View style={styles.footerStyle}>
      {routes.map((route, index) => (
        <Link href={route.path} key={index}>
          <View style={styles.textStyles}>
            <Text>{route.icon}</Text>
            <Text>{route.text_help}</Text>
          </View>
        </Link>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  footerStyle: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  textStyles: {
    fontSize: 12,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
