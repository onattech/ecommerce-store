import { Billboard } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboard = async (id: string): Promise<Billboard | undefined> => {
    try {
        const res = await fetch(`${URL}/${id}`)
        return res.json()
    } catch (error) {
        console.log("URL:", URL)
        console.log("ID:", id)
        console.log("Error:!!!!!!!!!!!!,", error)
    }
}

export default getBillboard
