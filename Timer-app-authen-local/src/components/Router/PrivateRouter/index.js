import React from "react";
import { Redirect, Route } from "react-router-dom";
import { checkLoggedIn } from "../../CheckLoggedIn/index";

PrivateRouter.propTypes = {};

function PrivateRouter({ component: Component, onLogOut, ...rest }) {
    return (
        <div className='homepage'>
            <Route
                {...rest}
                    render={(props) =>
                    checkLoggedIn() !== null ? 
                        (<Component onLogOut={onLogOut} {...props} />) 
                    : 
                        (<Redirect to={{pathname: "/login", state: {from: props.location }}}/>)
                }
            />
        </div>
    );
}

export default PrivateRouter;