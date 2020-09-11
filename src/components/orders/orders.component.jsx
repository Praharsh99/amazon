import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AnimatedList } from "react-animated-list";

import { ReactComponent as NoOrders } from "../../assets/empty_orders.svg";

import { db } from "../../firebase/firebase";

import Order from "../order/order.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./orders.style.css";

const Orders = ({ currentUser }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (currentUser) {
      db.collection("users")
        .doc(currentUser?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [currentUser]);

  return (
    <div className="orders">
      <h1>Your orders</h1>

      <div className="orders__order">
        {orders.length > 0 ? (
          <AnimatedList animation={"zoom"}>
            {orders?.map((order) => (
              <Order key={order.id} order={order} />
            ))}
          </AnimatedList>
        ) : (
          <>
            <h2>No Order History!</h2>
            <NoOrders className="orders__svg" />
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(Orders);
