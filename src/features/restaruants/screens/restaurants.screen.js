import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, View } from "react-native";
import { Colors, ActivityIndicator, Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeView } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentConatinerStyle: {
    padding: 16,
  },
})`
  padding: 16px;
`;

const LoadingWrapper = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const LoadingIndicator = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const ResuaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeView>
      {isLoading && (
        <LoadingWrapper>
          <LoadingIndicator animating={true} color={Colors.blue300} size={50} />
        </LoadingWrapper>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeView>
  );
};
