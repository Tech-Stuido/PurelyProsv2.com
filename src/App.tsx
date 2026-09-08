import { useState, useEffect } from 'react';

// Navigation Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">BotForge<span className="gradient-text">AI</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="text-sm text-gray-300 hover:text-white transition-colors">Testimonials</a>
            <a href="#faq" className="text-sm text-gray-300 hover:text-white transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-gray-300 hover:text-white transition-colors">Log in</button>
            <button className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-lg shadow-indigo-500/25">
              Start Free Trial
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5">
          <div className="px-4 py-4 space-y-3">
            <a href="#features" className="block text-sm text-gray-300 hover:text-white py-2">Features</a>
            <a href="#how-it-works" className="block text-sm text-gray-300 hover:text-white py-2">How It Works</a>
            <a href="#pricing" className="block text-sm text-gray-300 hover:text-white py-2">Pricing</a>
            <a href="#testimonials" className="block text-sm text-gray-300 hover:text-white py-2">Testimonials</a>
            <a href="#faq" className="block text-sm text-gray-300 hover:text-white py-2">FAQ</a>
            <button className="w-full px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-full mt-4">
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-sm text-gray-300">Trusted by 10,000+ companies worldwide</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Build <span className="gradient-text">Better Websites</span>
          <br />
          with AI-Powered Chatbots
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Transform your website with intelligent AI chatbots that answer customer questions 24/7, 
          generate leads, and provide personalized support — trained specifically on your content.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-indigo-500/25 text-lg">
            Start Free Trial →
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-full transition-all duration-200 text-lg">
            Book a Demo
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          <span className="flex items-center gap-2"><svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>7-day free trial</span>
          <span className="flex items-center gap-2"><svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>No credit card required</span>
          <span className="flex items-center gap-2"><svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>95+ languages</span>
          <span className="flex items-center gap-2"><svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Cancel anytime</span>
        </div>

        {/* Hero Chat Preview */}
        <div className="mt-16 max-w-md mx-auto float-animation">
          <div className="gradient-border p-1">
            <div className="bg-[#13131a] rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 px-4 py-3 flex items-center gap-3 border-b border-white/5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">BotForge Assistant</p>
                  <p className="text-xs text-green-400">● Online</p>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div className="chat-bubble bg-white/5 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%]">
                  <p className="text-sm text-gray-200">👋 Hi! I'm your AI assistant. How can I help you today?</p>
                </div>
                <div className="chat-bubble bg-indigo-600/20 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%] ml-auto">
                  <p className="text-sm text-gray-200">What services do you offer?</p>
                </div>
                <div className="chat-bubble bg-white/5 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%]">
                  <p className="text-sm text-gray-200">We offer AI-powered chatbots, website optimization, and lead generation tools. Want to learn more?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Trusted By Section
