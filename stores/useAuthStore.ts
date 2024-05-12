import {defineStore} from "pinia"


type Credentials = {
	email: string
	password: string
}


export const useAuthStore = defineStore("auth", () => {
	const user = ref<any>(null)

	const isLoggedIn = computed(() => !!user.value)

	const fetchUser = async () => {
		const {data} = await useApiFetch("/api/auth/me")

		user.value = data.value as any
	}

	const login = async (credentials: Credentials) => {
		await useApiFetch("/sanctum/csrf-cookie")

		const login = await useApiFetch("/api/auth/login", {
			method: "POST",
			body: credentials,
		})

		await fetchUser()

		return login
	}


	const logout = async () => {
		await useApiFetch("/api/auth/logout", {
			method: "POST",
		})

		user.value = null

		navigateTo("/")
	}

	return {login, logout, user, isLoggedIn, fetchUser, }
})
