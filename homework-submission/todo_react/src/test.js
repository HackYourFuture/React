import React from 'react';
import logo from './logo.svg';

function SomeInfo(props) {

    return <div>  {props.img}<br />
        <p className='topic'> {props.topic}</p>


    </div>
};

class Info extends React.Component {
    state = {
        some_info: [{
            img: <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        }
        ]
    }

    changeEventHandler = () => {
        alert('your button has clicked => The state gonna change!');
        this.setState({
            some_info: [
                {
                    img: <img src="https://www.10000ft.com/assets/img/common-react-mistakes-remedies.jpg"
                        alt="r" width="250" />, topic: ' The atomic whirl is the logo of the American Atheists,and has come to be used as a symbol of atheism in general as some American Atheist members claim.The Atomic Whirl is based on the Rutherford model of the atom which is proven wrong, erroneusly showing the orbital paths of electrons around the central nucleus, and not on the atomic orbitals which is a near perfect experimental approximation.It resembles the authoritative logos and symbols of the United States Atomic Energy Commission and the International Atomic Energy Agency who also based their designs on the erroneous Rutherford Model.The symbol is used by the American Atheists organization to symbolize that"only through the use of scientific analysis and free, open inquiry can humankind reach out for a better life.  American Atheists has a copyright on the symbol. '

                }
            ]
        }
        );
    }

    render() {
        return (
            <div>
                <button onClick={this.changeEventHandler}>Click Me!!!: </button>

                < SomeInfo img={this.state.some_info[0].img} topic={this.state.some_info[0].topic} />
            </div>
        )
    }
}

export default Info


