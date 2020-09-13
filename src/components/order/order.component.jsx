import React from "react";
import { connect } from "react-redux";

import CurrencyFormat from "react-currency-format";
import moment from "moment";
import { AnimatedList } from "react-animated-list";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

import CartItem from "../cart-item/cart-item.component";

import { selectDarkTheme } from "../../redux/theme/theme.selectors";

import "./order.style.css";

const Order = ({ order, isDarkMode }) => {
  return (
    <div className={`order ${isDarkMode && "order--dark"}`}>
      <h2>Order</h2>
      <br />
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

      <p className="order__id">
        <small>
          <b>Order ID: &nbsp;</b> {order.id}
        </small>
      </p>

      <div className="order__deliveryStatus">
        <p className="order__deliveryStatus-notif">
          <b>Payment Done</b>
          <FiberManualRecordIcon />
        </p>
        <div className="div__status"></div>
        <img
          src="https://img.icons8.com/fluent/42/000000/packaging.png"
          alt="Packing"
        />
        <div></div>
        <img
          src="https://img.icons8.com/fluent/42/000000/truck.png"
          alt="Delivery"
        />
        <div></div>
        <RadioButtonUncheckedIcon />
      </div>

      <AnimatedList animation={"slide"}>
        {order.data.cartItems?.map(({ id, ...otherProps }) => (
          <CartItem key={id} otherProps={otherProps} hideButton />
        ))}
      </AnimatedList>

      <CurrencyFormat
        renderText={(value) => (
          <>
            <span className="order__total">
              {" "}
              Order Total value : <strong>{value}</strong>
            </span>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isDarkMode: selectDarkTheme(state),
});

export default connect(mapStateToProps)(Order);
