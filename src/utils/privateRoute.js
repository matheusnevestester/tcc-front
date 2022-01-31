import React from "react";
import {Route} from "react-router-dom";
import {Redirect} from "react-router-dom";

export default function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/sign-up', state: {from: props.location}}} />}
        />
    )
}