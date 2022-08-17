const Person = props => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('p', {}, props.occupation)
    ])
};
const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {class: 'title'}, 'React IS rendered'),
        React.createElement(Person, {
            name: 'Manuel',
            occupation: 'Driver'
        }),
        React.createElement(Person, {
            name: 'John',
            occupation: 'Skydiver'
        }),
        React.createElement(Person, {
            name: 'Frank',
            occupation: 'Chef'
        }),
    ]);
};

// ReactDOM.render(React.createElement(App), document.getElementById('root'));

// This is what is required for React18 and above
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(react.createElement(App));