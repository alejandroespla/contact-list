import { Link, useNavigate } from "react-router-dom";  //importar Link!!

export const AddNewContact = () => {
  

  return (
    <div className="container mt-5">
      
    <form className="w-100">
        <h1 className="text-center m-5" >Add New Contact</h1>
    <div className="mb-3">
        <label for="exampleInputName" className="form-label">Full Name</label>
        <input type="fullName" className="form-control" id="exampleInputName" aria-describedby="Full name" placeholder="Full name" />
    </div>
    <div className="mb-3">
        <label for="exampleInputEmail" className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>
    <div className="mb-3">
        <label for="exampleInputphone" className="form-label">Phone</label>
        <input type="phone" className="form-control" id="exampleInputEmail1" aria-describedby="phonelHelp" placeholder="Enter phone"/>
    </div>
    <div className="mb-3">
        <label for="exampleInputaddress" className="form-label">Adress</label>
        <input type="address" className="form-control" id="exampleInputAdress" aria-describedby="addresslHelp" placeholder="Enter address"/>
    </div>
  
  <button onClick={() => dispatch({
                  type: "add-contact", 
                  payload: {}
                })} 
  type="submit" className="btn btn-primary mt-3 w-100">
    Save
  </button>
  <div className="my-1">
    <Link to= "/" > <a href="">or get back to contacts</a> </Link>
  </div>
  
  
</form>

    </div>
  );
};

