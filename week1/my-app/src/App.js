import './App.css';
import HobbyList from './components/HobbyList';
import GuaranteeComponent from './components/Guarantee';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <HobbyList />

      <div className='guarantee-container'>
        <GuaranteeComponent props={{ img: '/f-delivery.png', title: 'Free shipping', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }}/>
        <GuaranteeComponent props={{ img: '/coin.png', title: '100% Money Back', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' }}/>
        <GuaranteeComponent props={{ img: '/chat.png', title: 'Online support 24/7', description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam' }}/>
      </div>

      <div className='counter-container'>
        <Counter />
      </div>
      
    </div>
  );
}

export default App;
