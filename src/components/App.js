import React from 'react';
import UserCreate from './userCreate';
import { LanguageStore } from '../context/contextLanguage';
import ColorContext from '../context/colorContext';
import LanguageSelector from '../components/languageSelector';

class App extends React.Component {

    render() {
        return (
            <div className='ui container'>
                <LanguageStore>
                    <LanguageSelector/>
                    <ColorContext.Provider value='red'>
                        <UserCreate/>
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    };
};

export default App;