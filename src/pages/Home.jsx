import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

import { Link } from "react-router-dom";
import { ContactCard } from "../components/ContactCard";


export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="container mt-5">
			<div className="d-flex justify-content-end mt-5">
				<Link to= "/addnewcontact">
					<button type="button" class="btn btn-success ">Add new contact</button>	
				</Link>
			</div>

			<ContactCard />
		
			
			
		</div>
	);
}; 