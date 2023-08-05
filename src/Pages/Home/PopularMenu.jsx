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
    console.log(menu)
  return (
    <section className="mb-12">
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
    </section>
  )
}

export default PopularMenu