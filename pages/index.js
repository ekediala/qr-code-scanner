import Head from 'next/head';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });

export default function Home() {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [scanning, setScanning] = useState(false);

  const handleScan = (data) => {
    setError('');
    setScanning(true);
    if (data) {
      setResult(data);
    }
    setScanning(false);
  };

  const handleError = (err) => {
    setError(err.message || 'Something went wrong. Please try again.');
  };

  function getText() {
    if (scanning) return 'Scanning...';
    if (error) {
      return <p>{error}</p>;
    }

    if (result) {
      return (
        <a target='_blank' rel='noopener noreferrer' href={result}>
          {result}
        </a>
      );
    }

    return <p>Scan qr code.</p>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>QR Code Scanner</title>
        <meta
          name='description'
          content='Free QR Code scanner. Zero ads.Enjoy'
        />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <div>
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              className={styles.scanner}
            />
            {getText()}
          </div>
        </div>
      </main>
    </div>
  );
}
