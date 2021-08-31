export const PizzaListReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PIZZAS":
      return {
        loading: true,
        data: [],
        error: "",
      };
    case "GET_PIZZAS_SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case "GET_PIZZAS_FAILURE":
      return {
        loading: false,
        data: [],
        error: "error",
      };
    default:
      return state;
  }
};
