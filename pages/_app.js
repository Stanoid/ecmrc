import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
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
