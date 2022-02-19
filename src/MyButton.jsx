import style from './MyButton.module.css'
import {useEffect, useState} from "react";
import RandomNum from "./RandomNum";

const MyButton = () => {
    let randNum = Math.floor(Math.random() * 100)
    const [random, setRandom] = useState([])
    const newRandom = () => {
        setRandom([...random, randNum])
    }

    let [num, setNum] = useState(0)
    const numUp = () => {
        setNum(num + 1)
    }
    const double = () => {
        newRandom()
        numUp()
    }

    useEffect(() => {
        // до перересовки
        const timeout = setTimeout(double, 3000)
        return () => {
            // перед уничтожением
            clearTimeout(timeout)
        }
    }, [num])

    /*console.log(num)*/
    return (
        <div>
            <div className={style.block}>
                <button onClick={double}> Go UP</button>
                <div className={style.num}>
                    <div>
                        {num}
                    </div>
                </div>

            </div>
            <div>
                <RandomNum random={random}/>
            </div>

        </div>
    );
}
export default MyButton