
const MenuItem = ({item}) => {
    const{name,price,recipe}=item;
    const image = "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
    <div className="flex space-x-4">
        <img className="w-[80px] h-[80px]" style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="" />
        <div>
            <h3 className="uppercase">{name}-------------</h3>
            <p>{recipe}</p>
        </div>
        <p className="text-yellow-500">${price}</p>
    </div>
  )
}

export default MenuItem