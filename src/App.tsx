import { useState } from 'react';

// Navigation Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => setScrolled(window.scrollY > 20));
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f1117]/95 backdrop-blur-xl border-b border-white/10' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
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
        <div className="md:hidden bg-[#0f1117]/95 backdrop-blur-xl border-b border-white/10">
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
    <section className="relative min-h-screen flex items-center justify-center hero-bg pt-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-sm text-indigo-200">Trusted by 10,000+ companies worldwide</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
          Build <span className="gradient-text">Better Websites</span>
          <br />
          with AI-Powered Chatbots
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Transform your website with intelligent AI chatbots that answer customer questions 24/7, 
          generate leads, and provide personalized support — trained specifically on your content.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-indigo-500/25 text-lg">
            Start Free Trial →
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-full transition-all duration-200 text-lg">
            Book a Demo
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
          <span className="flex items-center gap-2"><svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>7-day free trial</span>
          <span className="flex items-center gap-2"><svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>No credit card required</span>
          <span className="flex items-center gap-2"><svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>95+ languages</span>
          <span className="flex items-center gap-2"><svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Cancel anytime</span>
        </div>

        {/* Hero Chat Preview */}
        <div className="mt-16 max-w-md mx-auto float-animation">
          <div className="bg-[#1a1d2e] rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-indigo-500/10">
            <div className="bg-gradient-to-r from-indigo-600/30 to-purple-600/30 px-4 py-3 flex items-center gap-3 border-b border-white/10">
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
              <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%]">
                <p className="text-sm text-gray-200">👋 Hi! I'm your AI assistant. How can I help you today?</p>
              </div>
              <div className="bg-indigo-600/30 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%] ml-auto">
                <p className="text-sm text-gray-200">What services do you offer?</p>
              </div>
              <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%]">
                <p className="text-sm text-gray-200">We offer AI-powered chatbots, website optimization, and lead generation tools. Want to learn more?</p>
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
    <section className="py-16 border-y border-white/10 bg-[#12141f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-400 mb-8 uppercase tracking-wider font-medium">Trusted by leading companies</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {companies.map((company, i) => (
            <div key={i} className="text-xl md:text-2xl font-bold text-gray-400 hover:text-white transition-colors cursor-default">
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
    <section className="py-20 lg:py-32 bg-[#0f1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Imagine what you could do with an <span className="gradient-text">expert AI chatbot</span> answering 24/7
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">See the difference BotForge AI makes for your business</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
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
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="card p-8 glow-purple border-indigo-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
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
                <li key={i} className="flex items-start gap-3 text-gray-200">
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
    <section id="how-it-works" className="py-20 lg:py-32 bg-[#12141f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Three steps to your <span className="gradient-text">AI-powered website</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Get your personalized AI chatbot up and running in minutes, not months.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="card p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  {step.icon}
                </div>
                <span className="text-4xl font-bold text-indigo-500/30">{step.num}</span>
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
      title: 'Personalized Chatbot',
      desc: 'Build a custom chatbot trained on your own content. Let it echo your brand\'s voice and answer questions exactly how you would.',
      icon: '🤖'
    },
    {
      title: 'Quick Prompts',
      desc: 'Help users start conversations with suggested questions. Include FAQs or questions you wish more users would ask.',
      icon: '💬'
    },
    {
      title: 'Weekly Digest',
      desc: 'Start every week knowing exactly how your chatbot performed. Get topics, unanswered questions, and engagement metrics.',
      icon: '📊'
    },
    {
      title: 'Escalate to Human',
      desc: 'Seamlessly transition conversations to a live agent when needed. The hybrid approach ensures the best assistance.',
      icon: '👤'
    },
    {
      title: 'Collect Leads',
      desc: 'Don\'t just answer questions — seize opportunities. Capture interested visitors\' details for follow-up.',
      icon: '🎯'
    },
    {
      title: 'Analytics & Insights',
      desc: 'See how your chatbot performs with daily trends, engagement funnels, and AI-powered topic grouping.',
      icon: '📈'
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-[#0f1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Everything you need to <span className="gradient-text">supercharge</span> your website
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Powerful features that transform how you engage with visitors</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="card p-6">
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
  const integrations = ['Slack', 'Zendesk', 'Crisp', 'WordPress', 'Shopify', 'Webflow', 'Intercom', 'HubSpot'];
  
  return (
    <section className="py-20 lg:py-32 bg-[#12141f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Direct integrations with your <span className="gradient-text">favorite tools</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Connect BotForge with the platforms you already use</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {integrations.map((integration, i) => (
            <div key={i} className="card p-6 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-3">
                <span className="text-2xl">{integration[0]}</span>
              </div>
              <span className="text-sm font-medium text-gray-300">{integration}</span>
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
      desc: 'Perfect for small businesses getting started',
      features: ['1 chatbot', '1,000 pages trained', '5,000 messages/month', 'Email support', 'Basic analytics', 'Custom branding'],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      desc: 'For growing businesses that need more power',
      features: ['5 chatbots', '10,000 pages trained', '25,000 messages/month', 'Priority support', 'Advanced analytics', 'Lead collection', 'API access', 'Custom integrations'],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'For large organizations with custom needs',
      features: ['Unlimited chatbots', 'Unlimited pages', 'Unlimited messages', 'Dedicated support', 'Custom AI training', 'SSO & SAML', 'SLA guarantee', 'On-premise option'],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-[#0f1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Simple, <span className="gradient-text">transparent pricing</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Choose the plan that fits your business. Scale as you grow.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`card p-8 relative ${plan.popular ? 'border-indigo-500/50 glow-purple' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-xs font-medium text-white">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-indigo-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full font-medium transition-all ${plan.popular ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/25' : 'bg-white/10 hover:bg-white/15 text-white border border-white/20'}`}>
                {plan.cta}
              </button>
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
    { type: 'bot', text: "👋 Hi! I'm the BotForge demo assistant. Ask me anything about our platform!" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { type: 'user' as const, text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    
    setTimeout(() => {
      const responses: Record<string, string> = {
        'pricing': 'Our plans start at $29/month for Starter, $99/month for Professional, and custom pricing for Enterprise. All plans include a 7-day free trial!',
        'features': 'We offer personalized chatbots, lead collection, analytics, human escalation, quick prompts, weekly digests, and integrations with tools like Slack, Zendesk, and more!',
        'help': 'I can tell you about our pricing, features, integrations, security, or how to get started. What would you like to know?',
        'default': "Great question! BotForge AI makes it easy to create AI chatbots trained on your website content. You can start a free trial to see it in action!"
      };
      
      const lowerInput = input.toLowerCase();
      let response = responses.default;
      if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('plan')) response = responses.pricing;
      else if (lowerInput.includes('feature') || lowerInput.includes('what can')) response = responses.features;
      else if (lowerInput.includes('help') || lowerInput.includes('how')) response = responses.help;
      
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 800);
  };

  return (
    <section className="py-20 lg:py-32 bg-[#12141f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            See it <span className="gradient-text">in action</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Try our demo chatbot right here. Ask about pricing, features, or anything else!</p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="card overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 px-5 py-4 flex items-center gap-3 border-b border-white/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">BotForge Demo</p>
                <p className="text-xs text-green-400">● Online now</p>
              </div>
            </div>
            
            <div className="p-4 h-72 overflow-y-auto space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`rounded-2xl px-4 py-2.5 max-w-[80%] ${msg.type === 'user' ? 'bg-indigo-600/30 rounded-tr-sm' : 'bg-white/10 rounded-tl-sm'}`}>
                    <p className="text-sm text-gray-200">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about pricing, features..."
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
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'VP of Customer Success',
      company: 'TechFlow Inc.',
      text: "BotForge transformed our support. We reduced ticket volume by 60% in the first month. The AI understands our product better than most new hires.",
      avatar: '👩‍💼'
    },
    {
      name: 'Marcus Johnson',
      role: 'CEO',
      company: 'GrowthLab',
      text: "The ROI was immediate. Our chatbot handles 80% of questions automatically, and the lead capture feature has been a game-changer for our sales team.",
      avatar: '👨‍💼'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      company: 'ScaleUp Co.',
      text: "Setup took less than 10 minutes. We connected our website, and the bot was answering questions accurately from day one. Incredible technology.",
      avatar: '👩‍💻'
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-[#0f1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Don't just take our <span className="gradient-text">word for it</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">See what our customers have to say about BotForge AI</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-lg">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role} at {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Security Section
function Security() {
  return (
    <section className="py-20 lg:py-32 bg-[#12141f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Enterprise-grade <span className="gradient-text">security</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Your data is encrypted, access-controlled, and never used to train AI models.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {[
            { label: 'SOC 2 Type II', icon: '🛡️' },
            { label: 'GDPR Compliant', icon: '🇪🇺' },
            { label: 'HIPAA Compliant', icon: '🏥' },
            { label: '256-bit Encryption', icon: '🔒' },
            { label: '99.9% Uptime', icon: '⚡' }
          ].map((badge, i) => (
            <div key={i} className="card px-6 py-4 flex items-center gap-3">
              <span className="text-2xl">{badge.icon}</span>
              <span className="text-sm font-medium text-gray-300">{badge.label}</span>
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
    { q: 'What type of content can I use to train the chatbot?', a: 'You can use website URLs, sitemaps, PDFs, DOCX files, text files, or raw text content. The more content you provide, the better the chatbot performs.' },
    { q: 'How long does training take?', a: 'Training usually completes within a few minutes depending on the amount of content. You can also set up automatic syncing to keep your bot updated.' },
    { q: 'Can I add the chatbot to my existing website?', a: 'Yes! Each chatbot gets a unique embed code. Simply paste it into your website and the chatbot will appear as a widget. Works with WordPress, Shopify, Webflow, and more.' },
    { q: 'Do you support multiple languages?', a: 'Yes, BotForge supports 95+ languages. The chatbot automatically detects and responds in the visitor\'s language.' },
    { q: 'Is there a free trial?', a: 'Yes! All plans come with a 7-day free trial. No credit card required. You can test everything with your own data before committing.' },
    { q: 'Can the chatbot escalate to a human?', a: 'Absolutely. When the chatbot can\'t answer a question or the visitor requests human help, the conversation can be seamlessly transferred to a live agent.' }
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 bg-[#0f1117]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="text-lg text-gray-400">Can't find what you're looking for? <a href="#" className="text-indigo-400 hover:text-indigo-300">Contact our team</a></p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-sm font-medium text-white pr-4">{faq.q}</span>
                <svg className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
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
    <section className="py-20 lg:py-32 bg-[#12141f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="card p-12 glow-purple">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Ready to transform your website?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            Find out if BotForge AI is right for you in just a few hours. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-indigo-500/25 text-lg">
              Start Free Trial →
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-full transition-all duration-200 text-lg">
              Book a Demo
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-400">
            <span>✓ 7-day free trial</span>
            <span>✓ No credit card required</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 bg-[#0a0c14]">
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
              {['Privacy', 'Terms', 'Security', 'GDPR', 'Cookies'].map(item => (
                <li key={item}><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2026 BotForge AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {['Twitter', 'LinkedIn', 'GitHub'].map(social => (
              <a key={social} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-xs text-gray-300 font-medium">
                {social[0]}
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
    <div className="min-h-screen bg-[#0f1117] text-white overflow-x-hidden">
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
