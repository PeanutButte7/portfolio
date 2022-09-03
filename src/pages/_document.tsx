import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import { getCssText } from 'styles';

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang='cs'>
                <Head>
                    <style
                        id='stitches'
                        dangerouslySetInnerHTML={{ __html: getCssText() }}
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght@8..144,100,400;8..144,151,1000&display=swap'
                        rel='stylesheet'
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
