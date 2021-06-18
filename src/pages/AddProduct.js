import React from 'react';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import Button from '@material-ui/core/Button';

import Footer from '../components/Footer';


const AddProduct = () => {


    const [ data, setData ] = React.useState('Not Found');

    return (
        <>
            <div className="container mt-4">
                <h2 className="fw-bold">
                    Add Product
                </h2>
                
                <BarcodeScannerComponent
                    width="100%"
                    height="auto"
                    onUpdate={(err, result) => {
                    if (result) setData(result.text)
                    else console.log(err)
                    }}
                />
                <Button
                    className="mt-3"
                    style={{ height: '50px' }}
                    type="button"
                    fullWidth
                    size="large"
                    variant="outlined"
                    color="secondary"
                    
                >
                    Reset All
                </Button>

                <Button
                    className="mt-3"
                    style={{ height: '50px' }}
                    type="button"
                    fullWidth
                    size="large"
                    variant="contained"
                    color="secondary"
                    
                >
                    Exit
                </Button>
                
                <Button
                    className="mt-3"
                    style={{ height: '50px' }}
                    type="button"
                    fullWidth
                    size="large"
                    variant="contained"
                    color="primary"
                    
                >
                    Save and Close
                </Button>


            </div>

            <Footer />
        </>
    )
}

export default AddProduct
