import '@/styles/globals.css'
import '@/styles/custom.scss'

import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()
export default function MyApp({ Component, pageProps }: AppProps) {

  return <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>

}