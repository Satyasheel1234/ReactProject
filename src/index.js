import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
const App =() =>{
    return(
        <div>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))