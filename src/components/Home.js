import React from "react";


function Home() {
  return (
    <div className="w-full relative">
      <div>
        
        <div className="home__container">
        <img
          className="w-full h-full"
          src="https://www.rd.com/wp-content/uploads/2019/11/steve-greig-portrait-scaled.jpg"
          alt=""
        />
      </div>
      </div>
      <div className="absolute w-full top-0 bg-white/20 flex flex-col items-center justify-evenly h-full">
        <div className="flex flex-col items-center justify-evenly text-gray-100 w-3/5">
          <h1 id="welcome" className="text-5xl text-black-500 font-bold mb-4">
            WELCOME TO PETFINDER
          </h1>
         <div  className="text-2xl text-center text-black-50 mb-4">
         <p id="aboutpage" className="mb-4">
         Petfinder is a website that helps connect potential pet owners with adoptable pets. The website features listings of adoptable pets from animal shelters and rescue organizations across Kenya. Petfinder allows users to search for adoptable pets by species (dogs, cats, etc.), breed, age, gender and  size.

        <span>The website also provides information on pet care and adoption, as well as resources for pet owners, such as pet-friendly apartments, pet insurance, and local veterinarians. Petfinder has been in operation since 1996 and has facilitated the adoption of millions of pets</span></p>

         </div>
          
          <div className="flex space-x-2 justify-center">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
