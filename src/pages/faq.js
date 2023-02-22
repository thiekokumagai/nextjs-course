import { useEffect } from 'react'
import Link from '../components/link'
export default function FAQPage(){
    useEffect(()=>{
        const FAQ_API_URL = '';
        fetch(FAQ_API_URL)
            .then((respostaDoServidor)=>{
                return respostaDoServidor.json();
            })
            .then((resposta) => {
                console.log(resposta);
            });
    }, []);
    return(
        <div>
            <h1>Alura Cases - Pagina de Perguntas FAQ</h1>
            <Link href="/">
                Ir para o home
            </Link>
        </div>
    )
}