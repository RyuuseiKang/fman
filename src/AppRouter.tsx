import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Main from './views/Main';

const AppRouter: React.FC = () => {
    return (
        <TransitionGroup>
            <CSSTransition timeout={300} classNames="fade">
                <Routes>
                    <Route path="/" element={<Main />} />

                    <Route path="*" element={<Navigate to="/404" />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default AppRouter;
