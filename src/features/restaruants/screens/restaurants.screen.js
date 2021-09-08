import React from "react";
import styled from "styled-components/native";
import { StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfo } from "../components/restaurant-info-card.component";

const SafeView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const ResuaurantsScreen = () => {
  return (
    <SafeView>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      <RestaurantContainer>
        <RestaurantInfo />
      </RestaurantContainer>
    </SafeView>
  );
};
