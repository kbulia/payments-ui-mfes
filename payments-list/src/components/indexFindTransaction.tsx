import ReactDOM from "react-dom/client";
import FindTransaction from "./FindTransaction";


const mount = (el: Element) : void => {

    ReactDOM.createRoot(el).render(<FindTransaction />)
}

export default mount;