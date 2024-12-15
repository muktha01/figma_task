import React from 'react'

const Banner = () => {


  return (
  <div className="banner bg-gradient-to-b from-red-50 bg-gradient-to-r from-red-250  flex justify-between  h-[100vh] gap-8 px-8">
  
    <div className="text-center pl-14 flex-1 : ">
      <h1 className="text-6xl text-left pt-32 font-bold mb-4">Join Malta’s </h1>
      <h1 className="text-6xl text-left  font-bold mb-4">Leading Tourism </h1>
      <h1 className="text-6xl text-left  font-bold mb-4">Platform</h1>
      <p className="text-gray-600 text-left  text-2xl mb-6">
          Thank you for choosing to partner with <br/>
          MaltaXplore, the go-to platform for booking <br/>
          tours, experiences, and services in Malta.
      </p>
      <p className="text-gray-600 text-left  mb-6">
      <button className="bg-red-500 text-white  px-6 py-3  hover:bg-red-600 rounded">Get Started Now</button>

      </p>
      
    </div>


    <div className=" flex-1 flex pt-0 justify-center space-x-4">
      <div class=" justify-center pt-16  p-4 ">
        <div style={{height:"60vh", width:"30vw", position:"relative", borderRadius:"40px"}} class="flex flex-col  gap-8 bg-[url('https://s3-alpha-sig.figma.com/img/05ed/4852/698f5c735a490086d2e974a69457a819?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KBY8jYpVrr~WTm1M-GuGZABm0F2XSF2lMYEEU7N7Y7McsDtVjEON6n7tMZDJ3Mh6A0SwXLK-k8Uq2mkKv5rLmEWWLS-hhBnFaAwh7cUxkMrS0ObbBLcbdNIc8ZzwmnZHoFKi1986xPrGzZ8CIRn6vpgUN9d6te4hAT4WpTjqU0Mx2vFx-XQjgGjHAqPCzMSGmZ07enNW8H0kywMCj5dx7VOaKW8EQaTvO1MQshbEx6lXQapybVotVvnIHpuP59XWbvQgESzh2vmYQIFbvoVHCi8Uev0XA~zep1W212idVajz6KZV3Z1aipWQPeJMzQjWHvrCDNJ2r~Ni47KvUchccg__')] bg-cover  bg-center">   

          <div style={{height:"200px"}} class="grid grid-cols-5">
            <div style={{border:"solid white 8px",borderRadius:"20%"}} class ="col-span-2 bg-[url('https://s3-alpha-sig.figma.com/img/49d1/d588/5964cf88c347639ea0f6aa8906c93e29?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l4LvDUpRgxtaC2uyGtnjXmJw65GmJifqSzpeKDV6cSlSa7SKnn7cVKSfghWnCWhgi2yI7TvnFVAQVDzfXgoC9Cx5LpVzhZPB8WR6oDpi~jLUg69wgBqqPs~yWGSnkYp~-mRIkzvamUShVLTb5ykS3txJvy3hThkUbIM~fxjWgJxVaaqz~pIw6cMLgFphepRdHvgljMQpoEp-d2P1fLALQYo5wDARfNkAT50AsyxGL7Bs9QGtzoJaxu2OaGYhdX~RCDCkUjGFIymNAThNDoM5KIutkdyPjYz6aB4Pu-VP8GX9cMfbpHw38sTQJnwaFhEbi5IlzJjhm5S4rlOw0~JNaA__')] text-white p-4 text-center bg-cover  bg-center">
              
            </div>
            <div style={{ borderTop:" solid white 1px ", borderRadius:"50px" }}  class="col-span-2   text-white p-4  text-center">
              
            </div>
            <div style={{border:"solid white 10px",position:"relative",bottom:"10px"}}  class="col-span-1 rounded-t-full rounded-b-full text-white p-4 text-center">
             
            </div>
          </div>
          <div style={{height:"100px", width:"170px", position:"relative", border:"solid white 10px",top: "161px", right:"6px"}}  class=" flex-col  rounded-l-full rounded-r-full   gap-8 bg-[url('https://s3-alpha-sig.figma.com/img/f24b/d0e2/11d5c0bea2cd2eff8e7baa7846d8b003?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TvbGYjPFcDZUD9M5E6vuXNjkvxj3hMZpSB9~0hk25omOmLCO~mtFCG1Z98l4xmgvcrg1DdRKqOF8keaZ537YrWfvE7XIRZeCOKGUb56eT7GpyUsN7HWI5gRNAZU55Q0qoS5uoySklzhWct8wUkzLb1HrTywED7UVgmvD9JhJwJhxXWTNLQURVYz9oWiYGhaWnv8dMtDaJcj17dX2817hCtwrHgPs7fu-uNJB8-ebgtwIR-pb4B~XYPDfXoNN~gkqp1QKYHNMcgzib1-FWnHwJ219WQjxQ-WflIRDeBAJSuAbV5UMHm~qQuJ3ByVB8rLYHbCE8rt9N~rZs74yDEeLxw__')] bg-cover  bg-center">  </div>
          </div>

        </div>
    </div>
  </div>


  )
}

export default Banner