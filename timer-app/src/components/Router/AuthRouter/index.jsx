import React from "react";
import { Redirect, Route } from "react-router-dom";

import { checkLoggedIn } from '../../CheckLoggedIn/index';


function AuthRouter({ component: Component, onLogin, ...rest }) {
    return (
        <div>
            <Route
                {...rest}
                render={(props) => {
                    return checkLoggedIn() === null ? (
                        <Component onLogin={onLogin} {...props} />
                    ) : (
                        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                    );
                }}
            />
        </div>
    );
}

export default AuthRouter;