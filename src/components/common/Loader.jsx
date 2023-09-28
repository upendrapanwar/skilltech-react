import React from 'react';

import { Bars } from 'react-loader-spinner';

const Loader = () => {
    
    return (
        <>
        <div className="spinner_loader">
            
                <Bars
                    height="150"
                    width="150"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            
        </div>
        </>
    )
}

export default Loader;