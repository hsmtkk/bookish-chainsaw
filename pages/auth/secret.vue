<template>
    {{ userData }}
</template>

<script setup lang="ts">
import { getAuth, onAuthStateChanged } from "firebase/auth"

definePageMeta({
    middleware: ["logged-in"]
})

const userData = ref()

const firebaseApp = useFirebase()
const auth = getAuth(firebaseApp)

onAuthStateChanged(auth, (user) => {
    console.log("changed")
    userData.value = user
})
</script>
