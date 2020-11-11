import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import ScrollableTabs from './components/layout/ScrollableTabs';

const client = new ApolloClient({
  uri: 'https://peepeats.website/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Hero />
      <ScrollableTabs />
    </ApolloProvider>
  );
}

export default App;
