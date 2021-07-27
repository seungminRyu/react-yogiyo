import YogiyoTemplate from './components/YogiyoTemplate';
import Gnb from './components/Gnb';
import SearchLocation from './components/SearchLocation';
import CategoryList from './components/CategoryList';


function Home() {
    return (
        <YogiyoTemplate>
            <Gnb/>
            <SearchLocation/>
            <CategoryList/>
        </YogiyoTemplate>
    )
}

export default Home;