export const fetchApi = async (url: string) => {
    const response = await fetch(url)
    const responseJson = await response.json()
    return responseJson
}