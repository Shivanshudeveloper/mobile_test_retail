import React from 'react';
import Button from '@material-ui/core/Button';


import Footer from '../components/Footer';

const StorePage = () => {
    return (
        <>
            <div className="container mt-4">
                <h2 className="fw-bold">
                    Projects
                </h2>

                <section className="mt-3">
                    <div className="card card-body rounded mt-2">
                        <h4>Project 1</h4>
                        <label className="text-muted">Assigned 10/09/2021</label>
                        <div>
                            <Button href="/projects" style={{ float: 'right' }} variant="contained" color="primary">
                              View More
                            </Button>
                        </div>
                    </div>

                    <div className="card card-body rounded mt-2">
                        <h4>Project 2</h4>
                        <label className="text-muted">Assigned 10/09/2021</label>
                        <div>
                            <Button href="/projects" style={{ float: 'right' }} variant="contained" color="primary">
                              View More
                            </Button>
                        </div>
                    </div>

                    <div className="card card-body rounded mt-2">
                        <h4>Project 3</h4>
                        <label className="text-muted">Assigned 10/09/2021</label>
                        <div>
                            <Button href="/projects" style={{ float: 'right' }} variant="contained" color="primary">
                              View More
                            </Button>
                        </div>
                    </div>

                    <div className="card card-body rounded mt-2">
                        <h4>Project 4</h4>
                        <label className="text-muted">Assigned 10/09/2021</label>
                        <div>
                            <Button href="/projects" style={{ float: 'right' }} variant="contained" color="primary">
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

export default StorePage
