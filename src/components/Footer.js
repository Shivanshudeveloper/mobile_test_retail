import React, { useState, useEffect } from 'react';
import Badge from '@material-ui/core/Badge';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Footer() {

  return (
    <div className="fixed-bottom">
        <nav style={{ backgroundColor: '#6080ef' }} class="navbar navbar-dark bg-primary p-3">
            <div className="float-left">
                <Link to="/storepage">
                    <HomeIcon style={{ fontSize: 30, color: 'white' }} />
                </Link>
            </div>
            <div className="float-right">
                <Link to="/inbox">
                <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon style={{ fontSize: 30, color: 'white' }} />
                </Badge>
                </Link>
            </div>
            <div style={{ float: 'right' }}>
                <Link to="/setting">
                <SettingsIcon style={{ fontSize: 30, color: 'white' }} />
                </Link>
            </div>
        </nav>  
    </div>
  );
}