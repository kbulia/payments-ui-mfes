import ReactDOM from "react-dom/client";
import AddPayments from "./AddPayments";

const mount = (el: Element) : void => {

    ReactDOM.createRoot(el).render(<AddPayments />)
}

export default mount;