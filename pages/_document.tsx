import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='stylesheet' href='/static/styles.min.css' />
          <link
            rel='icon'
            type='image/x-icon'
            href='https://blachaz3.com/static/img/BLACHAZ3.png'
          />
          <meta
            property='og:image'
            content='https://blachaz3.com/static/img/DSC_9426-2.jpg'
          />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta charSet='utf-8' />
          <meta name='keywords' content='BlacHaz3, fashion, art, dmv'></meta>
          <meta name='description' content='BlacHaz3™: Rap, Reimagined' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='home' href='https://BlacHaz3.com/' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='http://BlacHaz3.com/' />
          <meta property='og:site_name' content='BlacHaz3' />
          <meta
            property='og:description'
            content='Consolidating Philanthropy & Social Justice With Fashion, Art,
              Music to change the world in a positive way.'
          />
          <meta name='twitter:card' content='summary' />
          <meta
            name='twitter:image'
            content='https://blachaz3.com/static/img/DSC_9426-2.jpg'
          />
          <meta name='twitter:site' content='@blachaz3' />
          <meta name='twitter:title' content='BlacHaz3' />
          <meta
            name='twitter:description'
            content='Consolidating Philanthropy & Social Justice With Fashion, Art,
              Music to change the world in a positive way.'
          />
          <meta name='twitter:creator' content='@BlacHaz3' />
          <meta property='fb:app_id' content='1334983689990834' />
          <meta name='apple-mobile-web-app-title' content='BlacHaz3' />
          <meta name='application-name' content='BlacHaz3' />
          <meta name='theme-color' content='#ffffff' />
          <meta name='apple-mobile-web-app-title' content='BlacHaz3' />
          <meta name='application-name' content='BlacHaz3' />
        </Head>
        <body className='sans-serif black-80 f5 f4-ns'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
