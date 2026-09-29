import { useState } from "react"

export default function Ex1() {

    const [inputNickame, setInputNickname] = useState('');
    const [inputEmail, setInputEmail] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        console.log(e)
    }


    return (
        <div>
            <h2 className="h5">1.gestisci l'iscrizione alla newsletter nascondendo il form e mostrando un messaggio di ringraziamento dopo l'invio</h2>
            <div className=" " >
                <form onSubmit={handleSubmit} className="border border-4 rounded-5 border-warning p-4">
                    <h4>Iscriviti alla nostra newsletter</h4>
                    <div className="mb-3">
                        <label htmlFor="nickname" className="form-label">
                            Nickname
                        </label>
                        <input value={inputNickame} onChange={e => setInputNickname(e.target.value)} type="text" id="nickname" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input value={inputEmail} onChange={e => setInputEmail(e.target.value)} type="email" id="email" placeholder="Mario_Rossi@gmail.com" className="form-control" required />
                    </div>
                    <div className="text-end">
                        <button type="submit" className="btn btn-outline-warning">Iscrivimi</button>
                    </div>
                </form>

            </div>
            <div className=" w-75 mx-auto fw-bold text-center border border-4 rounded-5 border-success bg-success-subtle text-success">
                <p>Iscrizione completata con successo</p>
            </div>
        </div>
    )
}