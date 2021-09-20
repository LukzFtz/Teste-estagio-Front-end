import { useState } from 'react';
import '../css/thirdPage.css';

export default function App() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)
    const [feedback, setFeedback] = useState(false)
    const [message, setMessage] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const submitValue = (e) => {
        if (name === "") {
            setFeedback(false)
            setError(true)
            setMessage("O nome deve ser preenchido")
        } else if (email === "") {
            setFeedback(false)
            setError(true)
            setMessage("O e-mail deve ser preenchido")
        } else {

            fetch('https://85k7bv04na.execute-api.us-east-1.amazonaws.com/dev/register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": "luke.ftzp@gmail.com"
                },
                body: JSON.stringify({
                    name: name,
                    email: email
                })
            })
                .then((res) => res.json())
                .then(result => {
                    console.log(result)
                    setError(false)
                    setFeedback(true)
                    setMessage("Cadastro realizado com sucesso")
                })
                .catch(e => {
                    console.log(e)
                })
        }


        e.preventDefault()
    }


    return (
        <div id="contactPage" className="mainPageDiv">
            <div className="container">
                <div className="divHeader">
                    <h2 className="fs-1 text-start text-light">Quer conhecer mais sobre Neovision?</h2>
                </div>
                <form className="formStyle" onSubmit={submitValue}>
                    <div className="row">
                        <div className="d-none d-md-block">
                            {error &&
                                <div>
                                    <p className="fs-5 text-danger"><b>*{message}</b></p>
                                </div>
                            }
                            {feedback &&
                                <div>
                                    <p className="fs-5 text-success"><b>{message}</b></p>
                                </div>
                            }
                        </div>
                        <div className="col-12 col-md-4 ">
                            <input type="text" id="name" name="name" value={name} onChange={handleNameChange} className="inputStyle" placeholder="Nome" />
                        </div>
                        <div className="col-12 col-md-4 ">
                            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} className="inputStyle" placeholder="E-mail" />
                        </div>

                        <div className="d-block d-md-none">
                            {error &&
                                <div>
                                    <p className="fs-5  text-danger"><b>*{message}</b></p>
                                </div>
                            }
                            {feedback &&
                                <div>
                                    <p className="fs-5 text-success"><b>{message}</b></p>
                                </div>
                            }
                        </div>

                        <div className="col-12 col-md-2 ">
                            <input type="submit" id="enviar" value="Enviar" className="inputBtnStyle text-light fs-4" />
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}
