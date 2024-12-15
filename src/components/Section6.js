import React from 'react'

const GetStatedBanner = () => {
  return (
    <div className='p-20'>
    <div
      className="relative p-20 bg-cover [background-position:50%_80%] bg-no-repeat rounded-lg text-center py-20 px-4"
      style={{
        backgroundImage: "url('https://s3-alpha-sig.figma.com/img/5191/7d17/b9ffd59f31132d2e75ac2ba73e001f7c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dEbZhl8MlgUpBsxbS74TXX7TF-ig4qq6x6fDhmnyt5k9ibw9jUmWFU5dAB9jVBwDls4oaUDgNDDeckxEREeeleDe5fsoVuOEPOgnNJ7f~aqmsZ2Yn0L1NC3fUsONG317XKTxvjZHKUX9eqvSlK8ezDl9HGZEyC2n1YqNdWvgLS~FjnRqVRNFXI1iKj0nTmeuPdk~tBKrnoD4Zg0mVzKuV9m0kA8KOyMSNc1aqmAvInfLZsaIkdYLO-449O6PmyDeu5D01xu5bfjDboa68FJlU2USRzbDLgPRH0ExQucAcXGg8xni33l3sfrf2KZu5gXbCup8SC4DX-2erZb1G18HSA__')", // Replace with your image URL
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Black overlay with opacity */}
  
      {/* Main Content */}
      <div className="text-white max-w-2xl mx-auto relative z-10"> {/* z-10 to bring content above the overlay */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Experience Malta Like <br/> Never Before?
        </h2>
        <p className="text-xs sm:text-xl mb-6">
          Start exploring now and book the best tours, activities, and dining
          experiences on the island.
        </p>
        <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-lg">
          Get Started Now
        </button>
      </div>
    </div>
  </div>
  
  )
}

export default GetStatedBanner