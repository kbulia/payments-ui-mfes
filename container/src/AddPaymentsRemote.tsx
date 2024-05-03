import mount from 'addpayments/AddPayments';
import { useEffect, useRef } from 'react';

const AddPaymentsRemote = () => {

    const addPaymentsDiv = useRef<HTMLDivElement | null>(null);

    useEffect( () => {
      mount(addPaymentsDiv.current)

    },[])

    
    return (
        <div ref={addPaymentsDiv}></div>
    )

}

export default AddPaymentsRemote;