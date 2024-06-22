import { Navigate, Route, Routes } from 'react-router-dom';
import appRouts from '../appRouts';
import Main from '../pages/Main';

const AppRouter = () => (
    <Routes>
        <Route path={appRouts.Main} element={<Main />} />
        <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
);

export default AppRouter;
