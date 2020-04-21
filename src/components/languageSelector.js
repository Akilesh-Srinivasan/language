import React from 'react';
import LanguageContext from '../context/contextLanguage';

class LanguageSelector extends React.Component {

    static contextType= LanguageContext;
    render() {
        //console.log(this.context);
        return (
            <div>
                Select a Language:
                <i className= 'flag us' onClick={() => this.context.onLanguageChange('english')} />
                <i className='flag nl' onClick={() => this.context.onLanguageChange('dutch')} />
             </div>
        );
    };
};

export default LanguageSelector;