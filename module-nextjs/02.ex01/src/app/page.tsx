import Image from "next/image";

const products = [
  {
    id: 1,
    imagem: {
      src: "https://www.apple.com/br/macbook-air/images/overview/mac-plus-iphone/mac_iphone__n2863l0ne0q6_medium.jpg",
      alt: "Macbook Air",
      width: 354,
      height: 176
    },
    name: "Macbook Air de 13 e 15 polegadas",
    cpu: "Apple M1 e M2",
    description: "O MacBook Air é um laptop ultrafino e leve da Apple, conhecido por seu design elegante e desempenho eficiente.",
    price: "A partir de R$ 7.999,00",
  },
  {
    id: 2,
    imagem: {
      src: "https://www.apple.com/v/macbook-air/w/images/overview/display/display_hero__fiig28r0yq2q_medium.jpg",
      alt: "Macbook Pro",
      width: 354,
      height: 176
    },
    name: "Macbook Pro de 13, 14 e 16 polegadas",
    cpu: "Apple M1 Pro e M1 Max",
    description: "O MacBook Pro é um laptop de alto desempenho da Apple, projetado para profissionais criativos e usuários avançados.",
    price: "A partir de R$ 12.999,00",
  }
];

export default function Home() {
  return (
    <main className="main">
      <h1 className="title">Conheça a família MacBook</h1>
      <p className="subtitle">Agora com novos modelos M3</p>

      <div className="products">
        {products.map((product) => (
        <article key={product.id}>
          <Image
            src={product.imagem.src}
            alt={product.imagem.alt}
            width={product.imagem.width}
            height={product.imagem.height}
          />

          <h2 className="product-name">{product.name}</h2>
          <p className="product-cpu">{product.cpu}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-price">{product.price}</p>

          <div className="btn-group">
            <a href="#" className="btn primary">Saiba mais</a>
            <a href="#" className="btn outline">Comprar</a>
          </div>
        </article>
        ))}
      </div>
    </main>
  );
}