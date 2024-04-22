import React, { createContext ,useState} from "react";
const EcomContext = createContext();

const EcomProvider = ({children}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <EcomContext.Provider value={{show,setShow,handleClose,handleShow}}>
            {children}
        </EcomContext.Provider> 
     )
}
 
export {EcomContext, EcomProvider}