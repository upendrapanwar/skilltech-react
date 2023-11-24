import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ModalLayout from '../admin/common/ModalLayout';

const Footer = () => {
    const navigate = useNavigate();
    
    useEffect(() => {

    },[]);
    

    return (
        <React.Fragment>
            
           <ModalLayout /> 
        </React.Fragment>
    )
}

export default Footer;