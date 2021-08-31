import RestaurentCard from "../RestaurentCard";
import React, { useEffect } from "react";
import "./style.css";

import { connect } from "react-redux";

import { fetchPizzas } from "../../actions/GetPizzas";
import loadingImg from "../../assets/images/loading.png";
import noData from "../../assets/images/no-data.png";
import RestaurentFilters from "../RestaurentFilters";

const RestaurentList = (props) => {
  const { pizzaList, getPizzaList, loading, error } = props;

  useEffect(() => {
    getPizzaList();
  }, []);

  if (loading) {
    return <img className="invalid" src={loadingImg} alt="Loading" />;
  }
  if (error)
    return <img className="invalid" src={noData} alt="No Data Available" />;
  if (pizzaList && pizzaList.length)
    return (
      <>
        <RestaurentFilters size={pizzaList.length} />
        {pizzaList.map((entry) => {
          return (
            <div key={entry.restaurantId}>
              <RestaurentCard
                id={entry.restaurantId}
                name={entry.restaurantName}
                img_url={entry.restaurantImage}
                time={entry.displayTime}
                price={entry.displayCostForTwo}
                averageReview={entry.averageReview}
                pureVeg={entry.isPureVeg}
                outlet={entry.outlet}
              />
            </div>
          );
        })}
      </>
    );
  return null;
};
const mapStateToProps = (state) => {
  return {
    pizzaList: state.PizzaListReducer.data,
    loading: state.PizzaListReducer.loading,
    error: state.PizzaListReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPizzaList: () => dispatch(fetchPizzas()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RestaurentList);
