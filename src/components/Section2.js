import React from "react";

const PartnerProcess = () => {
  return (
    <section
      style={{ border: "1px solid red" }}
      className="py-16 bg-white h-[85vh] m-20 rounded-2xl p-10"
    >
      <h2 className="text-center text-3xl font-bold mb-1 pt-7 ">
        Simple Process to Become Partner
      </h2>

      <div className="flex justify-center items-center py-[15vh]">
        <div className="flex justify-between w-full max-w-[1000px] relative">
          <div className="bg-white p-8 rounded-lg shadow-xl flex-1 mx-5 text-center z-10">
            <h2 className="text-center text-xl font-bold mb-1">Register Your Plan</h2>
            <p>
              Complete a simple registration process and work with us to design
              a partnership package tailored to your business needs.
            </p>
          </div>

          <div
            className="absolute h-[50px] w-[100px] bg-no-repeat bg-contain"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=\\"0 0 100 50\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cpath d=\\"M0 0 C25 50, 75 50, 100 0\\" fill=\\"none\\" stroke=\\"%23ccc\\" stroke-width=\\"2\\" /%3E%3C/svg%3E")',
              top: "50%",
              left: "25%",
              transform: "translateY(-50%)",
            }}
          ></div>

          <div className="bg-white p-8 rounded-lg shadow-xl flex-1 mx-5 text-center z-10">
            <h2 className="text-center text-xl font-bold mb-1">Connect with Our Team</h2>
            <p>
              Start by reaching out to discuss your goals and how a partnership
              can enhance your offerings.
            </p>
          </div>

          <div
            className="absolute h-[50px] w-[100px] bg-no-repeat bg-contain"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=\\"0 0 100 50\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cpath d=\\"M0 0 C25 50, 75 50, 100 0\\" fill=\\"none\\" stroke=\\"%23ccc\\" stroke-width=\\"2\\" /%3E%3C/svg%3E")',
              top: "50%",
              right: "25%",
              transform: "translateY(-50%)",
            }}
          ></div>

          <div className="bg-white p-8 rounded-lg shadow-xl flex-1 mx-5 text-center z-10">
            <h2 className="text-center text-xl font-bold mb-1">Grow up Together</h2>
            <p>
              Begin offering exclusive Malta experiences to your clients,
              supported by our team every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerProcess;
