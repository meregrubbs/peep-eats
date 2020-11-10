import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import Categories from './components/layout/Categories';

const client = new ApolloClient({
  uri: 'https://peepeats.website/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Hero />
      <Categories />
    </ApolloProvider>
  );
}

export default App;
