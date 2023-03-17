import { auth, provider } from '../firebase/firebaseConfig';
//giriş yapmak için gerekli fonksiyon
import { signInWithPopup } from 'firebase/auth';

const Auth = () => {
    const signIn = () => {
        signInWithPopup(auth, provider);
    };
    return (
        <div>
            <h1>Giriş yapmak için
            </h1>
            <button onClick={signIn}>Google ile gir</button>
        </div>
    );
};

export default Auth;