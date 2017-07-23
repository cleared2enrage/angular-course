import * as firebase from 'firebase';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) {}

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((err) => console.error(err));
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => firebase.auth().currentUser.getToken())
            .then((token: string) => {
                this.token = token;
            })
            .then(() => {
                this.router.navigate(['/']);
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