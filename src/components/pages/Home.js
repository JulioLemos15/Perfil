import styles from './Home.module.css'
import Eu from '../../img/julio.jpg'


function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao Meu Perfil!</h1>
            <img src={Eu} alt="José Julio" />
            <p>Contato: 13991131677</p>
            <p>Email: lemosjulio75@gmail.com</p>
        </section>
    )
}

export default Home;