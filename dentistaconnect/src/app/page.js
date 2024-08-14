import Header from "@/Header/Header";
import styles from "@/Styles/page.module.css";
import Card from "@/Componentes/Card";
import Link from 'next/link';

export default function Home() {
  const cardsData = [
    {
      title: 'AGENDAMENTO',
      image: '/agendamento.png',
      link: '/agendamento',
    },
    {
      title: 'CONSULTA',
      image: '/Consultas.png',
      link: '/consulta',
    },
    {
      title: 'SOBRE',
      image: '/Sobre.png',
      link: '/sobre',
    },
    {
      title: 'CONTATO',
      image: '/Contato.png',
      link: '/contato',
    },
    {
      title: 'SERVIÇOS',
      image: '/Servicos.png',
      link: '/servicos',
    },
    {
      title: 'EQUIPE',
      image: '/Equipe.png',
      link: '/equipe',
    },
  ];
  

  return (
    <>
      <Header />

      <div className={styles.tela}>
            <h2 className={styles.titulo}>Olá, fulano</h2>
          </div>

      <div className={styles.cardContainer}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </>
  );
}
