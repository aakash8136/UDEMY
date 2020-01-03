import React from 'react';
import authors from './authors';
import categories from './categories';
import PolpularInstructors from './components/PopularInstructors'
import PopularTopics from './components/PopularTopics';
import SubHeader from './components/SubHeader';

const Home = () => {
    return (
        <div>
            <SubHeader />
       <PopularTopics authorTopics={categories} />
       <PolpularInstructors authorDetails={authors} />
        </div>
    )
}

export default Home;