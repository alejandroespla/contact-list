import perfil from "../assets/img/perfil.jpg";

export const ContactCard = ({ id, name, address, phone, email, deleteContact, editContact }) => {
  
  return (
    <div className="d-flex align-items-start border p-3">
      <img
        src={perfil}
        className=" circle"
        alt="perfil"

      />

      <div className="w-100">
        <h5 className="mb-3">{name}</h5>

        <div className="mb-2 d-flex align-items-center text-body-tertiary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill me-2" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zM8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
          </svg>
          <p className="mb-0">{address}</p>
        </div>

        <div className="mb-2 d-flex align-items-center text-body-tertiary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill me-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.611.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.65l2.457 2.457a.678.678 0 0 0 .65.178l2.19-.547c.52-.13 1.071-.014 1.494.315l2.306 1.794a1.745 1.745 0 0 1 .163 2.611l-1.034 1.034c-.668.668-1.647.763-2.464.319C7.683 14.597 1.403 8.317.439 3.548c-.444-.817-.35-1.796.319-2.464L1.885.511Z" />
          </svg>
          <p className="mb-0">{phone}</p>
        </div>

        <div className="mb-2 d-flex align-items-center text-body-tertiary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill me-2" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.998L0 4.697ZM6.761 8.83l-6.57 4.532A2 2 0 0 0 2 14h12a2 2 0 0 0 1.809-1.134l-6.57-4.532L8 9.586l-1.239-.757Zm3.436-1.726L16 11.801V4.697l-5.803 3.998Z" />
          </svg>
          <p className="mb-0">{email}</p>
        </div>
      </div>

      <div className="card-icons">
			<svg 
      onClick={() => editContact(id)}
      xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill me-3" viewBox="0 0 16 16">
  			<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
			</svg>
			<svg 
      onClick={() => deleteContact(id)}
      xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill ms-3" viewBox="0 0 16 16">
  			<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
			</svg>
        </div>
    </div>
  );
};