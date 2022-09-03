import { Layout } from 'components/Layout';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component }: AppProps) {
    return (
        <Layout>
            <Component />
        </Layout>
    );
}

export default MyApp;
