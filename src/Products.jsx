function Products () {
  const flowers = [
    {
      flowerName : 'BRIGHT BLOOMS',
      price: '$299.20',
      img: 'pot1.png'
    },
    {
      flowerName : 'PASTEL PETALS',
      price: '$172.25',
      img: 'pot2.webp'
    },
    {
      flowerName : 'HYDRANGEA',
      price: '$140.50',
      img: 'pot3.jpg'
    },
    {
      flowerName : 'JEWEL TONES',
      price: '$40.50',
      img: 'pot4.jpg'
    },
    {
      flowerName : 'CELEBRATE',
      price: '$250.50',
      img: 'pot5.webp'
    },
    {
      flowerName : 'FLORAL BRACE',
      price: '$190.00',
      img: 'pot6.jpg'
    },
    {
      flowerName : 'BOUNTIFUL GARDENER',
      price: '$140.50',
      img: 'pot7.jpg'
    },
    {
      flowerName : 'YELLOW ROSES',
      price: '$160.00',
      img: 'pot8.webp'
    },
    {
      flowerName : 'ELEGANT WHITES',
      price: '$60.00',
      img: 'pot9.webp'
    },
    {
      flowerName : 'SUCCULENT',
      price: '$80.00',
      img: 'pot10.webp'
    },
    {
      flowerName : 'ORCHID',
      price: '$80.00',
      img: 'pot11.jpg'
    }
  ]

  return (
    <div className="mt-3 mx-[5%]">
      <h3 className="bg-[#f18c8c] text-center rounded-lg font-bold text-3xl">
        Latest 
        <span className="text-red-500"> Products</span>
      </h3>
      <div className="flex mt-2 gap-3 flex-wrap items-center justify-center">
        {
          flowers.map((flower) => {
            return <>
              <div className="cursor-pointer gap-3 w-[200px] relative rounded-xl shadow-black shadow-inner overflow-hidden p-2">
                <div className="h-[250px] rounded-lg justify-center flex items-center overflow-hidden">
                  <img src={`src/assets/${flower.img}`} alt=""  className="hover:scale-110 h-full w-full object-cover transition-all duration-1000"/>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold">{flower.flowerName}</h3>
                  <p className="text-red-400 font-bold">{flower.price}</p>
                </div>
                <p className="absolute top-3 rounded-[3px] p-[1px] left-3 bg-white text-red-400 text-sm">New</p>
                <p className="absolute bottom-4 right-4 font-bold bg-red-400 p-[1px] rounded-[3px] hover:text-white active:text-white">Buy</p>
              </div>
            </>
          })
        }
      </div>
    </div>
  )
}

export default Products;
