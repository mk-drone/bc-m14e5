
let ContactForm = React.createClass({
    render: function() {
        return React.createElement('form', {className: 'contactForm'}, 
            React.createElement('input', {
                type: 'text',
                placeholder: 'Imie',
                value: this.props.contact.firstName,
            }),
            
            React.createElement('input', {
                type: 'text',
                placeholder: 'Nazwisko',
                value: this.props.contact.lastName,
            }),
    
            React.createElement('input', {
                type: 'text',
                placeholder: 'email',
                value: this.props.contact.email,
            }),

            React.createElement('button', {type:'submit'}, 'Dodaj kontakt'),
        );
    },
})