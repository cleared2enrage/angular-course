import * as firebase from 'firebase';

export class AuthService {
    token: string;

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((err) => console.error(err));
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => firebase.auth().currentUser.getToken())
            .then((token: string) => {
                this.token = token;
            });
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }

    getToken() {
        firebase.auth().currentUser.getToken()
            .then((token: string) => this.token = token);
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}