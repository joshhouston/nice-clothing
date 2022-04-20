import {signInWithGooglePopup} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const res = await signInWithGooglePopup();
        console.log(res);
    }

    return (
        <div>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}>Sign in with google popup</button>
        </div>
    )
}

export default SignIn;