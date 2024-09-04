import React from 'react';
import styles from '@/procedureslist.module.css';

const ProceduresList = ({ procedures }) => {
  const pendingProcedures = procedures.filter(procedure => !procedure.completed);

  return (
    <div className={styles.proceduresList}>
      <h2>Procedimentos Pendentes</h2>
      {pendingProcedures.length > 0 ? (
        <ul className={styles.list}>
          {pendingProcedures.map((procedure, index) => (
            <li key={index} className={styles.item}>
              {procedure.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>Todos os procedimentos estão concluídos!</p>
      )}
    </div>
  );
};

export default ProceduresList;