import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import QR from "../public/qr.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>QR Code Component</title>
        <meta name="description" content="QR Code Component" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.card}>
          <Image
            src={QR}
            height={235}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "7.5px"
            }}
          ></Image>
          <h2>Improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </main>
    </>
  );
}
