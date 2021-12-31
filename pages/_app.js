import '../styles/globals.css'
import '../styles/Home.module.css'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from '../context/AuthContext'
function MyApp({ Component, pageProps }) {
  return(
    <AuthProvider>
   
    <content>
<Component {...pageProps} />
</content>

</AuthProvider>

  ) 
}

export default MyApp
