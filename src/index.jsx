import { setKeyboardMapping } from './settings/KeyboardMapping'
import './style.css'
import ReactDOM from 'react-dom/client'
import { KeyboardControls } from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <KeyboardControls
        map={setKeyboardMapping()}
    >
        <Canvas
            shadows
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ 2.5, 4, 6 ]
            } }
        >
            <Main />
        </Canvas>
        {/* <Interface /> */}
    </KeyboardControls>
)