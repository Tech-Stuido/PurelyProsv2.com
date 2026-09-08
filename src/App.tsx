import { useState } from 'react';

// ===== NAVBAR =====
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">BotForge<span className="gradient-text">AI</span></span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#demo" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Demo</a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">FAQ</a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">Log in</button>
            <button className="px-5 py-2.5 gradient-bg text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25">
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-gray-700">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <a href="#features" className="block text-sm font-medium text-gray-700 py-2">Features</a>
          <a href="#how-it-works" className="block text-sm font-medium text-gray-700 py-2">How It Works</a>
          <a href="#pricing" className="block text-sm font-medium text-gray-700 py-2">Pricing</a>
          <a href="#demo" className="block text-sm font-medium text-gray-700 py-2">Demo</a>
          <a href="#faq" className="block text-sm font-medium text-gray-700 py-2">FAQ</a>
          <button className="w-full px-5 py-2.5 gradient-bg text-white text-sm font-semibold rounded-full mt-2">
            Start Free Trial
          </button>
        </div>
      )}
    </nav>
  );
}

// ===== HERO =====
function Hero() {
  return (
    <section className="hero-gradient pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm font-medium text-indigo-700">Trusted by 10,000+ companies worldwide</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
          Build <span className="gradient-text">Better Websites</span>
          <br />
          with AI-Powered Chatbots
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Transform your website with intelligent AI chatbots that answer customer questions 24/7,
          generate leads, and provide personalized support — trained specifically on your content.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button className="w-full sm:w-auto px-8 py-4 gradient-bg text-white font-bold rounded-full text-lg hover:opacity-90 transition-opacity shadow-xl shadow-indigo-500/30">
            Start Free Trial →
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-200 text-gray-800 font-bold rounded-full text-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all">
            Book a Demo
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            7-day free trial
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            95+ languages
          </span>
        </div>

        {/* Chat Preview */}
        <div className="mt-16 max-w-sm mx-auto float-animation">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="gradient-bg px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">BotForge Assistant</p>
                <p className="text-xs text-white/70">● Online now</p>
              </div>
            </div>
            <div className="p-4 space-y-3 bg-gray-50">
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%] shadow-sm border border-gray-100">
                <p className="text-sm text-gray-700">👋 Hi! I'm your AI assistant. How can I help you today?</p>
              </div>
              <div className="bg-indigo-600 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%] ml-auto">
                <p className="text-sm text-white">What services do you offer?</p>
              </div>
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%] shadow-sm border border-gray-100">
                <p className="text-sm text-gray-700">We offer AI chatbots, website optimization, and lead generation. Want to learn more?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== TRUSTED BY =====
