

export default function Information(props) {
  
  return (
    <>
    Name:{props.ename} 
    <br/>
    Salary:{props.salary}
    <br/>
    Tax:{props.tax()}
    <br/>
    Tac Calculated:{props.tcalculations(parseInt(props.salary))}
    </>
  )
}
