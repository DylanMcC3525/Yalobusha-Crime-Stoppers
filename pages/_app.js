import '../styles/styles.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.css'


import dynamic from 'next/dynamic'




typeof window !== 'undefined'
export default function MyApp({ Component, pageProps }) {
  return <div>
  <Head> 
    <title>Yalobusha County Crime Stoppers</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
    <meta name="HandheldFriendly" content="true"></meta>
    <meta name="description" content="The Yalobusha County Crime Stoppers “hotline” is a vital resource in helping reduce crime in our community. With its triangle of cooperation between the citizens, the media and law enforcement, Yalobusha County Crime Stoppers is dedicated to putting criminals behind bars while building a foundation of trust and support. The goal of Yalobusha County Crime Stoppers is to make the streets safer for our families and neighborhoods."></meta>
    <meta name="keywords" content="Yalobusha, yalobusha, crime, crimestoppers, Yalobusha crime stoppers, tip submit, yalobusha county crime, yalobusha county crime stoppers"></meta>
    <meta name="google-site-verification" content="e4OLXjND1l5UwVc0CGHMtOCIhR7fAD1H8m-tolNSesI" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </Head>
  
  <Navbar />
  <Component {...pageProps} />
  <Footer />
</div>
}