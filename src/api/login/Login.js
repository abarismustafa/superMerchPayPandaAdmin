import axios from "axios";
import { baseUrl } from "../../baseUrl";
import { SaveUserDeatilsLocalStorage } from "../../utils/localStorage";
import AxiosServiceFactory from "../../axiosServiseFactory/AxiosServiseFactory";




export const LoginSubmit = async (loginForm) => {

    // setLoading(true)
    try {

        return AxiosServiceFactory(`${baseUrl}staff/login`).post(
            loginForm
        );


        // const res = await AxiosServiceFactory(`${baseUrl}staff/login`).post(loginForm)
        // SaveUserDeatilsLocalStorage(res.data)
        // return res.data
        // console.log(res.data);


    } catch (error) {
        return error
    }

}