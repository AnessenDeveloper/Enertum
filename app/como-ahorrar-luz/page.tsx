'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const articles = [
  {
    id: 1,
    title: '3 errores que te hacen pagar de más en la factura',
    excerpt: 'Descubre los errores más comunes que cometen los consumidores y que les hacen pagar más de lo necesario en su factura de la luz.',
    content: [
      'Muchos consumidores no revisan su potencia contratada y tienen más de la que realmente necesitan, pagando un coste fijo mensual innecesario.',
      'No comparar ofertas entre comercializadoras puede hacerte perder cientos de euros al año. Las diferencias de precio pueden ser significativas.',
      'No entender tu factura y no saber qué tarifa te conviene según tu consumo puede llevarte a pagar más de lo necesario.'
    ]
  },
  {
    id: 2,
    title: 'Qué es la potencia contratada y por qué seguramente la tienes mal',
    excerpt: 'La potencia contratada es uno de los conceptos más importantes de tu factura y la mayoría de personas la tienen mal configurada.',
    content: [
      'La potencia contratada es la cantidad máxima de energía que puedes consumir simultáneamente en tu hogar o negocio. Se mide en kilovatios (kW).',
      'Si tienes más potencia de la necesaria, estás pagando un coste fijo mensual innecesario que puede suponer decenas de euros al año.',
      'Si tienes menos potencia de la necesaria, saltarán los plomos cuando uses varios electrodomésticos a la vez, lo cual es muy molesto.',
      'La mayoría de hogares tienen entre 3.45 kW y 5.5 kW de potencia, pero muchos tienen contratada más de la que realmente necesitan.'
    ]
  },
  {
    id: 3,
    title: 'Tarifa fija vs. variable: cuál te conviene',
    excerpt: 'Entender la diferencia entre tarifa fija y variable es clave para elegir la opción que mejor se adapte a tu consumo y ahorrar dinero.',
    content: [
      'La tarifa fija mantiene el mismo precio del kWh durante todo el día, independientemente de la hora. Es predecible y fácil de entender.',
      'La tarifa variable (discriminación horaria) tiene diferentes precios según la hora del día: más barata en valle (horas de menor consumo) y más cara en punta.',
      'Si puedes concentrar tu consumo en las horas valle (generalmente de noche y fines de semana), la tarifa variable puede ser más económica.',
      'Si tu consumo es constante durante todo el día o no puedes cambiar tus hábitos, la tarifa fija puede ser más adecuada para ti.',
      'Lo mejor es analizar tu consumo real para determinar qué tipo de tarifa te conviene más.'
    ]
  },
  {
    id: 4,
    title: 'Cómo leer tu factura de la luz correctamente',
    excerpt: 'Aprende a entender todos los conceptos de tu factura para identificar posibles errores y oportunidades de ahorro.',
    content: [
      'La factura de la luz tiene varios conceptos: término fijo (potencia), término variable (consumo), impuestos e IVA.',
      'El término fijo se paga siempre, aunque no consumas nada. Depende de la potencia contratada.',
      'El término variable depende de cuánta energía consumas (kWh) y del precio del kWh según tu tarifa.',
      'Revisa siempre que la potencia contratada coincida con la que realmente necesitas.',
      'Compara el precio del kWh con otras comercializadoras para asegurarte de que tienes una buena oferta.'
    ]
  },
  {
    id: 5,
    title: 'Consejos para reducir tu consumo energético',
    excerpt: 'Pequeños cambios en tus hábitos pueden suponer un ahorro significativo en tu factura mensual.',
    content: [
      'Usa electrodomésticos de clase energética A+++ que consumen hasta un 60% menos que los antiguos.',
      'Aprovecha las horas valle (si tienes tarifa variable) para usar lavadora, lavavajillas y otros electrodomésticos.',
      'Reemplaza las bombillas tradicionales por LED, que consumen hasta un 80% menos y duran mucho más.',
      'Ajusta la temperatura del termostato: cada grado de diferencia puede suponer un 7% más de consumo.',
      'Desconecta los aparatos en standby, que pueden suponer hasta un 10% de tu consumo total.'
    ]
  }
]

export default function ComoAhorrarLuz() {
  return (
    <>
      <Header />
      <main>
        <section className="section hero-section">
          <div className="container">
            <h1 className="page-title">Cómo ahorrar luz</h1>
            <p className="page-subtitle">
              Consejos y guías prácticas para reducir tu factura de la luz y entender mejor tu consumo energético.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="articles-grid">
              {articles.map((article) => (
                <article key={article.id} className="article-card">
                  <h2 className="article-title">{article.title}</h2>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-content">
                    <ul>
                      {article.content.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-light cta-section">
          <div className="container">
            <h2 className="section-title">¿Quieres que analicemos tu factura?</h2>
            <p className="section-subtitle">
              Sube tu factura gratis y te diremos exactamente cuánto puedes ahorrar.
            </p>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/sube-tu-factura" className="btn btn-primary btn-large">
                Sube tu factura ahora
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: var(--white);
          text-align: center;
        }
        .hero-section .page-title,
        .hero-section .page-subtitle {
          color: var(--white);
        }
        .page-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .page-subtitle {
          font-size: 1.2rem;
          opacity: 0.95;
          max-width: 700px;
          margin: 0 auto;
        }
        .articles-grid {
          display: grid;
          gap: 2rem;
          margin-top: 2rem;
        }
        .article-card {
          background: var(--white);
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-left: 4px solid var(--primary-color);
        }
        .article-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }
        .article-excerpt {
          font-size: 1.1rem;
          color: var(--text-light);
          margin-bottom: 1.5rem;
          font-style: italic;
        }
        .article-content ul {
          list-style: none;
          padding: 0;
        }
        .article-content li {
          padding: 0.75rem 0;
          padding-left: 1.5rem;
          position: relative;
          color: var(--text-dark);
          line-height: 1.8;
        }
        .article-content li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--primary-color);
          font-weight: 700;
        }
        .bg-light {
          background-color: var(--bg-light);
        }
        .cta-section {
          text-align: center;
        }
        @media (max-width: 768px) {
          .page-title {
            font-size: 2rem;
          }
          .article-card {
            padding: 1.5rem;
          }
          .article-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}

