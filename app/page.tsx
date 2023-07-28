import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import image from "./image.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Glaraway</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Discover Glaraway – a revolution in high-quality streetwear and soon, premium gym clothing and accessories. Redefining urban fashion and fitness wear, Glaraway combines style, comfort, and functionality for the modern active lifestyle. Stay tuned for our grand launch!"
        />
        <meta name="keywords" content="Clothing, Glaraway, Streetwear" />
        <meta name="author" content="Aditya Shah" />
        <meta
          name="copyright"
          content="OM SAI RAM TYRE RETREADING INDUSTRIES"
        />
        <meta name="Classification" content="Business" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Image src={image} alt="image" className="image" />
      <div className="title">GLARAWAY</div>
    </>
  );
}
