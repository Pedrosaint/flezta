import CategoriesHeaderComp from "@/modules/products/components/categories_header.comp";
import PaymentComp from "../components/payment.comp";


const PaymentPage = () => {
    return (
        <>
            <div>
                <CategoriesHeaderComp
                    pageTitle="Payment"
                    breadcrumbs={[
                        { label: "Shopping Cart" },
                        { label: "Checkout" },
                        { label: "Payment", active: true },
                    ]}
                />
                <PaymentComp />
            </div>
        </>

    );
};

export default PaymentPage;