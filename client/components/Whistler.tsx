import * as Tone from 'tone'
import * as React from 'react'

const synth: any = new Tone.Synth().toDestination();
const now: any = Tone.now();

export default class Whistler extends React.Component {

    render () {
        return (
            <div>
                <button onClick={()=>synth.triggerAttackRelease("C4", '8n')}>C4</button>
                <button onClick={()=>synth.triggerAttackRelease("C#4", '8n')}>C#4</button>
                <button onClick={()=>synth.triggerAttackRelease("D4", '8n')}>D4</button>
                <button onClick={()=>synth.triggerAttackRelease("D#4", '8n')}>D#4</button>
                <button onClick={()=>synth.triggerAttackRelease("E4", '8n')}>E4</button>
                <button onClick={()=>synth.triggerAttackRelease("F4", '8n')}>F4</button>
                <button onClick={()=>synth.triggerAttackRelease("G4", '8n')}>G4</button>
                <button onClick={()=>synth.triggerAttackRelease("G#4", '8n')}>G#4</button>
                <button onClick={()=>synth.triggerAttackRelease("A4", '8n')}>A4</button>
                <button onClick={()=>synth.triggerAttackRelease("A#4", '8n')}>A#4</button>
                <button onClick={()=>synth.triggerAttackRelease("B4", '8n')}>B4</button>
                <button onClick={()=>synth.triggerAttackRelease("B#4", '8n')}>B#4</button>
                <button onClick={()=>synth.triggerAttackRelease("C5", '8n')}>C5</button>
            </div>
        )
    }
}



