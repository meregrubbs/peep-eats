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
                recipeMeta {
                  image {
                    mediaItemUrl
                  }
                  blurb
                  category
                }
              }
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) {
          return <span>Loading...</span>;
        }

        return (
          <div className='row'>
            {data.recipes.edges.map((recipe, key) => {
              // Get variables
              const title = recipe.node.title;
              const image = recipe.node.recipeMeta.image.mediaItemUrl;
              const blurb = recipe.node.recipeMeta.blurb;
              const category = recipe.node.recipeMeta.category;

              return (
                <CategoryItem
                  key={key}
                  title={title}
                  image={image}
                  blurb={blurb}
                  category={category}
                />
              );
            })}
          </div>
        );
      }}
    </Query>
  );
};

export default CategoryItems;
