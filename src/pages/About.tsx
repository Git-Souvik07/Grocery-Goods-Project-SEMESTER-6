import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function About() {
  const features = [
    'Freshness Guaranteed: We source the freshest produce and high-quality goods daily to ensure you get the best for your family.',
    'Wide Variety of Products: From everyday essentials to exotic ingredients, our shelves are stocked with everything you need.',
    'Affordable Prices: Enjoy competitive pricing with frequent discounts and deals to make shopping cost-effective.',
    'Convenient Shopping: Shop online or in-store with ease, and take advantage of home delivery or curbside pickup services.',
    'Sustainability Focus: We prioritize eco-friendly packaging and support local farmers to promote sustainability.',
    'Exceptional Customer Service: Our friendly team is always ready to assist you, ensuring a seamless shopping experience.',
    'Loyalty Rewards: Earn points with every purchase and redeem them for exciting offers and exclusive benefits.',
  ]

  const products = [
    'Fresh Produce: Handpicked fruits and vegetables to ensure quality and freshness.',
    'Grains and Pulses: A wide variety of rice, wheat, lentils, and beans to stock your pantry.',
    'Cooking Essentials: Oils, spices, and condiments for delicious meals.',
    'Packaged Goods: Snacks, ready-to-eat meals, and canned goods for convenience.',
    'Baking Supplies: Flour, sugar, and other baking essentials for your culinary adventures.',
    'Organic Options: Certified organic grains, spices, and staples for a healthier choice.',
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for fresh groceries and quality products. 
            We deliver freshness right to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Why Choose Us */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="text-center mb-8">
              <img
                src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Why choose us"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-900">Why Choose Us?</h2>
            </div>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-700 mb-4">
                Choose us to simplify your grocery shopping and experience quality like never before!
              </p>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* What We Provide */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="text-center mb-8">
              <img
                src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="What we provide"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-900">What We Provide?</h2>
            </div>
            
            <div className="space-y-4">
              {products.map((product, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm leading-relaxed">{product}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-700 mb-4">
                We aim to provide high-quality grocery goods that meet all your cooking and household needs!
              </p>
              <Link
                to="/shop"
                className="btn-primary inline-flex items-center"
              >
                Our Shop
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-primary-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            To provide fresh, high-quality groceries and exceptional service to our customers, 
            while supporting local farmers and promoting sustainable practices. We believe that 
            everyone deserves access to nutritious, affordable food delivered with care and convenience.
          </p>
        </div>
      </div>
    </div>
  )
}