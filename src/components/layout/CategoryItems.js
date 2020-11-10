import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import CategoryItem from './CategoryItem';

const CategoryItems = () => {
  return (
    <Query
      query={gql`
        {
          recipes {
            edges {
              node {
                title
              }
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) {
          return <h1>Loading...</h1>;
        }

        return (
          <div>
            {data.recipes.edges.map((recipe, key) => {
              const title = JSON.stringify(recipe.node.title);
              console.log(title);
              return <CategoryItem key={key} title={title} />;
            })}
          </div>
        );
      }}
    </Query>
  );
};

export default CategoryItems;
