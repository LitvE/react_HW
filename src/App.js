import './App.css';
import image1 from '../src/img/IMG_0850.png'
import image2 from '../src/img/IMG_0851.png'
import CentralElemComp from './Components/CentralElemComp';
//import DivRender from './Components/DivRender';

const images = [
  {src: image2, alt: 'create an account'},
  {src: image1, alt: 'explore varieties'},
];

const texts = [
  {h2: 'Create/login to an existing account to get started', h3: 'Create an account', h4: 'An account is created with your email and a desired password'},
  {h2: 'Shop for your favorites meal as e dey hot', h3: 'Explore varieties', h4: 'Shop for your favorite meals or drinks and enjoy while doing it.'},
];

function App() {
  
  return (
    <div>
      <CentralElemComp isFirst={true} images={images} texts={texts}/>
      <CentralElemComp isFirst={false} images={images} texts={texts}/>
      {/* Part 2
      <DivRender /> */}
    </div>
  );
}

export default App;
