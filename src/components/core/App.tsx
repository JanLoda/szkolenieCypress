import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './RouterComponent';
import { ToastProvider } from '../common/ToastProvider';
import ResponsiveAppBar from '../header/ResponsiveAppBar';
import { RootState } from '../../_reducers';

function App() {
    const alert = useSelector((state: RootState) => state.alert);

    return (
        <ToastProvider>
            <Router>
                <ResponsiveAppBar />
                <div className="jumbotron">
                    <div className="container">
                        <div className="col-md-8 offset-md-2">
                            {alert.message &&
                                <div className={`alert ${alert.type}`}>{alert.message}</div>
                            }
                            <RoutesComponent />
                        </div>
                    </div>
                </div>
            </Router>
        </ToastProvider>
    );
}

export { App };