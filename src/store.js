export const initialStore = () => {  //estado inicial donde se definen las variables
  return {
    
      
    contacts: [] // Lista de contactos cargados dentro del array
  };
};

export default function storeReducer(store, action = {}) {  // cambios que se van a aplicar
  switch (action.type) {

    case 'set-contacts':  // Modifica la lista de contactos
      return {
        ...store, 
        contacts: action.payload
        
        
      };

    //case 'add-contact':   Se haria atraves de la Api
      
     // case 'edit-contact': edita con la Api
        

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
