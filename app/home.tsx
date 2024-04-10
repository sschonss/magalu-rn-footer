import { View, Text } from "react-native";
import React from "react";
import Scrollable from "@/components/containers/Scrollable";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import HeaderWithSearchBar from "@/components/headers/HeaderWithSearchBar";
import AddressBar from "@/components/ui/AddressBar";
import FooterWithIcons from "@/components/footer/FooterIcons";

export default function home() {
  return (
    <Scrollable>
      <HeaderWithSearchBar headerBackVisible={true} />

      <AddressBar />
      <FooterWithIcons />
    </Scrollable>
  );
}
