export async function GET(request: Request) {
  const response = await fetch("https://api.vercel.app/products")
  const products = await response.json()
  return Response.json(products)
}

export async function GETYUGIOH(request:Request) {
  const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');
  const cards = await response.json();
  return Response.json(cards);
}