import PlanetModal from '../PlanetModal/PlanetModal';
import Planets from '../Planets';
import { useToasts } from 'react-toast-notifications';
import { randomElement } from '../../utils';
function App(props) {
  const { addToast } = useToasts();
  return (
    <div>
      <h1 className="pt-8 text-3xl text-center font-bold mb-6 text-gray-700">
        Star Wars Planets
      </h1>
      <Planets />
      <PlanetModal
        isModalOpen={props.isModalOpen}
        selectedPlanet={props.selectedPlanet}
        handleCloseModal={props.closeModal}
        sendNotification={() => {
          const responses = {
            success: { message: 'Changes saved' },
            error: { message: 'Error saving changes' },
          };

          const selectedResponse = randomElement(['success', 'error']);

          addToast(responses[selectedResponse].message, {
            appearance: selectedResponse,
            autoDismiss: true,
          });
        }}
      />
    </div>
  );
}

export default App;
