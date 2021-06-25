import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/Footer';


const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const ProjectPage = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                    <CloseIcon />
                    </IconButton>
                </Toolbar>
                </AppBar>
                <div className="container mt-5">
                    <center>
                        <img className="rounded shadow w-75" src="https://5.imimg.com/data5/YD/YB/ZF/SELLER-31792487/e3692f3fe8071a099727fb2e2b83b1d5-500x500.jpg" />
                        <h2 className="mt-3">
                            Milk <br />
                            <small>(1:4)</small>
                        </h2>

                        
                    </center>
                    <div class="list-group mt-3">
                        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                            <b>SKU</b>
                            <span className="float-end">110NM878JU100</span> 
                        </a>
                        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                            <b>Price</b>
                            <span className="float-end">110$</span> 
                        </a>
                        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                            <b>Expiry</b>
                            <span className="float-end">01/07/2021</span> 
                        </a>
                        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                            <b>Litre</b>
                            <span className="float-end">500</span> 
                        </a>
                        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                            <b>Section</b>
                            <span className="float-end">Grocery</span> 
                        </a>
                        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                            <b>Shelve</b>
                            <span className="float-end">1</span> 
                        </a>
                        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                            <b>Position</b>
                            <span className="float-end">4</span> 
                        </a>
                    </div>
                </div>
            </Dialog>


            <div className="container mt-4">
                <h2 className="fw-bold">
                    Project 1
                </h2> 

                <Button
                    className="mt-3"
                    style={{ height: '50px' }}
                    type="button"
                    fullWidth
                    href="/addproduct"
                    size="large"
                    variant="contained"
                    color="primary"
                    
                >
                    Add Shelve
                </Button>

                <section className="mt-4">
                    <div className="card card-body rounded mt-2">
                        <h4>Milk 1</h4>
                        <small className="text-muted">
                            1:4
                        </small>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Shelve</th>
                                <th scope="col">Position</th>
                                <th scope="col">Uploaded</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>4</td>
                                    <td>18/06/2021</td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <Button onClick={handleClickOpen} style={{ float: 'right' }} variant="contained" color="primary">
                              View More
                            </Button>
                        </div>
                    </div>


                    <div className="card card-body rounded mt-2">
                        <h4>Lays 1</h4>
                        <small className="text-muted">
                            1:5
                        </small>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Shelve</th>
                                <th scope="col">Position</th>
                                <th scope="col">Uploaded</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>5</td>
                                    <td>18/06/2021</td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <Button onClick={handleClickOpen} style={{ float: 'right' }} variant="contained" color="primary">
                              View More
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default ProjectPage
