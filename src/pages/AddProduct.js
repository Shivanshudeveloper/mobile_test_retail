import React from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import Button from '@material-ui/core/Button';
import Footer from '../components/Footer';


const AddProduct = () => {


    const [ data, setData ] = React.useState('Not Found');

    return (
        <>
            <div className="container mt-4">
                <h2 className="fw-bold">
                    Shelve 12
                </h2>
            

                <BarcodeScannerComponent
                    width={500}
                    height={500}
                    onUpdate={(err, result) => {
                    if (result) setData(result.text);
                    else setData("Not Found");
                    }}
                />
                <p>{data}</p>
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
                    End of Shelve
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
                    Submit and Next
                </Button>


            </div>

            <Footer />
        </>
    )
}

export default AddProduct
