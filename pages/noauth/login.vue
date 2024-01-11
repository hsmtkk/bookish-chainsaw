<template>
    <v-app>
        <v-main>
            <v-container>
                <v-btn v-on:click="logIn">Log In</v-btn>
                <v-btn v-on:click="logOut">Log Out</v-btn>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"

const firebaseApp = useFirebase()
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()

const email = ref("")

const logIn = () => {
    console.log("logIn")
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            console.log("result")
            console.log(result)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log("error")
            console.log(error)
        });
}

const logOut = () => {
    console.log("logOut")
    signOut(auth)
}
</script>
    