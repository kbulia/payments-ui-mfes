import mount from 'findtransaction/FindTransaction';
import { useEffect, useRef } from 'react';

const FindTransactionRemote = () => {

    const findTransactionDiv = useRef<HTMLDivElement | null>(null);

    useEffect( () => {
      mount(findTransactionDiv.current)

    },[])

    
    return (
        <div ref={findTransactionDiv}></div>
    )

}

export default FindTransactionRemote;