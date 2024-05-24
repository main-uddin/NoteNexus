// import "../styles/globals.css";
// import type { AppProps } from "next/app";
// import { Layout } from "../components";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from '../components/Layout';
import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
