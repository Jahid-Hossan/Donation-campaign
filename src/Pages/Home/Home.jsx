import Header from '../../Component/Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default Home;