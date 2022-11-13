import type {AppProps} from 'next/app';
import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
    return (<>
        <title>Adam Bárta - webdev & design</title>
        <Component {...pageProps} />
    </>);
}

export default MyApp;
