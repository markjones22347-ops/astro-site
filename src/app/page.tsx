'use client';

export default function Home() {
  const handlePayPal = (plan: string) => {
    // Placeholder - will be configured with actual PayPal links
    alert('PayPal checkout coming soon! Join our Discord for manual purchases.');
  };

  const handleGiftCard = () => {
    // Placeholder - will be configured with actual Discord invite
    alert('Gift card purchases coming soon! Join our Discord for manual purchases.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600" />
            <span className="text-xl font-bold text-white">Astronomy</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
            <a href="#launchers" className="text-gray-300 hover:text-white transition">Launchers</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
          <span className="text-sm text-primary-300">Version 1.21.11 • Fabric</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Elevate Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
            Minecraft Experience
          </span>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          A powerful, clean, and feature-rich Minecraft client designed for players who demand excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg shadow-primary-500/25"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Powerful Features
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '⚡',
              title: 'Lightning Fast',
              description: 'Optimized performance with minimal impact on your FPS',
            },
            {
              icon: '🎯',
              title: 'Precision Combat',
              description: 'Advanced combat modules with customizable settings',
            },
            {
              icon: '🛡️',
              title: 'Undetectable',
              description: 'Built with safety in mind, keeping your account secure',
            },
            {
              icon: '🎨',
              title: 'Clean UI',
              description: 'Beautiful, modern interface that stays out of your way',
            },
            {
              icon: '🔧',
              title: 'Highly Customizable',
              description: 'Tweak every setting to match your playstyle',
            },
            {
              icon: '📊',
              title: 'Advanced HUD',
              description: 'Customizable heads-up display with rich information',
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all group"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Simple Pricing
        </h2>
        <p className="text-gray-400 text-center mb-4">Choose the plan that works for you</p>
        <p className="text-gray-500 text-center mb-16 text-sm">
          Pay with PayPal or Gift Cards (join Discord for gift card purchases)
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: 'Weekly',
              price: '$2',
              period: '/week',
              description: 'Perfect for trying out',
              features: ['Full Access', 'All Features', 'Weekly Updates'],
              plan: 'weekly',
              popular: false,
            },
            {
              name: 'Monthly',
              price: '$5',
              period: '/month',
              description: 'Recurring subscription',
              features: ['Full Access', 'All Features', 'Priority Support', 'Monthly Updates'],
              plan: 'monthly',
              popular: false,
            },
            {
              name: 'Lifetime',
              price: '$10',
              period: '/once',
              description: 'Most popular - best value',
              features: ['Full Access', 'All Features', 'Lifetime Updates', 'Priority Support', 'Exclusive Discord'],
              plan: 'lifetime',
              popular: true,
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-2xl border transition-all ${
                plan.popular
                  ? 'bg-gradient-to-b from-primary-500/20 to-primary-500/5 border-primary-500/50 scale-105'
                  : 'bg-white/5 border-white/10 hover:border-primary-500/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-500 text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-300">
                    <span className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-primary-400" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="space-y-3">
                <button
                  onClick={() => handlePayPal(plan.plan)}
                  className="w-full py-3 rounded-lg font-semibold transition-all bg-[#0070ba] hover:bg-[#005ea6] text-white flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/>
                  </svg>
                  Pay with PayPal
                </button>
                <button
                  onClick={handleGiftCard}
                  className="w-full py-3 rounded-lg font-semibold transition-all bg-white/10 hover:bg-white/20 text-white"
                >
                  Gift Card (Discord)
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Launchers Section */}
      <section id="launchers" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Supported Launchers
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            'Minecraft Launcher',
            'Modrinth App',
            'Feather Client',
            'Prism Launcher',
          ].map((launcher, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all text-center"
            >
              <div className="text-3xl mb-3">🚀</div>
              <div className="text-white font-medium">{launcher}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-primary-400 to-primary-600" />
            <span className="font-semibold text-white">Astronomy Client</span>
          </div>
          <p className="text-sm">
            © 2024 Astronomy Client. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
