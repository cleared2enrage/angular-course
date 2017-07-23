import * as firebase from 'firebase';

export class AuthService {
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((err) => console.error(err));
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => { console.log(response)})
            .catch((err) => { console.error(err)});
    }
}