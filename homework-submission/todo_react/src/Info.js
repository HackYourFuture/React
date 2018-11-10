import React from 'react';
import logo from './logo.svg';

function SomeInfo(props) {

    return <div className='topic'>
        {props.img}
        {props.topic}


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
        this.setState({
            some_info: [
                {
                    img: <img src="https://everipedia-storage.s3-accelerate.amazonaws.com/ProfilePics/6666624538227426824.png"
                        alt="r" width="250" />,
                    topic: ' React was created by Jordan Walke, a software engineer at Facebook. He was influenced by XHP, an HTML component framework for PHP.[9] It was first deployed on Facebook\'s newsfeed in 2011 and later on Instagram.com in 2012. It was open-sourced at JSConf US in May 2013.React Native, which enables native Android, iOS, and UWP development with React, was announced at Facebook\'s React.js Conf in February 2015 and open-sourced in March 2015.On April 2017, Facebook announced React Fiber, a new core algorithm of React framework library for building user interfaces. React Fiber was to become the foundation of any future improvements and feature development of the React framework.'

                }
            ]
        }
        );
    }

    render() {
        return (
            <div>

                <button type="button" className="infoBtn" onClick={this.changeEventHandler} > Click Me! </button>

                <div className='info' >
                    < SomeInfo img={this.state.some_info[0].img} topic={this.state.some_info[0].topic} />
                </div>

            </div>
        )
    }
}

export default Info


