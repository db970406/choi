import Document, { Head, Html, Main, NextScript } from 'next/document';


class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;