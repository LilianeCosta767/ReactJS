import React from 'react';

import Post from './Post';

export default class App extends React.Component {
    render(){ //render é o responsável por retornar o conteudo HTML desse componente
        return (
            <div>
                <h1>Hello World</h1>
                <Post title="Aprendendo React JS com a RocketSeat" />
                <Post title="React JS é demais" />
                <Post title="Top" />
            </div>
        );
    }
}