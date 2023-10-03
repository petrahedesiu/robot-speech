import logo from './logo.svg';
import './App.css';
import { supabase } from './supabaseClient';

function App() {

  var prevSpeechOption = "off"
  const onClickHandler = async(event, speechOption) => {
    if (prevSpeechOption===speechOption)
      speechOption = "off"
    console.log(speechOption);
    const { error } = await supabase
        .from('Settings')
        .update({ Value: speechOption})
        .eq('Name', 'robot_presentation')
        prevSpeechOption = speechOption
  }

  var prevSpeechOption2 = "off"
  const onClickHandler2 = async(event, speechOption) => {
      if (prevSpeechOption2===speechOption)
        speechOption = "off"
      console.log(speechOption);
      const { error } = await supabase
          .from('Settings')
          .update({ Value: speechOption})
          .eq('Name', 'speech_demo_1')
          prevSpeechOption2 = speechOption
  }

  return (
    <div className="App">
        <button onClick={(event) => onClickHandler(event, "on")}> Present robot </button>
        <button onClick={(event) => onClickHandler2(event, "on")}> Speech Demo 1 </button>
    </div>
  );
}

export default App;
