import axios from "axios";

export const getPizzas = () => {
  return {
    type: "GET_PIZZAS",
  };
};

export const getPizzasSuccess = (data) => {
  return {
    type: "GET_PIZZAS_SUCCESS",
    payload: data,
  };
};

export const getPizzasFailure = (data) => {
  return {
    type: "GET_PIZZAS_FAILURE",
    payload: data,
  };
};

export const fetchPizzas = () => {
  const BASE_URL =
    "https://eatoo.uberdoo.com/foodapp/public/api/guest/listRestaurant ";
  const location={ "latitude":13.0358481, "longitude":80.244455 };
  let URI = BASE_URL;
  return (dispatch) => {
    dispatch(getPizzas());
    axios
      .post(URI,location)
      .then((res) => {
        const pizzaList = res.data.listRestaurants;
        dispatch(getPizzasSuccess(pizzaList));
      })
      .catch((err) => {
        const pizzaList = err.data;
        dispatch(getPizzasFailure(pizzaList));
      });
  };
};