function TrustedBy() {
  const companies = ['TechCorp', 'InnovateCo', 'DataFlow', 'CloudSync', 'NexGen', 'Quantum'];
  return (
    <section className="py-14 border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">Trusted by leading companies</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {companies.map((company, i) => (
            <div key={i} className="text-xl md:text-2xl font-bold text-gray-300 hover:text-indigo-500 transition-colors cursor-default">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== BEFORE / AFTER =====
function BeforeAfter() {
  return (
    <section className="py-20 lg:py-28 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Imagine an <span className="gradient-text">expert AI chatbot</span> answering 24/7
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">See the difference BotForge makes for your business.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before */}
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Before BotForge</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Generic chatbots that frustrate visitors',
                'Custom-built bots are expensive & hard to maintain',
                'Support staff takes months to train',
                'Drowning in repetitive support tickets',
                'Lost leads from unanswered questions'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="card p-8 border-indigo-200 shadow-lg shadow-indigo-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">After BotForge</h3>
            </div>
            <ul className="space-y-4">
              {[
                '24/7 quality support with instant responses',
                'Automated answers for 80%+ of support tickets',
                'Your team becomes 2x more productive',
                'Free up time for high-value tasks',
                'Capture every lead automatically'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

// ===== HOW IT WORKS =====
function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Connect Your Content',
      desc: 'Enter your website URL for BotForge to scan, upload files, or paste raw text. We support PDFs, docs, and more.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      num: '2',
      title: 'Deploy Your Chatbot',
      desc: 'Embed your AI chatbot on as many pages as you want — your marketing site, help center, or in-app.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      num: '3',
      title: 'Learn & Improve',
      desc: 'Use real conversation data to refine your bot. It gets smarter with every interaction through AI-powered learning.',
      color: 'bg-pink-100 text-pink-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Three steps to your <span className="gradient-text">AI-powered website</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Get your personalized AI chatbot up and running in minutes, not months.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="card p-8 text-center">
              <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center text-2xl font-extrabold mx-auto mb-6`}>
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== FEATURES =====
function Features() {
  const features = [
    {
      title: 'Personalized Chatbot',
      desc: 'Train your chatbot with your content and let it echo your brand\'s voice. Your digital doppelgänger!',
      icon: '🤖',
      color: 'bg-indigo-50 border-indigo-100'
    },
    {
      title: 'Quick Prompts',
      desc: 'Give users a digital icebreaker to kick things off. Include FAQs or questions you wish more users would ask.',
      icon: '💬',
      color: 'bg-purple-50 border-purple-100'
    },
    {
      title: 'Weekly Digest',
      desc: 'Start every week knowing exactly how your chatbot performed. Get topics, stats, and unanswered questions.',
      icon: '📊',
      color: 'bg-pink-50 border-pink-100'
    },
    {
      title: 'Escalate to Human',
      desc: 'Some conversations need a human touch. Users can seamlessly transition to a live agent at the push of a button.',
      icon: '👤',
      color: 'bg-blue-50 border-blue-100'
    },
    {
      title: 'Collect Leads',
      desc: 'Don\'t just answer questions, seize opportunities. Capture interested visitors\' details for follow-up.',
      icon: '🎯',
      color: 'bg-green-50 border-green-100'
    },
    {
      title: 'Analytics & Insights',
      desc: 'See daily trends, engagement funnels, and AI-powered topic grouping. Know what visitors ask before reading transcripts.',
      icon: '📈',
      color: 'bg-orange-50 border-orange-100'
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-28 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Everything you need to <span className="gradient-text">supercharge</span> your website
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Powerful features that turn your website into a 24/7 customer engagement machine.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className={`card p-6 border ${feature.color}`}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== INTEGRATIONS =====
function Integrations() {
  const tools = ['Slack', 'Zendesk', 'Crisp', 'WordPress', 'Shopify', 'Zapier', 'HubSpot', 'Intercom'];
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Direct integrations with your <span className="gradient-text">favorite tools</span>
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">Connect BotForge with the platforms you already use. No complex setup required.</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {tools.map((tool, i) => (
            <div key={i} className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-700 transition-all cursor-default">
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== PRICING =====
function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      desc: 'Perfect for small businesses getting started with AI.',
      features: ['1 chatbot', '1,000 pages training', '1,000 messages/month', 'Email support', 'Basic analytics'],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      desc: 'For growing companies that need more power.',
      features: ['5 chatbots', '10,000 pages training', '10,000 messages/month', 'Priority support', 'Advanced analytics', 'Lead collection', 'Custom branding'],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'For large organizations with custom needs.',
      features: ['Unlimited chatbots', 'Unlimited pages', 'Unlimited messages', 'Dedicated support', 'Custom integrations', 'SLA guarantee', 'SSO & advanced security'],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Start free, scale as you grow. No hidden fees.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`card p-8 relative ${plan.popular ? 'border-indigo-300 shadow-xl shadow-indigo-100 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 gradient-bg text-white text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">{plan.desc}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full font-semibold text-sm transition-all ${
                plan.popular
                  ? 'gradient-bg text-white shadow-lg shadow-indigo-500/25 hover:opacity-90'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== LIVE DEMO =====
function LiveDemo() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: "👋 Hi! I'm the BotForge Assistant. Ask me anything about our AI chatbot platform!" }
  ]);
  const [input, setInput] = useState('');

  const quickQuestions = ['What is BotForge?', 'How much does it cost?', 'How do I get started?'];

  const handleSend = (text?: string) => {
    const msg = text || input;
    if (!msg.trim()) return;

    setMessages(prev => [...prev, { from: 'user', text: msg }]);
    setInput('');

    setTimeout(() => {
      let reply = "That's a great question! BotForge helps companies build better websites with AI chatbots. Want to start a free trial?";
      if (msg.toLowerCase().includes('price') || msg.toLowerCase().includes('cost')) {
        reply = "Our plans start at $29/month for Starter, $99/month for Professional, and custom pricing for Enterprise. All plans include a 7-day free trial!";
      } else if (msg.toLowerCase().includes('what') || msg.toLowerCase().includes('botforge')) {
        reply = "BotForge AI is a platform that lets you create AI-powered chatbots trained on your website content. It answers visitor questions 24/7, captures leads, and integrates with your favorite tools!";
      } else if (msg.toLowerCase().includes('start') || msg.toLowerCase().includes('get started')) {
        reply = "Getting started is easy! Just sign up for a free trial, enter your website URL, and we'll train your chatbot in minutes. No coding required!";
      }
      setMessages(prev => [...prev, { from: 'bot', text: reply }]);
    }, 800);
  };

  return (
    <section id="demo" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            See it in <span className="gradient-text">action</span>
          </h2>
          <p className="text-lg text-gray-500">Try our live demo chatbot right here. Ask it anything!</p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="card overflow-hidden">
            {/* Chat Header */}
            <div className="gradient-bg px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-white">BotForge Demo</p>
                <p className="text-xs text-white/70">● Online</p>
              </div>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                    msg.from === 'user'
                      ? 'bg-indigo-600 text-white rounded-tr-sm'
                      : 'bg-white text-gray-700 rounded-tl-sm shadow-sm border border-gray-100'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Questions */}
            <div className="px-4 py-2 bg-white border-t border-gray-100 flex flex-wrap gap-2">
              {quickQuestions.map((q, i) => (
                <button key={i} onClick={() => handleSend(q)} className="px-3 py-1.5 text-xs font-medium bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors">
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="px-4 py-3 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 bg-gray-100 rounded-full text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <button onClick={() => handleSend()} className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== TESTIMONIALS =====
function Testimonials() {
  const testimonials = [
    {
      quote: "We've got the bot dialed in — we're using GPT-4, have an avenue for escalations to Zendesk, and so far I have no complaints.",
      name: 'Sarah Johnson',
      role: 'VP of Customer Success',
      company: 'TechCorp'
    },
    {
      quote: "BotForge reduced our support tickets by 60% in the first month. The AI actually understands our product better than some of our staff!",
      name: 'Michael Chen',
      role: 'Head of Support',
      company: 'DataFlow'
    },
    {
      quote: "Setting up was incredibly easy. We had our chatbot trained and live on our site within 30 minutes. Game changer for our business.",
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'InnovateCo'
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Don't just take our <span className="gradient-text">word for it</span>
          </h2>
          <p className="text-lg text-gray-500">See what our customers have to say about BotForge.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="card p-6">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role} at {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== SECURITY =====
function Security() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Enterprise-grade <span className="gradient-text">security</span>
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          SOC 2 Type II examined, GDPR certified, and HIPAA assessed. Your data is encrypted, access-controlled, and never used to train AI models.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {['SOC 2 Type II', 'GDPR Compliant', 'HIPAA Compliant', '256-bit Encryption'].map((badge, i) => (
            <div key={i} className="px-5 py-3 bg-green-50 border border-green-200 rounded-full text-sm font-semibold text-green-700">
              ✓ {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== FAQ =====
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: 'What type of content can I use to train the chatbot?', a: 'You can use any type of content — website URLs, PDFs, text files, docs, and more. The more content you provide, the better your chatbot will perform.' },
    { q: 'How long does training take?', a: 'It depends on the amount of content, but usually it\'s done within a few minutes. Your chatbot will be live and ready to answer questions almost immediately.' },
    { q: 'Can I add the chatbot to my website?', a: 'Yes! Each chatbot gets a unique embed code you can add to any website. It works with WordPress, Shopify, custom sites, and more.' },
    { q: 'Do you automatically retrain when my website changes?', a: 'Yes! Depending on your plan, you can set up automatic syncing on a monthly, weekly, or daily basis to keep your chatbot up to date.' },
    { q: 'Is there a free trial?', a: 'Absolutely! All plans come with a 7-day free trial. No credit card required to get started.' },
    { q: 'What languages are supported?', a: 'BotForge supports 95+ languages out of the box. Your chatbot will automatically respond in the same language your visitor uses.' }
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 section-alt">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-gray-900">{faq.q}</span>
                <svg className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== CTA =====
function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="card p-12 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Ready to build a <span className="gradient-text">better website</span>?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Find out if a personalized AI chatbot is right for you in just a few hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 gradient-bg text-white font-bold rounded-full text-lg hover:opacity-90 transition-opacity shadow-xl shadow-indigo-500/30">
              Start Free Trial →
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-200 text-gray-800 font-bold rounded-full text-lg hover:border-indigo-300 transition-all">
              Book a Demo
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-gray-500">
            <span>✓ 7-day free trial</span>
            <span>✓ No credit card</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== FOOTER =====
function Footer() {
  return (
    <footer className="border-t border-gray-200 py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-gray-900">BotForge<span className="gradient-text">AI</span></span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">Build better websites with AI-powered chatbots that engage, support, and convert visitors 24/7.</p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Integrations', 'API', 'Changelog'].map(item => (
                <li key={item}><a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Contact', 'Partners'].map(item => (
                <li key={item}><a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              {['Privacy', 'Terms', 'Security', 'GDPR', 'Cookies'].map(item => (
                <li key={item}><a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© 2026 BotForge AI. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {['Twitter', 'LinkedIn', 'GitHub'].map(social => (
              <a key={social} href="#" className="px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-600 hover:bg-indigo-100 hover:text-indigo-700 transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ===== MAIN APP =====
export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
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
