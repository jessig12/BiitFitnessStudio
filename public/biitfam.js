const fs =require('fs');

const json_members = readFileSync('/registro.json', 'utf-8');
const members = JSON.parse(json_members);


let newMember = {
    email,
    first_name,
    last_name,
    movil,
    password
    
   };
  
   members.push(newMember);
  
  fs.writeFileSync('registro.json', json_members,'utf-8');
  const  json_members = JSON.stringify(members);