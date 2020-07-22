import React from 'react';

import Comment from './Comment';

export default class Post extends React.Component{ //componente padrão do react
    constructor(props) { //executado toda vez que um novo post é instanciado
        super(props);

        this.state = { //todas as variaveis dentro do post ficarão gravadas aqui
            comments: [],
            newCommentText: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this); //diz ao react que quando usamos o handleSubmit estamos usando a classe do post
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleSubmit(e) {
        this.setState({
            comments: [ //pega todos os comentários que já tem guardados somados com o novo comentário que o usuário digitar
                ...this.state.comments,
                { text: this.state.newCommentText }
            ]
        });

        this.setState({ newCommentText: '' }); //limpa o campo do comentário

        e.preventDefault(); //evita recarregar a página
    }

    handleTextChange(e) {
        this.setState({ newCommentText: e.target.value }) //altera o estado da aplicação toda vez que se altera o input
    }

    render() {
        return(
            <div>
                <h2>{this.props.title}</h2> 
                <form onSubmit={this.handleSubmit} >
                    <input
                        value={this.state.newCommentText}
                        onChange={this.handleTextChange}
                    />
                    <button type="submit" >Comentário</button>
                </form>
                { this.state.comments.map((comment, index) => {
                    return <Comment key={index} text={comment.text} />
                })}
            </div>
        );
    }
}