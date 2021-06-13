import React from 'react';
import { Link } from "react-router-dom";

import styles from './PageNotFound.module.css'

function PageNotFound() {
    return (
        <div className={styles.pagenotfound}>
            <h1>Page Not Found</h1>
            <p>Please check your URL and make sure that the address entered is correct</p>
            <Link to="/login">
                <button>Back</button>
            </Link>
        </div>
        );
    }

export default PageNotFound