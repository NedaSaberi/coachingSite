import LostPassForm from '../../components/lostPassForm/LostPassForm';

export default function LostPass() {
  return (
    <div>
      <div className="firstView">
        <div className="firstViewContent bg-orange">
          <h1>My account</h1>
        </div>
      </div>
      <div className="">
        <LostPassForm/>
      </div>
    </div>
  );
}
