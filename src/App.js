import logo from './logo.svg';
import './App.css';
import Drag from './Drag'
import Discq from './Discq'
import store from './store/store'
import ReduxCounter from './ReduxCounter'
import Counter from './Counter'
// store.subscribe(function(){
// 	const currentState=store.getState()
// 	console.log('the currentState' +currentState.count)
// })
// store.dispatch({type:'counter/increase'})
// store.dispatch({type:'counter/increase'})
// store.dispatch({type:'counter/increase'})
// store.dispatch({type:'counter/decrease'})
function App() {
  return (<div>
   
    <Counter/>
    </div>
  );
}

export default App;
