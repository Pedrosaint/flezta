import { useNavigate } from "react-router-dom";
import loginValidationSchema from "../../../shared/utils/validations/auth.validation";
import handleErrors from "../../../shared/utils/handle_errors.util";
import { dashboardRoute } from "../../../core/routes/routeNames";
import { useLoginMutation } from "../apis/auth.api";
import { use, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "../slices/auth.slice";

const useLoginHook = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // State variables
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   
    const [showPassword, setShowPassword] = useState(false);

    // Call you APIs
    const [login, { isLoading }] = useLoginMutation();

    // Handle submit login form
    const handleSubmitLoginForm = async () => {

        // Construct request body
        const requestBody = {
            email: email,
            password: password,
        }

        try {
            // Validation request body
            let validLoginData = await loginValidationSchema.validate(requestBody, { abortEarly: false, strict: true });

            // Call the APIs here
            const loginResponse = await login(validLoginData).unwrap();
            const userData = loginResponse.user;
            const token = loginResponse.token;

            console.log("LOGIN RESPONSE::: ", loginResponse);

            if (token) {
                // Save the token in secure storage
                secureLocalStorage.setItem("access_token", token);
                secureLocalStorage.setItem("user_data", userData!);
                dispatch(setIsAuthenticated(true));

                navigate(dashboardRoute);   
            }
        } catch (error) {
            handleErrors(error);
            console.log("ERROR::: ", error);
        }
    };


    // Handle Firebase Google login
    const handleGoogleLogin = () => {
        // Implement Google login logic here
        console.log("Google login clicked");
    };

    return {
        email, setEmail, password, setPassword,
        showPassword, setShowPassword,
        handleSubmitLoginForm, isLoading,
        handleGoogleLogin,
    };
};

export default useLoginHook;