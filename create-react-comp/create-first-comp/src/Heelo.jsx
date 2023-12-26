function Heelo() {
  let myname='Bhagyshri'
  let sirname='Kulkarni'
  let fullname =()=>{
    return  myname+' '+sirname;
  }
  return <div>Heelo my name is {fullname()}</div>;
}
export default Heelo;