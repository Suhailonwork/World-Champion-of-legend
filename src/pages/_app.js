import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Google Fonts Poppins */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />

        {/* Google site verification */}
        <meta
          name="google-site-verification"
          content="s92k2tY9Ih--DMgj_sMGNEUHgSHacLZPE5Gr984V_h8"
        />
      </Head>

      {/* Netcore Smartech Script */}
      <Script
        src="//cdnt.netcoresmartech.com/smartechclient.js"
        strategy="afterInteractive"
        onLoad={() => {
          smartech?.(
            "create",
            "ADGMOT35CHFLVDHBJNIG50K969FK3498PNA5EP5V1U13VG1BF9T0"
          );
          smartech?.("register", "fe35f1bb2fc723b87184ce8eeb530303");
          smartech?.("identify", "");
          // smartech?.("dispatch", 1, {});
        }}
      />

      {/* Meta Pixel Code */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1304445290846987');
            fbq('track', 'PageView');
          `,
        }}
      />

      {/* NoScript for Facebook Pixel */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <noscript>
            <img 
              alt="logo"
              height="1"
              width="1"
              style="display:none"
              src="https://www.facebook.com/tr?id=1304445290846987&ev=PageView&noscript=1"
            />
          </noscript>
        `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}
