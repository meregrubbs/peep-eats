import React, { Fragment } from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`
  };
}

const CategoryTabs = () => {
  return (
    <Query
      query={gql`
        {
          recipes {
            edges {
              node {
                recipeMeta {
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

        const uniqueCategories = [
          ...new Set(
            data.recipes.edges.map(recipe => recipe.node.recipeMeta.category)
          )
        ];

        return (
          <Fragment>
            <Tab label='all recipes' {...a11yProps(0)} />

            {uniqueCategories.map((category, key) => {
              return <Tab key={key} label={category} {...a11yProps(key + 1)} />;
            })}
          </Fragment>
        );
      }}
    </Query>
  );
};

export default CategoryTabs;
