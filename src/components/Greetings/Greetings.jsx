import React from 'react';

const Greetings = ({ lang, children }) => {
    const greetingsSwitch = param => {
        switch(param) {
            case 'de':
                return 'Hallo';
            case 'en':
                return 'Hello ';
            case 'es':
                return 'Hola ';
            case 'fr':
                return 'Bonjour ';
            default:
                return ' ';
        }
      }

    return (        
        <div className="box">{greetingsSwitch(lang)} {children}</div>
    );
};

export default Greetings;