import Link from 'next/link'
import Layout from '../components/Layout'
import "../styles/global.sass";
import { ApolloProvider } from "@apollo/client";
import client from '../apollo-client/client';

const IndexPage = () => (
  <ApolloProvider client={client}>
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
    </Layout>
  </ApolloProvider>
)

export default IndexPage;
