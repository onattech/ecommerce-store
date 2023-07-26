import { Billboard } from "@/types"
import axios from "axios"

const URL = `https://store-admin.onatim.com/api/05545a6b-0880-48b1-9ad9-797a5054bc10/billboards`

const getBillboard = async (id: string): Promise<Billboard | undefined> => {
    try {
        const res = await axios.get(`${URL}/${id}`)
        return res.data
    } catch (error) {
        console.log("URL:", URL)
        console.log("ID:", id)
        console.log("Error:!!!!!!!!!!!!,", error)
    }
}

export default getBillboard
