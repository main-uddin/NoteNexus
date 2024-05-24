// import "../styles/globals.css";
// import type { AppProps } from "next/app";
// import { Layout } from "../components";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient();

// export default function App({ Component, pageProps }: AppProps) {
//     return (
//         <QueryClientProvider client={queryClient}>
//             <Layout>
//                 <Component {...pageProps} />
//             </Layout>
//         </QueryClientProvider>
//     );
// }

import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from "../components/Layout";
import "../styles/globals.css"; // Make sure this path is correct

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </QueryClientProvider>
    );
}

export default MyApp;
