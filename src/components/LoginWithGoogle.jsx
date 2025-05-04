import { auth } from './firebaseConfig'
import {GoogleAuthProvider, signInWithPopup } from 'firebase/auth'



function LoginWithGoogle() {

const handleGoogleLogin = async() => {
 const provider = new GoogleAuthProvider()
 try {
   const result = await signInWithPopup(auth, provider)
   const credential = GithubAuthProvider.credentialFromResult(result)
   const token = credential.accessToken
   const user = result.user
   console.log(user)
 } catch (error) {   
   const errorCode = error.code
   const errorMessage = error.message
   const email = error.customData.email
   const credential = GithubAuthProvider.credentialFromError(error)
   console.log(errorCode, errorMessage, email, credential)
 }


}
 return (<>

 <button onClick={handleGoogleLogin}  type="button">
    Login with Google
 </button>

 </>)

}
export default LoginWithGoogle