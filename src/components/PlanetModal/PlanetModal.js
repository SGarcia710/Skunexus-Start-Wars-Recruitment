import React from 'react';
import { VscClose } from 'react-icons/vsc';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const PlanetModal = ({
  selectedPlanet,
  isModalOpen,
  handleCloseModal,
  sendNotification,
}) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    handleCloseModal();
    sendNotification();
  };
  return (
    !!isModalOpen && (
      <div className="absolute left-0 top-0 z-50 w-screen h-screen bg-opacity-90 bg-black flex justify-center items-center">
        <div
          style={{
            width: '600px',
          }}
          className="bg-white rounded-lg relative p-8 flex flex-col "
        >
          <VscClose
            className="w-6 h-6 cursor-pointer absolute right-0 top-0 mr-4 mt-4"
            onClick={handleCloseModal}
          />

          <p className="text-center text-3xl mb-8 font-semibold">
            Edit planet {selectedPlanet.name}
          </p>

          <form
            className="grid grid-cols-2 gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormInput error={errors.name} label="Name">
              <input
                ref={register({ required: true })}
                name="name"
                type="text"
                required
                className="py-1 px-1 text-gray-900 outline-none block h-full w-full"
              />
            </FormInput>
            <FormInput error={errors.rotation_period} label="rotation_period">
              <input
                ref={register({ required: true })}
                name="rotation_period"
                type="number"
                required
                className="py-1 px-1 text-gray-900 outline-none block h-full w-full"
              />
            </FormInput>
            <FormInput error={errors.orbital_period} label="orbital_period">
              <input
                ref={register({ required: true })}
                name="orbital_period"
                type="number"
                required
                className="py-1 px-1 text-gray-900 outline-none block h-full w-full"
              />
            </FormInput>
            <FormInput error={errors.diameter} label="diameter">
              <input
                ref={register({ required: true })}
                name="diameter"
                type="number"
                required
                className="py-1 px-1 text-gray-900 outline-none block h-full w-full"
              />
            </FormInput>
            <FormInput error={errors.climate} label="climate">
              <input
                ref={register({ required: true })}
                name="climate"
                type="text"
                required
                className="py-1 px-1 text-gray-900 outline-none block h-full w-full"
              />
            </FormInput>
            <FormInput error={errors.gravity} label="gravity">
              <input
                ref={register({ required: true })}
                name="gravity"
                type="text"
                required
                className="py-1 px-1 text-gray-900 outline-none block h-full w-full"
              />
            </FormInput>
            <FormInput error={errors.surface_water} label="surface_water">
              <input
                ref={register({ required: true })}
                name="surface_water"
                type="number"
                required
                className="py-1 px-1 text-gray-900 outline-none block h-full w-full"
              />
            </FormInput>

            <div
              className={`border ${
                !!errors.terrain ? 'border-red-600' : ''
              }  transition-all duration-500 relative rounded p-1`}
            >
              <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label htmlFor="name" className="bg-white text-gray-600 px-1">
                    terrain *
                  </label>
                </p>
              </div>
              <div className="relative inline-flex w-full">
                <svg
                  className="w-2 h-2 absolute top-0 right-0 mt-2 mr-4 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 412 232"
                >
                  <path
                    d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                    fill="#648299"
                    fillRule="nonzero"
                  />
                </svg>
                <select
                  name="terrain"
                  ref={register({ required: true })}
                  defaultValue={null}
                  className="rounded  focus-within:border-gray-500 focus-within:text-black pl-1 pr-10 w-full bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option value="">Choose a terrain</option>
                  <option value="desert">desert</option>
                  <option value="grasslands">grasslands</option>
                  <option value="mountains">mountains</option>
                  <option value="jungle">jungle</option>
                  <option value="rainforests">rainforests</option>
                  <option value="tundra">tundra</option>
                  <option value="ice caves">ice caves</option>
                  <option value="swamp">swamp</option>
                </select>
              </div>
            </div>
          </form>

          <button
            className=" mt-8 text-lg font-semibold 
                bg-gray-800 w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </button>
        </div>
      </div>
    )
  );
};

const FormInput = ({ children, label, error }) => {
  return (
    <div
      className={`border transition-all duration-500 relative rounded p-1 ${
        !!error ? 'border-red-600' : ''
      }`}
    >
      <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
        <p>
          <label htmlFor="name" className="bg-white text-gray-600 px-1">
            {label} *
          </label>
        </p>
      </div>
      <p>{children}</p>
    </div>
  );
};
PlanetModal.propTypes = {
  selectedPlanet: PropTypes.object,
  isModalOpen: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  sendNotification: PropTypes.func,
};
export default PlanetModal;
