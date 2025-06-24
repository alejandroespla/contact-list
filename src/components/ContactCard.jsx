import rigoImageUrl from "../assets/img/rigo-baby.jpg";

export const ContactCard = ({ full_name, address, phone, email }) => {
  return (
    <div className="profile-card w-100">
      <img src={rigoImageUrl} className="circle" alt="Rigo Baby" />

      <div className="w-100">
        <h5 className="card-title mb-2">{full_name}</h5>

        <div className="info-card">
          <div className="d-flex align-items-center">
            <i className="bi bi-geo-alt-fill text-body-tertiary" />
            <p className="card-text mx-2 text-body-tertiary">{address}</p>
          </div>

          <div className="d-flex align-items-center">
            <i className="bi bi-telephone-fill text-body-tertiary" />
            <p className="card-text mx-2 text-body-tertiary">{phone}</p>
          </div>

          <div className="d-flex align-items-center">
            <i className="bi bi-envelope-fill text-body-tertiary" />
            <p className="card-text mx-2 text-body-tertiary">{email}</p>
          </div>
        </div>
      </div>

      <div className="card-icons">
        <i className="bi bi-pencil-fill me-3" />
        <i className="bi bi-trash3-fill ms-3" />
      </div>
    </div>
  );
};