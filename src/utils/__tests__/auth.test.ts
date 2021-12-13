import { clearLocalStorageAuth, isAccessTokenValid } from "../auth"
import { ACCESS_TOKEN_KEY, ACCESS_TOKEN_EXPIRATION } from "../../constants"
import MockDate from "mockdate"

describe("[utils.auth]", () => {
	let token: string, expiration: string
	beforeEach(() => {
		MockDate.set("2020-07-09")
		token = "mockToken"
		expiration = "2020-07-07T11:50:55.760Z"
	})
	afterEach(() => {
		localStorage.clear()
	})
	describe("[clearLocalStorageAuth]", () => {
		it("clearLocalStorageAuth clears auth from local storage", () => {
			localStorage.setItem(ACCESS_TOKEN_KEY, token)
			localStorage.setItem(ACCESS_TOKEN_EXPIRATION, expiration)

			expect(localStorage.getItem(ACCESS_TOKEN_KEY)).toBeTruthy()
			expect(localStorage.getItem(ACCESS_TOKEN_EXPIRATION)).toBeTruthy()

			clearLocalStorageAuth()

			expect(localStorage.getItem(ACCESS_TOKEN_KEY)).toBeFalsy()
			expect(localStorage.getItem(ACCESS_TOKEN_EXPIRATION)).toBeFalsy()
		})
	})
	describe("[isAccessTokenValid]", () => {
		it("returns false if there is no token or expiration", () => {
			const isValid = isAccessTokenValid()
			expect(isValid).toEqual(false)
		})
		it("returns false if the token has expired", () => {
			expiration = "2020-07-07T11:50:55.760Z"
			localStorage.setItem(ACCESS_TOKEN_KEY, token)
			localStorage.setItem(ACCESS_TOKEN_EXPIRATION, expiration)

			const isValid = isAccessTokenValid()

			expect(isValid).toEqual(false)
		})
		it("returns true if token has not expired", () => {
			expiration = "2020-07-11T11:50:55.760Z"

			localStorage.setItem(ACCESS_TOKEN_KEY, token)
			localStorage.setItem(ACCESS_TOKEN_EXPIRATION, expiration)

			const isValid = isAccessTokenValid()

			expect(isValid).toEqual(true)
		})
	})
})
