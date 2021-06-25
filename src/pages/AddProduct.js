import React from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import Footer from '../components/Footer';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const AddProduct = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [ data, setData ] = React.useState('Not Found');

    React.useEffect(() => {
        handleClickOpen();
    }, [data]);

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Bar Code Sample Test</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Your Data is {data}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                </Button>
                </DialogActions>
            </Dialog>

            <div className="container mt-4">
                <h2 className="fw-bold">
                    Shelve 12
                </h2>
            
                <center>
                    <BarcodeScannerComponent
                        width="100%"
                        height="300"
                        onUpdate={(err, result) => {
                        if (result) setData(result.text);
                        else setData("Not Found");
                        }}
                    />
                </center>
                
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
