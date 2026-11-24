"use client"

import { useEffect, useState } from "react"

interface Product {
  id: string
  name: string
  price: number
  description: string
}

interface YugiOh {
  id: number
  name: string
  card_images: {
    image_url: string
  }[]
  type: string
  desc: string
}


export default function YugioPage() {
  const [cards, setCards] = useState<YugiOh[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Fetch products from your API route
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
      .then((res) => res.json())
      .then((data) => {
        setCards(data.data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="p-8">Loading Cards...</div>
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">Cards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div key={card.id} className="border rounded-lg p-4">
            <img src={card.card_images[0].image_url} alt="imagem da carta"/>
            <h2 className="font-semibold text-lg">{card.name}</h2>
            <p className="text-sm text-gray-600 my-2">{card.type}</p>
            <p className="text-sm mt-2">{card.desc}</p>
          </div>
        )).splice(0,50)}
      </div>
    </main>
  )
}



/*export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Fetch products from your API route
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="p-8">Loading products...</div>
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-sm text-gray-600 my-2">{product.description}</p>
            <p className="font-bold text-lg">${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
*/