function TrustedBy() {
  const companies = ['TechCorp', 'InnovateCo', 'DataFlow', 'CloudSync', 'NexGen', 'Quantum'];
  return (
    <section className="py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wider">Trusted by leading companies</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {companies.map((company, i) => (
            <div key={i} className="text-xl md:text-2xl font-bold text-gray-600 hover:text-gray-400 transition-colors cursor-default">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Before/After Section
function BeforeAfter() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Imagine what you could do with an <span className="gradient-text">expert AI chatbot</span> answering 24/7
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="gradient-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Before BotForge</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Generic chatbots that frustrate visitors',
                'Custom-built bots are expensive & hard to maintain',
                'Support staff takes months to train',
                'Drowning in repetitive support tickets',
                'Lost leads from unanswered questions'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="gradient-border p-8 glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">After BotForge</h3>
            </div>
            <ul className="space-y-4">
              {[
                '24/7 quality support with instant responses',
                'Automated answers for 80%+ of support tickets',
                'Your team becomes 2x more productive',
                'Free up time for high-value tasks',
                'Capture every lead automatically'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// How It Works
function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Connect Your Content',
      desc: 'Enter your website URL for BotForge to scan, upload files, or paste raw text. We support PDFs, docs, and more.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      )
    },
    {
      num: '2',
      title: 'Deploy Your Chatbot',
      desc: 'Embed your AI chatbot on as many pages as you want — your marketing site, help center, or in-app.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      num: '3',
      title: 'Learn & Improve',
      desc: 'Use real conversation data to refine your bot. It gets smarter with every interaction through AI-powered learning.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Three steps to your <span className="gradient-text">AI-powered website</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Get your personalized AI chatbot up and running in minutes, not months.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative gradient-border p-8 card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-400">
                  {step.icon}
                </div>
                <span className="text-4xl font-bold text-white/10">{step.num}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Section
function Features() {
  const features = [
    {
      title: 'Custom AI Training',
      desc: 'Train your chatbot on your own content. It learns your brand voice, products, and FAQs to provide accurate, personalized answers.',
      icon: '🧠'
    },
    {
      title: 'Smart Quick Prompts',
      desc: 'Help users start conversations with suggested questions. Guide them to the answers they need instantly.',
      icon: '💬'
    },
    {
      title: 'Lead Generation',
      desc: 'Capture visitor details automatically. Turn conversations into qualified leads for your sales team.',
      icon: '🎯'
    },
    {
      title: 'Human Escalation',
      desc: 'Seamlessly hand off complex conversations to your team when the AI needs a human touch.',
      icon: '🤝'
    },
    {
      title: 'Weekly Analytics',
      desc: 'Get detailed insights on chatbot performance, popular topics, and questions it couldn\'t answer.',
      icon: '📊'
    },
    {
      title: 'Multi-Language Support',
      desc: 'Serve customers in 95+ languages automatically. No translation setup needed.',
      icon: '🌍'
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything you need to <span className="gradient-text">supercharge</span> your website
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Powerful features that transform how you engage with visitors and customers.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="gradient-border p-6 card-hover">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Integrations Section
function Integrations() {
  const tools = ['Slack', 'Zendesk', 'WordPress', 'Shopify', 'Crisp', 'Intercom', 'HubSpot', 'Zapier'];
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Integrates with your <span className="gradient-text">favorite tools</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Connect BotForge with the platforms you already use. No complex setup required.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {tools.map((tool, i) => (
            <div key={i} className="gradient-border p-6 text-center card-hover">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">{['💬', '🎫', '📝', '🛒', '💭', '📨', '🔗', '⚡'][i]}</span>
              </div>
              <p className="text-sm text-gray-300 font-medium">{tool}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      desc: 'Perfect for small businesses getting started with AI.',
      features: ['1 AI Chatbot', '500 pages trained', '1,000 messages/month', 'Basic analytics', 'Email support', '1 integration'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      desc: 'For growing companies that need more power.',
      features: ['5 AI Chatbots', '5,000 pages trained', '10,000 messages/month', 'Advanced analytics', 'Priority support', 'All integrations', 'Lead capture', 'Custom branding'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'For large organizations with advanced needs.',
      features: ['Unlimited chatbots', 'Unlimited pages', 'Unlimited messages', 'Custom analytics', 'Dedicated support', 'Custom integrations', 'SLA guarantee', 'SOC 2 compliance', 'API access'],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Start free, scale as you grow. No hidden fees.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`relative gradient-border p-8 card-hover ${plan.popular ? 'glow scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              <button className={`w-full py-3 rounded-full font-semibold text-sm transition-all duration-200 mb-6 ${plan.popular ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/25' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
              </button>
              <ul className="space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials
function Testimonials() {
  const testimonials = [
    {
      quote: "BotForge transformed our customer support. We reduced response time by 90% and our CSAT scores went through the roof.",
      name: "Sarah Chen",
      role: "VP of Customer Success",
      company: "TechFlow Inc."
    },
    {
      quote: "We deployed our AI chatbot in under an hour. It now handles 70% of our support queries automatically. Incredible ROI.",
      name: "Marcus Johnson",
      role: "Head of Operations",
      company: "ScaleUp Labs"
    },
    {
      quote: "The lead generation feature alone pays for itself. We're capturing 3x more qualified leads since implementing BotForge.",
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthMetrics"
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Don't just take our <span className="gradient-text">word for it</span>
          </h2>
          <p className="text-lg text-gray-400">See what our customers have to say.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="gradient-border p-8 card-hover">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Live Demo Section
function LiveDemo() {
  const [messages, setMessages] = useState([
    { type: 'bot', text: "👋 Hi! I'm the BotForge AI Assistant. Ask me anything about our platform!" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { type: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: "Great question! BotForge lets you create AI chatbots trained on your website content in minutes. Would you like to start a free trial?" }]);
    }, 1000);
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            See it <span className="gradient-text">in action</span>
          </h2>
          <p className="text-lg text-gray-400">Try our AI chatbot right here. Ask it anything!</p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="gradient-border glow">
            <div className="bg-[#13131a] rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 px-5 py-4 flex items-center gap-3 border-b border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">BotForge Assistant</p>
                  <p className="text-xs text-green-400">● Online now</p>
                </div>
              </div>

              <div className="h-80 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, i) => (
                  <div key={i} className={`chat-bubble flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`rounded-2xl px-4 py-2.5 max-w-[80%] ${msg.type === 'user' ? 'bg-indigo-600/30 rounded-tr-sm' : 'bg-white/5 rounded-tl-sm'}`}>
                      <p className="text-sm text-gray-200">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-white/5">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type a message..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50"
                  />
                  <button onClick={handleSend} className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center hover:from-indigo-500 hover:to-purple-500 transition-all">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Security Section
function Security() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Enterprise-grade <span className="gradient-text">security</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">Your data is encrypted, access-controlled, and never used to train AI models. We meet the highest compliance standards.</p>
        
        <div className="flex flex-wrap items-center justify-center gap-8">
          {['SOC 2 Type II', 'GDPR Compliant', 'HIPAA Assessed', 'End-to-End Encrypted'].map((badge, i) => (
            <div key={i} className="gradient-border px-6 py-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-medium text-gray-300">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    { q: 'How long does it take to set up?', a: 'You can have your AI chatbot up and running in under 5 minutes. Just enter your website URL, and our AI will scan and learn your content automatically.' },
    { q: 'What content can I use to train the chatbot?', a: 'You can use website URLs, PDFs, Word documents, text files, CSVs, and more. The more content you provide, the better your chatbot will perform.' },
    { q: 'Can I customize the chatbot appearance?', a: 'Yes! You can fully customize colors, branding, position, greetings, and suggested prompts to match your website perfectly.' },
    { q: 'Does it work with my existing website platform?', a: 'BotForge works with any website. We provide a simple embed code that works with WordPress, Shopify, Wix, Squarespace, and custom sites.' },
    { q: 'What happens if the chatbot can\'t answer a question?', a: 'The chatbot can be configured to collect the visitor\'s email and escalate the question to your team. You\'ll also see unanswered questions in your analytics dashboard.' },
    { q: 'Is there a free trial?', a: 'Yes! We offer a 7-day free trial with full access to all features. No credit card required to get started.' }
  ];

  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="gradient-border overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                <svg className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gradient-border glow p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10"></div>
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to transform your <span className="gradient-text">website</span>?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
              Join 10,000+ companies using BotForge to provide better customer experiences with AI-powered chatbots.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-indigo-500/25 text-lg">
                Start Your Free Trial →
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-full transition-all duration-200 text-lg">
                Schedule a Demo
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-400">
              <span className="flex items-center gap-2"><svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>7-day free trial</span>
              <span className="flex items-center gap-2"><svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>No credit card required</span>
              <span className="flex items-center gap-2"><svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">BotForge<span className="gradient-text">AI</span></span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">Build better websites with AI-powered chatbots that engage, support, and convert visitors 24/7.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Integrations', 'API', 'Changelog'].map(item => (
                <li key={item}><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Contact', 'Partners'].map(item => (
                <li key={item}><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {['Privacy', 'Terms', 'Security', 'GDPR', 'Cookie Policy'].map(item => (
                <li key={item}><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2026 BotForge AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {['twitter', 'linkedin', 'github'].map(social => (
              <a key={social} href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="text-xs text-gray-400 capitalize">{social[0].toUpperCase()}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App
export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <BeforeAfter />
      <HowItWorks />
      <Features />
      <Integrations />
      <Pricing />
      <LiveDemo />
      <Testimonials />
      <Security />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
