const localStorageHandler = (item: string, method: string, value?: string) => {
	if (method === 'get') return localStorage.getItem(item)

	if (method === 'set') localStorage.setItem(item, value)
}

export default localStorageHandler
