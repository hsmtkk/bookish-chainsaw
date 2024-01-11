import { getAuth } from "firebase/auth"

export default defineNuxtRouteMiddleware((to, from) => {
    const firebaseApp = useFirebase()
    const auth = getAuth(firebaseApp)
    console.log("auth")
    console.log(auth)
    if (auth.currentUser === null) {
        console.log("NOT logged in")
        return navigateTo("/noauth/login")
    } else {
        console.log("logged in")
    }
})