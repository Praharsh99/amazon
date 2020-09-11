import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { ReactComponent as NoSearch } from "../../assets/empty_search.svg";

import { AnimatedList } from "react-animated-list";

import CategoryItem from "../category-item/category-item.component";

import { selectShopItems } from "../../redux/shop/shop.selectors";
import { selectQuery } from "../../redux/search/search.selectors";

import "./search-results.style.css";

const getItemsBasedOnQuery = (shopItems, query) => {
  const results = [];

  Object.keys(shopItems).forEach((type) => {
    shopItems[type].items.forEach((product) => {
      if (product.title.toLowerCase().includes(query?.toLowerCase())) {
        results.push(product);
      }
    });
  });

  return results;
};

const SearchResults = ({ shopItems, query }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(getItemsBasedOnQuery(shopItems, query));
  }, [query]);

  return (
    <div className="searchResults">
      <h2>Results Based on your search</h2>

      {results.length > 0 ? (
        <AnimatedList animation="zoom">
          {results.map(({ id, ...otherProps }) => (
            <CategoryItem key={id} id={id} otherProps={otherProps} />
          ))}
        </AnimatedList>
      ) : (
        <>
          <h3>Found nothing! Try to search something generic! {"🧐"}</h3>
          <NoSearch className="searchResults__noSearch" />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  shopItems: selectShopItems(state),
  query: selectQuery(state),
});

export default connect(mapStateToProps)(SearchResults);
