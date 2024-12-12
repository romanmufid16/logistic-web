import React from "react";

const Home = () => {
  return (
    <>
      <section className="flex justify-around items-center py-16 text-primary">
        <div>
          <div className="text-7xl max-w-xl">
            <span className="text-accentHover block">Moving Made Easy</span>
            <span>Your Trusted House Moving Partner</span>
          </div>
        </div>
        <div>
          <span className="max-w-xl text-text mb-8 block">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorem, dignissimos quae nobis sint magni rerum, esse voluptatem
            distinctio repudiandae officiis, ipsa sequi. Omnis velit
            dignissimos, quisquam temporibus at obcaecati ab accusantium, alias
            vel ipsum repudiandae, harum hic eius doloremque quae? Cum fugit est
            voluptatum a, delectus repudiandae eum obcaecati?.
          </span>
          <a href="#" className="px-6 py-3 rounded-md bg-primary text-white">
            Get Started
          </a>
        </div>
      </section>
      <section className="bg-secondary p-20">
        <div className="max-w-lg bg-primary rounded-md p-10">
          <span className="block text-accent text-lg mb-10">
            Request A Quote
          </span>
          <form action="">
            <div className="mb-6">
              <span className="block text-white mb-5">About Yourself</span>
              <input
                type="text"
                className="text-sm block w-full bg-[#121212] px-5 py-4 rounded-xl mb-3"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="text-sm block w-full bg-[#121212] px-5 py-4 rounded-xl mb-3"
                placeholder="Email Adress"
              />
            </div>
            <div className="mb-6">
              <span className="block text-white mb-5">Moving</span>
              <input
                type="text"
                className="text-sm block w-full bg-[#121212] px-5 py-4 rounded-xl mb-3"
                placeholder="Moving From"
              />
              <input
                type="text"
                className="text-sm block w-full bg-[#121212] px-5 py-4 rounded-xl mb-3"
                placeholder="Moving To"
              />
            </div>
            <button className="bg-white text-xl px-6 py-4 rounded-xl">
              Get A Quote
            </button>
          </form>
        </div>
      </section>
      <div className="flex justify-evenly items-center p-10">
        <img src="logo/Logo Client 1.png" alt="" />
        <img src="logo/Logo Client 2.png" alt="" />
        <img src="logo/Logo Client 3.png" alt="" />
        <img src="logo/Logo Client 4.png" alt="" />
        <img src="logo/Logo Client 5.png" alt="" />
      </div>
      <section className="flex justify-around items-center bg-accentHover p-20">
        <div>
          <div className="max-w-xl rounded-xl overflow-hidden">
            <img
              src="https://placehold.co/400"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <div className="max-w-xl">
            <div className="text-5xl leading-snug mb-6">
              <span>About Us: </span>
              <span className="text-white">
                Your Reliable House Moving Partner
              </span>
            </div>
            <p className="text-darkGreen mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates libero similique explicabo perferendis, illum doloribus
              reiciendis esse, pariatur iste dolore, aliquam nisi quibusdam quae
              fugit maxime! Excepturi id repudiandae, architecto, impedit
              obcaecati voluptas modi incidunt iste earum molestiae non quis?
            </p>
            <ul className="flex gap-6 text-5xl">
              <li className="*:block">
                <span>32 +</span>
                <span className="text-base text-[#DEE2DD]">
                  Years Of Experience
                </span>
              </li>
              <li className="border border-green"></li>
              <li className="*:block">
                <span>12 K</span>
                <span className="text-base text-[#DEE2DD]">
                  Satisfied Clients
                </span>
              </li>
              <li className="border border-green"></li>
              <li className="*:block">
                <span>20 +</span>
                <span className="text-base text-[#DEE2DD]">
                  Countries Served
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
