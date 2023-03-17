import { auth, provider } from '../firebase/firebaseConfig';
//giriş yapmak için gerekli fonksiyon
import { signInWithPopup } from 'firebase/auth';

const Auth = () => {
    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((res) => { localStorage.setItem('token', res.user.refreshToken) })
            .catch((err) => console.log(err));
    };
    return (
        <div className='auth'>
            <h1>Chat Odası</h1>
            <h1>Devam etmek için Giriş yapmak için
            </h1>
            <button onClick={signIn}>Google ile gir</button>
        </div>
    );
};

export default Auth;