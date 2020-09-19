import Head from "next/head";
import "../styles/index.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Personal Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="social-icon-wrapper">
        <a href="https://github.com/pulkitnagpal" target="blank">
          <img src="/github.png" alt="github"/>
        </a>
        <a href="https://www.linkedin.com/in/pulkit-nagpal-57430a111/" target="blank">
          <img src="/linkedin.png" alt="linkedin"/>
        </a>
        <a href="https://www.facebook.com/pulkit.nagpal.370" target="blank">
          <img src="/facebook.png" alt="facebook"/>
        </a>
        <a href="https://twitter.com/PulkitN05908502" target="blank">
          <img src="/twitter.png" alt="twitter"/>
        </a>
      </div>
      <Component {...pageProps} />
    </>
  );
}
