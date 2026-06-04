import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
       <Head>
        

        {/* Favicon */}
        <link rel="icon" href="/home/bhlogo.png" type="Beavertek" className="w-32 h-28" />
        <title>BH Connected</title>

         
      </Head>
      
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
