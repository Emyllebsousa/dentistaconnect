import CardP from "@/app/components/CardP";

export default function Procedimento(){

return (
    <div style={{ padding: '20px' }}>
      <CardP title="Avaliação" duration="30 min" />
      <CardP title="Limpeza" duration="40 min" />
      <CardP title="Clareamento" duration="60 min" />
    </div>
  );
}