import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Class Routine | Home</title>
            </Helmet>
            <Hero></Hero>
        </div>
    );
};

export default Home;