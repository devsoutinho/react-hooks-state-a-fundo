import React from 'react';

class HomePageComClasse extends React.Component {
    state = {
        clicks: 0,
    }

    setClicks = (novoValor) => {
        console.log('Rolou um click!');
        this.setState({
            ...this.state,
            clicks: novoValor,
        });
        // Toda vez que chamamos um setState

    }

    pseudoSetState(novoState) {
        const stateAntigo = this.state;
        this.state = {
            ...novoState,
        };
        this.render();
    }

    render() {
        return (
            <div>
                <h1>
                    Contador de clicks
                </h1>
                <button onClick={() => {
                    this.setClicks(this.clicks + 1)
                }}>
                    {this.state.clicks}
                </button>
            </div>
        );
    }
}

/*
const virtualDocument = {
   tag: 'div',
   children: [
       {
           tag: 'h1',
           children: [
               'Contador de Clicks'
           ]
       },
       {
           tag: 'button',
           children: [
                0
           ]
       }
   ]
};
*/

// const arrayDeStatesDoReact = [
//     primeiroStateDoHomePageComHooks,
//     segundoStateDoHomePageComHooks,
// ];
// Motivos para não ter IF na criação de hooks:
// Renderiza: HomePageComHooks
// React.useState -> primeiroStateDoHomePageComHooks
// React.useState -> segundoStateDoHomePageComHooks

export default function HomePageComHooks() {
    const [clicks, setClicks] = React.useState(0);
    const [state, setState] = React.useState({ // state1
        clicks: 0,
    });

    return (
        <div>
            <h1>
                Contador de clicks
            </h1>
            <button onClick={() => {
                setState((stateAtual) => {
                    return {
                        ...stateAtual, // { clicks: 0 }
                        clicks: stateAtual.clicks + 1,
                    };
                });
                setState((stateAtual) => {
                    return {
                        ...stateAtual, // { clicks: 1 }
                        clicks: stateAtual.clicks + 100,
                    };
                });

                /*
                    setState({ // state2 
                        clicks: state.clicks + 100, // state.clicks 0 state1
                    });
                    setState({ // state3
                        clicks: state.clicks + 1, // state.clicks 0 state1
                    });
                */
            }}>
                {state.clicks}
            </button>
        </div>
    )
}