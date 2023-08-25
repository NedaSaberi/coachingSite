import './Map.css'
export default function Map() {
    const Latitude = 59.3726;
    const Longitude = 18.0040;
  return (
    <div className="map-container position-relative">
      <div className="contacting-ways bg-orange text-white col-9 position-absolute d-flex py-5">
        <div className="col-4 px-5">
          <div className="key">Call Anytime</div>
          <div className="val">(123)456789</div>
        </div>
        <div className="col-4 border-start border-end px-5">
          <div className="key">Send Email</div>
          <div className="val">meghdad@gmail.com</div>
        </div>
        <div className="col-4 px-5">
          <div className="key">Our Location</div>
          <div className="val">
            Mall of Scandinavia, number 126
          </div>
        </div>
      </div>
      <iframe
        title="Map of Westfield Mall of Scandinavia"
        src={`https://maps.google.com/maps?q=Westfield+mall+of+scandinavia&ll=${Latitude},${Longitude}&z=13&ie=UTF8&iwloc=&output=embed`}
        className="h-100 w-100"
        style={{ border: "0" }}
        loading="lazy"
      ></iframe>
    </div>
  );
}
