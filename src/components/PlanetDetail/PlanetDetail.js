import Lottie from 'lottie-react-web';
import React from 'react';
import animation from '../../assets/lottie/21271-star-wars-day-2020.json';

const PlanetDetail = (props) => {
  // I just was playing with some styles... At this moment I dont have more time to spend in the challenge
  return (
    <div class="min-w-screen min-h-screen flex-col flex justify-center items-center px-5 py-5">
      <div className="bg-gray-900 max-w-screen-xl p-16 rounded-lg shadow-xl">
        <div class="w-full bg-indigo-600 text-white rounded shadow-xl py-5 px-5 mb-8">
          <div class="flex flex-wrap -mx-3 items-center">
            <div class="w-1/4 px-3 text-center hidden md:block">
              <div class="p-5 xl:px-8 md:py-5">
                <Lottie
                  width="100%"
                  options={{
                    animationData: animation,
                  }}
                />
              </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-2/4 px-3 text-left">
              <div class="p-5 xl:px-8 md:py-5">
                <h3 class="text-2xl">
                  Details about {props.selectedPlanet.name}
                </h3>
                <h5 class="text-xl mb-3">Lorem ipsum sit amet</h5>
                <p class="text-sm text-indigo-200">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro sit asperiores perferendis odit enim natus ipsum
                  reprehenderit eos eum impedit tenetur nemo corporis laboriosam
                  veniam dolores quos necessitatibus, quaerat debitis.
                </p>
              </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/4 px-3 text-center">
              <div class="p-5 xl:px-8 md:py-5">
                <a
                  class="block w-full py-2 px-4 rounded text-indigo-600 bg-gray-200 hover:bg-white hover:text-gray-900 focus:outline-none transition duration-150 ease-in-out mb-3"
                  href="https://github.com/SGarcia710"
                  target="_blank"
                >
                  My Github
                </a>
                <a
                  href="https://swapi.dev/"
                  target="_blank"
                  class="block w-full py-2 px-4 rounded text-white bg-indigo-900 hover:bg-gray-900 focus:outline-none transition duration-150 ease-in-out"
                >
                  SWAPI
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap mb-2 w-full">
          <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
            <div class="bg-green-600 border rounded shadow p-2">
              <div class="flex flex-row items-center">
                <div class="flex-shrink pl-1 pr-4">
                  <i class="fa fa-wallet fa-2x fa-fw fa-inverse"></i>
                </div>
                <div class="flex-1 text-right">
                  <h5 class="text-white">Diameter</h5>
                  <h3 class="text-white text-3xl">
                    {props.selectedPlanet.diameter}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2">
            <div class="bg-blue-600 border rounded shadow p-2">
              <div class="flex flex-row items-center">
                <div class="flex-shrink pl-1 pr-4">
                  <i class="fas fa-users fa-2x fa-fw fa-inverse"></i>
                </div>
                <div class="flex-1 text-right">
                  <h5 class="text-white">Rotation Period</h5>
                  <h3 class="text-white text-3xl">
                    {props.selectedPlanet.rotation_period}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pr-3 xl:pl-1">
            <div class="bg-yellow-500 border rounded shadow p-2">
              <div class="flex flex-row items-center">
                <div class="flex-shrink pl-1 pr-4">
                  <i class="fas fa-user-plus fa-2x fa-fw fa-inverse"></i>
                </div>
                <div class="flex-1 text-right pr-1">
                  <h5 class="text-white">Orbital Period</h5>
                  <h3 class="text-white text-3xl">
                    {props.selectedPlanet.orbital_period}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2 xl:pl-3 xl:pr-2">
            <div class="bg-purple-600 border rounded shadow p-2">
              <div class="flex flex-row items-center">
                <div class="flex-shrink pl-1 pr-4">
                  <i class="fas fa-server fa-2x fa-fw fa-inverse"></i>
                </div>
                <div class="flex-1 text-right">
                  <h5 class="text-white">Films</h5>
                  <h3 class="text-white text-3xl">
                    {props.selectedPlanet.films.length}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pl-2 xl:pr-3">
            <div class="bg-red-600 border rounded shadow p-2">
              <div class="flex flex-row items-center">
                <div class="flex-shrink pl-1 pr-4">
                  <i class="fas fa-tasks fa-2x fa-fw fa-inverse"></i>
                </div>
                <div class="flex-1 text-right">
                  <h5 class="text-white">Residents</h5>
                  <h3 class="text-white text-3xl">
                    {props.selectedPlanet.residents.length}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2 xl:pl-1">
            <div class="bg-pink-600 border rounded shadow p-2">
              <div class="flex flex-row items-center">
                <div class="flex-shrink pl-1 pr-4">
                  <i class="fas fa-inbox fa-2x fa-fw fa-inverse"></i>
                </div>
                <div class="flex-1 text-right">
                  <h5 class="text-white">Population</h5>
                  <h3 class="text-white text-3xl">
                    {props.selectedPlanet.population}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetail;
