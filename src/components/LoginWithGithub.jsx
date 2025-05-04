import { auth } from './firebaseConfig'
import {GithubAuthProvider, signInWithPopup } from 'firebase/auth'



function LoginWithGithub() {

const handleGithubLogin = async() => {
 const provider = new GithubAuthProvider()
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
 
 <button onClick={handleGithubLogin}  type="button">
    Login with Github
 </button>

 </>)

}
export default LoginWithGithub