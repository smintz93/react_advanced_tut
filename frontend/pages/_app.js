import App, { Container } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

class MyApp extends App {
  // next.js life cycle method. will run before render.
  // going to crawl pages and see what needs to be feteched before render method runs
  static async getInitialProps({ Component, ctx}) {
    let pageProps = {};
    if(Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user 
     pageProps.query = ctx.query;
     return { pageProps };
  }
  render() {
    const { Component, apollo } = this.props;
    // Component in this case is whatever component you are trying to render 
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);