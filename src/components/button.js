import React from 'react';
import LanguageContext from '../context/contextLanguage';
import ColorContext from '../context/colorContext';

class Button extends React.Component {
// this static contextType = LanguageContext will add a property to directly class itself. this is equal to Button.contextType = LanguageContext
   // static contextType = LanguageContext;


   renderSubmitButton(color) {
    return(
        <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
            {({ language }) => language === 'english' ? 'submit' : 'Voorleggen'}
        </LanguageContext.Consumer>
    </button>
    );
};

    render() {
       // const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
        return (
            <ColorContext.Consumer>
                {color => this.renderSubmitButton(color)}  
            </ColorContext.Consumer>
            
        );
    };
};

export default Button;