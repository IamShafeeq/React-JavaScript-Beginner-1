import Info from "./Child";

function tax(){
  return 31
}
function taxcalculations(salary){
  return salary*tax()/100

}
export default function App() {
  let name1="James"
  return (
    <div>
      <Info ename={name1} tax={tax} salary="2000" tcalculations={taxcalculations}/>
    </div>
  );
}
