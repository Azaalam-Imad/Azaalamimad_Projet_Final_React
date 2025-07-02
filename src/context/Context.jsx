import { createContext, useState } from "react";
import produit from '../json/produit.json'

export const Mycontext = createContext();

export const MyProvider = ({ children }) => {
    const [datashop,setDatashop]= useState([])
    const [cont,setcont] = useState(1)
    // const [prixtot,setPrixtot] = useState("")
    const [prix,setPrix]=useState([0])
  const addcart = (id)=>{
    const produiadd = produit.filter(e=> e.id == id)

    console.log(produiadd);
    const prixw = [...prix]
    prixw.push(produiadd[0].price)
    setPrix(prixw)
    const brui = [...datashop]
    brui.push(produiadd)
    setDatashop(brui)
  }
  console.log(datashop);
  console.log(prix);
  const prixtot =prix.reduce((e,t)=> e+t)
  console.log(prixtot);

const supprodcart = (id) => {

  const updatedData = [...datashop];
  const indexToRemove = updatedData.findIndex(item => item[0].id === id);

  if (indexToRemove !== -1) {
    const removedItem = updatedData.splice(indexToRemove, 1)[0];
    setDatashop(updatedData);

   
    const updatedPrix = [...prix];
    const prixIndex = updatedPrix.indexOf(removedItem[0].price);
    if (prixIndex !== -1) {
      updatedPrix.splice(prixIndex, 1);
      setPrix(updatedPrix);
    }
  }
};
const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  const [cpas, setCpas] = useState("");
  const [lognam, setLognam] = useState("");
  const [logpass, setLogpass] = useState("");
  const [mostakhdim, setMostakhdim] = useState("");
   let user = {
    Email: email,
    Name: nom,
    Password: password,
    Cpassword: cpas,
  };
// ********************************
  const log = (lognam, logpass) => {
    const found = users.find(
      (val) =>
        (val.Email == lognam || val.Name == lognam) && val.Password == logpass
    );
    setMostakhdim(found);
    return !!found;
  };

// ********************************
  const sin = () => {
    if (
      cpas == password &&
      password !== "" &&
      nom.trim() !== "" &&
      email.split("@").length == 2
    ) {
      // users.push(user);
      // darooori ndir noskha 3ad n3adal 3la data ola rada tmchi liya 39al mzyan 3liha
      const updated = [...users];
      updated.push(user);
      setUsers(updated);
      setEmail("");
      setCpas("");
      setPassword("");
      setNom("");
      console.log(users);

      return true;
    }
      
      return false;
    
   
  };





  
  const all = { datashop,setDatashop,addcart,produit,cont,prixtot,supprodcart,users,
    sin,
    log,
    email,
    nom,
    password,
    cpas,
    setCpas,
    setEmail,
    setNom,
    setPassword,
    setLognam,
    setLogpass,
    lognam,
    logpass,
    setMostakhdim,
    mostakhdim,};

  return <Mycontext.Provider value={all}>{children}</Mycontext.Provider>;
};