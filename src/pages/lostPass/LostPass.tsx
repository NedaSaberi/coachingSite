import LostPassForm from '../../components/lostPassForm/LostPassForm';

export default function LostPass() {
  return (
    <div className='lost-pass'>
      <div className="first-view">
        <div className="first-view-content bg-orange">
          <h1>My account</h1>
        </div>
      </div>
      <div className="">
        <LostPassForm/>
      </div>
    </div>
  );
}
