import { useEffect, useState } from "react"
import SectionTitle from "../../Componants/SectionTitle"
import MenuItem from "../Shared/MenuItem"



const PopularMenu = () => {
    const[menu,setMenu]=useState([])
    useEffect(()=>{
        const fetchJsonData = async () => {
            try {
              const response = await fetch('/menu.json');
              const data = await response.json();
              const popularItems = data.filter(item=>item.category==='popular')
              setMenu(popularItems);
            } catch (error) {
              console.error('Error fetching JSON data:', error);
            }
          };
          fetchJsonData();
    },[])
  return (
    <section className="mb-12 md:mx-12 md:px-12 px-6">
        <SectionTitle
        heading ="From Our Menu"
        subHeading="Popular Items"
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-4">
            {
                menu.map(item=><MenuItem 
                    key={item._id}
                    item={item}
                    ></MenuItem>)
            }
        </div>
        <div className="flex justify-center pt-4">
          <button className="btn btn-outline border-black hover:bg-black border-b-4 text-black hover:text-white">View Full Menu</button>
        </div>
    </section>
  )
}

export default PopularMenu