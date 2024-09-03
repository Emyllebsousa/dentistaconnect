import CardP from "@/components/CardP";
import Search from "@/components/Search";
export default function Procedimento(){

return (
  <div>
    <div className="serch">
    <Search/>

    </div>
   
    <div style={{ padding: '20px' }}>
      <CardP title="Avaliação" duration="30 min" />
      <CardP title="Limpeza" duration="40 min" />
      <CardP title="Clareamento" duration="60 min" />
    </div>
  </div>
  );
}