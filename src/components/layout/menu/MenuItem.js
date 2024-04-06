export default function MenuItem(){
    return(
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-2xl hover:shadow-black/25
        transition-all">
            <div className="text-center">
          {/* <img src="/food_1.png" alt="food" /> */}
          <img src="/food_1.png" className="max-h-auto max-h-24 block mx-auto" alt="food" />
          </div>
          <h4 className="font-semibold text-xl my-3">Combo</h4>
          <p className="text-gray-500 text-sm">
            Bite into satisfaction with our mouthwatering burger and cool,
            refreshing drink combo! Indulge in juicy, flame-grilled patties.
          </p>
          <button className="mt-4 bg-primary text-white rounded-full px-6 py-2">
            {" "}
            Add To Cart ₹400
          </button>
        </div>
    )
}