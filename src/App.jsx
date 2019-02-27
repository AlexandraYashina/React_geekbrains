import React from 'react';
import ReactDOM from 'react-dom';
import Developer from './developer.js';

class App extends React.Component {
    render() {
        return <div>
        <h2>Первое приложение на React</h2>
        <p>Hello React!</p>
        <p id="author">Hello React!</p>
        </div>;
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));

let developer = new Developer('Александра', 'отдел разработки');
let authorElement = document.getElementById('author');
authorElement.innerHTML = `Автор: ${developer.name}`;
console.log(developer.displayInfo());