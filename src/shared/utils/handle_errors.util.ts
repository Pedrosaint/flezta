import { toast } from "sonner";

const handleErrors = (error: unknown) => {

    let errorMessage = "An error occurred";

    if (typeof error === "object" && error !== null) {
        // RTK Query errors often come with `data`
        if ("data" in error) {
            errorMessage = (error as any).data.message || errorMessage;
            console.error("ERROR DATA::: ", (error as any).data);
        } 
        // Generic JS error
        else if ("message" in error) {
            errorMessage = (error as any).message || errorMessage;
            console.error("ERROR MESSAGE::: ", (error as any).message);
        } 
        else {
            errorMessage = error.toString();
            console.error("ERROR OBJECT::: ", error);
        }
    } else {
        errorMessage = errorMessage;
        console.error("ERROR::: ", error);
    }

    // Display error message to user
    toast.error(errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1));
};

export default handleErrors;
