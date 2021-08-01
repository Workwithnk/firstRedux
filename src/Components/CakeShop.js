import React from "react";
import { connect } from "react-redux";
import { cakeAction } from "../Redux/Cake/cakeAction";

function CakeShop(props) {
  return (
    <div>
      <h1>No of cake- {props.noOfCakes} </h1>
      <button onClick={props.buyCake}>Update</button>
    </div>
  );
}

const mapStateToProp = (state) => {
  return {
    noOfCakes: state.noOfCakes,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    buyCake: () => dispatch(cakeAction()),
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(CakeShop);
