import React from 'react';
import styles from '@/styles/home.module.css';
import Search from '@/components/Search';
import Card from '@/components/Card';

export default function Home() {
    const procedures = [
      { name: 'Limpeza dentária', completed: false },
      { name: 'Clareamento dental', completed: true },
      { name: 'Aplicação de flúor', completed: false },
    ];
  
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <Search />
      </div>

      <div className={styles.cards}>
        <Card
          title="SORRISO FORTE"
          description="Av. Getúlio Vargas Centro (6018.36 Mi, Picos Pi Brazil Pi 64600-002), Picos Pi Brazil Pi 600-002, PI "
          imageUrl="https://via.placeholder.com/150" // URL de exemplo de uma imagem
        />
        <Card
          title="COIFE ODONTO"
          description="Avenida Nossa Senhora de Fátima 803, Picos, PI, 64600-320 ·"
          imageUrl="https://via.placeholder.com/150" // Outra URL de imagem
        />
        <Card
          title="BRILHO ODONTO"
          description="Rua Coelho Rodrigues 412, Picos, PI, 64600-054"
          imageUrl="https://via.placeholder.com/150" // Coloque uma imagem padrão se imageUrl for null
        />
      </div>
    </div>
  );
}