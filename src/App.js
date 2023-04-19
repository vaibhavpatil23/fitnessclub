import './App.css';
import Hero from './componant/Hero/Hero';
import Join from './componant/Join/Join';
import Programs from './componant/Programs/Programs';
import Reasons from './componant/Reasons/Reasons';
import Testimonials from './componant/Testimonials/Testimonials';
import Plans from './componant/plans/Plans';

function App() {
  return (
   <div className='App'>
<Hero/>
<Programs/>
<Reasons/>
<Plans/>
<Testimonials/>
<Join/>
   </div>
  );
}

export default App;
