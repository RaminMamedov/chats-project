import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'

/*
* 1 - дописать функцию send
* 2 - дизэйблить кнопки пока идёт запрос
* 3 - сделать стили в соответствии с дизайном
* */

const HW13 = () => {
    const [code, setCode] = useState('')
    const [text, setText] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')
    const [isLoading, setIsLoading] = useState(false);


    const send = (x?: boolean | null) => () => {
        const url =
            x === null
                ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
                : 'https://samurai.it-incubator.io/api/3.0/homework/test';

        setCode('');
        setImage('');
        setText('');
        setInfo('...loading');
        setIsLoading(true);

        axios
            .post(url, {success: x})
            .then((res) => {
                setCode('Код 200!');
                setImage(success200);

                // Устанавливаем текст и информацию на основе ответа от сервера
                setText(res.data.message || 'Success message from server');
                setInfo('Data successfully sent to the server');
            })
            .catch((e) => {
                // В случае ошибки устанавливаем соответствующие сообщения
                if (e.response) {
                    // Ошибка, возникшая из-за ответа сервера
                    setCode(`Код ${e.response.status}!`);
                    setText(e.response.data.message || 'Error message from server');
                    setInfo('There was an error sending data to the server');
                    setImage(error400);
                } else if (e.request) {
                    // Запрос был создан, но сервер не ответил
                    setCode('No Response!');
                    setText('No response from the server');
                    setInfo('Please check your network connection or try again later');
                    setImage(error500);
                } else {
                    // Ошибка при настройке запроса
                    setCode('Request Error!');
                    setText('There was an error setting up the request');
                    setInfo(e.message);
                    setImage(errorUnknown);
                }
            })
            .finally(() => {
                setIsLoading(false); // Возвращаем состояние загрузки обратно в false после завершения запроса
            });
    }


    // const send = (x?: boolean | null) => () => {
    //     const url =
    //         x === null
    //             ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
    //             : 'https://samurai.it-incubator.io/api/3.0/homework/test'
    //
    //     setCode('')
    //     setImage('')
    //     setText('')
    //     setInfo('...loading')
    //
    //     axios
    //         .post(url, {success: x})
    //         .then((res) => {
    //             setCode('Код 200!')
    //             setImage(success200)
    //             // дописать
    //
    //         })
    //         .catch((e) => {
    //             // дописать
    //
    //         })
    // }

    return (
        <div id={'hw13'}>
            <div className={s2.hwTitle}>Homework #13</div>

            <div className={s2.hw}>
                <div className={s.buttonsContainer}>
                    <SuperButton
                        id={'hw13-send-true'}
                        onClick={send(true)}
                        xType={'secondary'}
                        disabled={isLoading}
                        // дописать

                    >
                        Send true
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-false'}
                        onClick={send(false)}
                        xType={'secondary'}
                        disabled={isLoading}
                        // дописать

                    >
                        Send false
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-undefined'}
                        onClick={send(undefined)}
                        xType={'secondary'}
                        disabled={isLoading}
                        // дописать

                    >
                        Send undefined
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-null'}
                        onClick={send(null)} // имитация запроса на не корректный адрес
                        xType={'secondary'}
                        disabled={isLoading}
                        // дописать

                    >
                        Send null
                    </SuperButton>
                </div>

                <div className={s.responseContainer}>
                    <div className={s.imageContainer}>
                        {image && <img src={image} className={s.image} alt="status"/>}
                    </div>

                    <div className={s.textContainer}>
                        <div id={'hw13-code'} className={s.code}>
                            {code}
                        </div>
                        <div id={'hw13-text'} className={s.text}>
                            {text}
                        </div>
                        <div id={'hw13-info'} className={s.info}>
                            {info}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW13
