import HelloWorld from '@/components/HelloWorld'

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
            Hello World
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to our modern, stylistic Hello World application built with Next.js, 
            React, and Tailwind CSS
          </p>
        </div>

        {/* Interactive Hello World Component */}
        <div className="pt-8">
          <HelloWorld />
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 pt-12">
          <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Fast Performance</h3>
            <p className="text-gray-600 text-sm">
              Built with Next.js for optimal performance and lightning-fast loading times
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Modern Design</h3>
            <p className="text-gray-600 text-sm">
              Crafted with Tailwind CSS for beautiful, responsive, and modern interfaces
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Responsive</h3>
            <p className="text-gray-600 text-sm">
              Fully responsive design that works perfectly on all devices and screen sizes
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="pt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span>✨</span>
            <span>Welcome to the Future</span>
            <span>✨</span>
          </div>
        </div>
      </div>
    </div>
  )
}