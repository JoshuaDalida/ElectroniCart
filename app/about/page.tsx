import React from 'react'

const about = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-semibold text-gray-800">About ElectroniCart</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At ElectroniCart, our mission is to provide our customers with a seamless and enjoyable shopping experience for all their electronic needs. We strive to offer a wide selection of high-quality products, competitive prices, and exceptional customer service. Our goal is to become the go-to destination for electronics enthusiasts, whether they're looking for the latest gadgets or everyday essentials.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2">Customer Satisfaction: We prioritize the needs and satisfaction of our customers above all else.</li>
            <li className="mb-2">Quality Products: We carefully curate our product selection to ensure they meet high standards of quality and reliability.</li>
            <li className="mb-2">Transparency: We believe in transparent pricing, policies, and communication with our customers.</li>
            <li className="mb-2">Innovation: We constantly seek out new technologies and trends to offer innovative solutions to our customers.</li>
            <li className="mb-2">Community: We value building a strong community of electronics enthusiasts and providing them with resources and support.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            Have a question or need assistance? Feel free to reach out to us at <a href="mailto:info@electronicart.com" className="text-blue-500">info@electronicart.com</a> or give us a call at <span className="font-semibold">1-800-123-4567</span>.
          </p>
        </section>
      </main>
    </div>
  )
}

export default about