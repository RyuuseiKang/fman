import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import Main from './components/Main';

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    );
}

export default AppRouter;
