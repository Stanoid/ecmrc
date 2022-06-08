import '../styles/globals.css'
import '../styles/Home.module.css'
import 'react-toastify/dist/ReactToastify.css'
import { G_KEY } from '../utils/url'
import Script from 'next/script';
import { AuthProvider } from '../context/AuthContext'
function MyApp({ Component, pageProps }) {
  return(
    <AuthProvider>

<Script   id="googleanal" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${G_KEY}`} />



<Script   id="ganal" strategy="lazyOnload">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${G_KEY}', {
        page_path: window.location.pathname,
        });
    `}
</Script>
   
    <content>
<Component {...pageProps} />
</content>

</AuthProvider>

  ) 
}

export default MyApp
