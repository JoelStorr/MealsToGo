import camelize from "camelize";

import { mocks } from "./mock";

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.isOpenNow,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};

restaurantRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    //console.log(transformedResponse);
  })
  .catch((error) => {
    console.log(error);
  });
