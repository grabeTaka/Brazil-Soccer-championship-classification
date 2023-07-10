import React, { Component } from 'react';
import api from '../services/api';
import { Table, Container, Row, Col } from 'reactstrap';



class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            times: [],

        }
    }

    componentDidMount() {
        this.refreshTimesrTable();
    }

    refreshTimesrTable() {
        this.usersData = api.get('campeonatos/10/tabela')
            .then(response => response.data)
            .then(data => {
                console.log(data)
                this.setState({
                    times: data
                });
            });
    }








    render() {
        const { times } = this.state;

        return (
            <Container>
                <h3> Tabela do Campeonato Brasileiro </h3>
                <Row>
                    <Col sm="4"></Col>
                    <Col sm="4">
                        <Table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Time</th>
                                    <th>P</th>
                                    <th>J</th>
                                    <th>V</th>
                                    <th>E</th>
                                    <th>D</th>
                                    <th>Recentes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    times.length > 0 ? (
                                        times.map(time => (

                                            <tr key={time.posicao} class={time.posicao}>
                                                <td> 
                                                    <img class="escudo" src={time.time.escudo}></img>
                                                </td>
                                                <td> {time.time.nome_popular} </td>
                                                <td> {time.pontos} </td>
                                                <td> {time.jogos} </td>
                                                <td> {time.vitorias} </td>
                                                <td> {time.empates} </td>
                                                <td> {time.derrotas} </td>
                                                <td>
                                                    <span class={time.ultimos_jogos[0]}> ⬤ </span>
                                                    <span class={time.ultimos_jogos[1]} > ⬤ </span>
                                                    <span class={time.ultimos_jogos[2]} > ⬤ </span>
                                                    <span class={time.ultimos_jogos[3]} > ⬤ </span>
                                                    <span class={time.ultimos_jogos[4]} > ⬤ </span>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                            <tr>
                                                <td colSpan={3}>{times[0]} Nenhum time encontrado :c</td>
                                            </tr>
                                        )
                                }
                            </tbody>
                        </Table>
                    </Col>
                    <Col sm="4"></Col>
                </Row>
            </Container>


        );
    };
};

export default Home;