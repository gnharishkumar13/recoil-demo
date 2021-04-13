import {atom, useRecoilState, useRecoilValue} from "recoil";

const darkModeAtom = atom({
    key: 'darkMode',
    default: false
});


const DarkModeSwitch = () => {

    const [DarkMode, setDarkMode] = useRecoilState(darkModeAtom)

    console.log(DarkMode);

    return (
        <input type={"checkbox"} checked={DarkMode} onChange={ (event) => setDarkMode(event.currentTarget.checked)}/>
    )
}

const Button = () => {

    const darkModeValueFromAtom = useRecoilValue(darkModeAtom)

    return (
        <button style={{backgroundColor: darkModeValueFromAtom ? "red" : "blue"}}> A simple UI button</button>
    )
}

export const Atoms = () => {
    return (
        <div>
            <div>
                <DarkModeSwitch/>
            </div>
           <div>
               <Button/>
           </div>
        </div>
    )
}