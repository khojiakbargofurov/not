import Image from "../../../../node_modules/next/image";
interface ParamsInterface{
  params : {
    id: number;
  }
}
const request = async (id : number) => {
  const req = await fetch(`${"https://dummyjson.com/products/" + id }`, {
    next: {
      revalidate: 1,
    },
  });
  const data = await req.json()

  return data
}

async function Detailspage(params : ParamsInterface) {
  const product = await request(params.params.id);
  console.log(product);
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-32">
      <div>
        <h1 className="font-bold text-3xl pb-8">{product.title}</h1>
        <p className="text-2xl pb-8">{product.description}</p>
        <h3 className="text-xl font-bold">Brand: {product.brand}</h3>
        <h3 className="text-xl font-bold">Price: {product.price}$</h3>
      </div>
      <div className="lg:ml-56">
        <Image src={product.thumbnail} alt={product.title} width={500} height={500}/>
      </div>
    </div>
  )
}

export default Detailspage
