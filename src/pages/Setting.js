import React from 'react';
import Footer from '../components/Footer';
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    }
}));
const Setting = () => {
    const classes = useStyles();

    return (
        <>
            <div className="container mt-4">
                <h2 className="fw-bold">
                    Setting
                </h2>

                <div className="card card-body mt-3">
                    <Link style={{ textDecoration: 'none', color: 'red' }} className="float-right" to="/">
                        Logout
                    </Link>
                    <center><Avatar alt="Shivanshu Gupta" src="https://www.worldfuturecouncil.org/wp-content/uploads/2020/02/dummy-profile-pic-300x300-1.png" className={classes.large} /> </center> <center style={{ marginTop: '4px' }} className="h4 font-weight-bold" >Full Name<br /> <span className="h6 font-weight-bold" >Store Name</span> </center>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Setting
