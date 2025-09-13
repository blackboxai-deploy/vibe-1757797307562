'use client'

import { useState } from 'react'

export default function HelloWorld() {
  const [isHovered, setIsHovered] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  const handleClick = () => {
    setClickCount(prev => prev + 1)
  }

  const greetings = [
    "Hello World! 👋",
    "Hola Mundo! 🌍",
    "Bonjour le Monde! 🇫🇷",
    "Hallo Welt! 🇩🇪",
    "Ciao Mondo! 🇮🇹",
    "こんにちは世界! 🇯🇵",
    "안녕하세요 세계! 🇰🇷",
    "Привет мир! 🇷🇺"
  ]

  const currentGreeting = greetings[clickCount % greetings.length]

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Interactive Hello World Card */}
      <div 
        className={`relative p-8 rounded-3xl bg-white/70 backdrop-blur-md border-2 border-gray-200 shadow-2xl cursor-pointer transition-all duration-500 ${
          isHovered ? 'scale-105 shadow-3xl border-blue-300' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Animated Background */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-indigo-400/20 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        
        {/* Content */}
        <div className="relative z-10 text-center space-y-4">
          <div className={`text-4xl md:text-5xl font-bold transition-all duration-500 ${
            isHovered ? 'text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text' : 'text-gray-800'
          }`}>
            {currentGreeting}
          </div>
          
          <div className="text-sm text-gray-500 space-y-1">
            <p>Click me to explore different languages!</p>
            <p className="text-xs">Clicks: {clickCount}</p>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className={`absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full transition-all duration-700 ${
          isHovered ? 'animate-bounce' : ''
        }`}>
          <span className="text-xs flex items-center justify-center h-full">✨</span>
        </div>
        
        <div className={`absolute -bottom-2 -left-2 w-6 h-6 bg-pink-400 rounded-full transition-all duration-700 ${
          isHovered ? 'animate-bounce' : ''
        }`} style={{ animationDelay: '0.2s' }}>
          <span className="text-xs flex items-center justify-center h-full">💫</span>
        </div>
      </div>

      {/* Interactive Elements */}
      <div className="flex flex-wrap justify-center gap-4">
        <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-default">
          React
        </div>
        <div className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors cursor-default">
          Next.js
        </div>
        <div className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors cursor-default">
          Tailwind CSS
        </div>
        <div className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium hover:bg-green-200 transition-colors cursor-default">
          TypeScript
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="w-full max-w-md">
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span>Language Progress</span>
          <span>{((clickCount % greetings.length) + 1)}/{greetings.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((clickCount % greetings.length) + 1) * (100 / greetings.length)}%` }}
          />
        </div>
      </div>
    </div>
  )
}