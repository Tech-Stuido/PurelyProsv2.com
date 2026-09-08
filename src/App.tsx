import { useState, useRef, useEffect } from 'react';

/* ───────────────────── NAVBAR ───────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0F1A]/95 backdrop-blur-xl border-b border-white/10' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <span className="text-xl font-extrabold text-white">BotForge<span className="gradient-text">AI</span></span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'How It Works', 'Pricing', 'Demo', 'FAQ'].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`} className="text-[15px] font-medium text-gray-300 hover:text-white transition-colors">{l}</a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-[15px] font-medium text-gray-300 hover:text-white transition-colors">Log in</button>
            <button className="px-6 py-2.5 gradient-bg text-white text-[15px] font-semibold rounded-full hover:opacity-90 transition shadow-lg shadow-indigo-500/25">Start Free Trial</button>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0B0F1A] border-t border-white/10 px-4 py-6 space-y-4">
          {['Features', 'How It Works', 'Pricing', 'Demo', 'FAQ'].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`} onClick={() => setOpen(false)} className="block text-base font-medium text-gray-300 hover:text-white py-2">{l}</a>
          ))}
          <button className="w-full mt-4 px-6 py-3 gradient-bg text-white font-semibold rounded-full">Start Free Trial</button>
        </div>
      )}
    </nav>
  );
}

/* ───────────────────── HERO ───────────────────── */
function Hero() {
  return (
    <section className="relative hero-gradient pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-sm font-medium text-gray-300">Trusted by 10,000+ companies worldwide</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
          Build <span className="gradient-text">Better Websites</span><br />
          with AI-Powered Chatbots
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Transform your website with intelligent AI chatbots that answer customer questions 24/7,
          generate leads, and provide personalized support — trained specifically on your content.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="w-full sm:w-auto px-8 py-4 gradient-bg text-white font-bold rounded-full text-lg hover:opacity-90 transition shadow-xl shadow-indigo-500/30">
            Start Free Trial →
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold rounded-full text-lg transition">
            ▶ Watch Demo
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
          {['✓ 7-day free trial', '✓ No credit card required', '✓ 95+ languages', '✓ Cancel anytime'].map(t => (
            <span key={t} className="flex items-center gap-1">{t}</span>
          ))}
        </div>

        {/* Chat Preview */}
        <div className="mt-16 max-w-sm mx-auto float-animation">
          <div className="card p-0 overflow-hidden shadow-2xl shadow-indigo-500/10">
            <div className="bg-gradient-to-r from-indigo-600/30 to-purple-600/30 px-4 py-3 flex items-center gap-3 border-b border-white/10">
              <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-white">BotForge Assistant</p>
                <p className="text-xs text-green-400">● Online now</p>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%]">
                <p className="text-sm text-white">👋 Hi! I'm your AI assistant. How can I help you today?</p>
              </div>
              <div className="bg-indigo-600/30 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] ml-auto">
                <p className="text-sm text-white">What services do you offer?</p>
              </div>
              <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%]">
                <p className="text-sm text-white">We offer AI chatbots, website optimization & lead generation. Want to learn more?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── TRUSTED BY ───────────────────── */
function TrustedBy() {
  const companies = ['TechCorp', 'InnovateCo', 'DataFlow', 'CloudSync', 'NexGen', 'Quantum'];
  return (
    <section className="py-14 border-y border-white/10 bg-[#0D1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Trusted by leading companies</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {companies.map((c, i) => (
            <div key={i} className="text-xl md:text-2xl font-bold text-gray-500 hover:text-gray-300 transition-colors cursor-default select-none">{c}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── BEFORE / AFTER ───────────────────── */
function BeforeAfter() {
  return (
    <section className="py-20 lg:py-28 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Imagine what you could do with an <span className="gradient-text">expert AI chatbot</span> answering 24/7
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">See the difference BotForge makes for your business.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before */}
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white">Before BotForge</h3>
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
                  <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" /></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="card p-8 border-indigo-500/30 shadow-xl shadow-indigo-500/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white">After BotForge</h3>
            </div>
            <ul className="space-y-4">
              {[
                '24/7 quality support with instant responses',
                'Automated answers for 80%+ of tickets',
                'Your team becomes 2x more productive',
                'Free up time for high-value tasks',
                'Capture every lead automatically'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-200">
                  <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── HOW IT WORKS ───────────────────── */
function HowItWorks() {
  const steps = [
    { num: '01', title: 'Connect Your Content', desc: 'Enter your website URL, upload files, or paste text. We support PDFs, docs, sitemaps, and more.', icon: '📄' },
    { num: '02', title: 'Deploy Your Chatbot', desc: 'Embed your AI chatbot on as many pages as you want — marketing site, help center, or in-app.', icon: '🚀' },
    { num: '03', title: 'Learn & Improve', desc: 'Use real conversation data to refine your bot. It gets smarter with every interaction.', icon: '📊' },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Three steps to your <span className="gradient-text">AI-powered website</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Get your personalized AI chatbot up and running in minutes, not months.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="card p-8 text-center">
              <div className="text-5xl mb-4">{s.icon}</div>
              <div className="text-sm font-bold text-indigo-400 mb-2">STEP {s.num}</div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── FEATURES ───────────────────── */
function Features() {
  const features = [
    { icon: '🤖', title: 'Personalized Chatbot', desc: 'Train your chatbot with your content and let it echo your brand\'s voice perfectly.' },
    { icon: '💬', title: 'Quick Prompts', desc: 'Help users start conversations with pre-built prompts and frequently asked questions.' },
    { icon: '📧', title: 'Weekly Digest', desc: 'Start every week knowing exactly how your chatbot performed with detailed analytics.' },
    { icon: '👤', title: 'Escalate to Human', desc: 'Seamlessly transition conversations to a live agent when AI can\'t handle it.' },
    { icon: '🎯', title: 'Collect Leads', desc: 'Capture interested visitors\' details automatically and build your lead pipeline.' },
    { icon: '📈', title: 'Analytics & Insights', desc: 'See daily trends, engagement funnels, and AI-powered topic grouping.' },
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Everything you need to <span className="gradient-text">supercharge</span> your website
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Powerful features that make your AI chatbot the best customer support agent you've ever had.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="card p-7">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed text-[15px]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── INTEGRATIONS ───────────────────── */
function Integrations() {
  const tools = ['Slack', 'Zendesk', 'Crisp', 'Intercom', 'HubSpot', 'Salesforce', 'WordPress', 'Shopify'];
  return (
    <section className="py-20 lg:py-28 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Direct integrations with <span className="gradient-text">your favorite tools</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">Connect BotForge with the platforms you already use. No extra setup needed.</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {tools.map((t, i) => (
            <div key={i} className="card px-6 py-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">{t[0]}</div>
              <span className="text-white font-medium">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── PRICING ───────────────────── */
function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      desc: 'Perfect for small businesses getting started with AI.',
      features: ['1 chatbot', '1,000 pages training', '500 messages/month', 'Email support', 'Basic analytics', 'Custom branding'],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      desc: 'For growing companies that need more power and flexibility.',
      features: ['5 chatbots', '10,000 pages training', '5,000 messages/month', 'Priority support', 'Advanced analytics', 'Lead collection', 'API access', 'Custom integrations'],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'For large organizations with custom needs and dedicated support.',
      features: ['Unlimited chatbots', 'Unlimited pages', 'Unlimited messages', 'Dedicated account manager', 'Custom AI training', 'SLA guarantee', 'SSO & SAML', 'On-premise option'],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Start free, scale as you grow. No hidden fees, cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <div key={i} className={`card p-8 relative ${p.popular ? 'border-indigo-500/50 shadow-xl shadow-indigo-500/10 scale-105' : ''}`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 gradient-bg rounded-full text-xs font-bold text-white">Most Popular</div>
              )}
              <h3 className="text-xl font-bold text-white mb-1">{p.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{p.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">{p.price}</span>
                <span className="text-gray-500">{p.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-indigo-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full font-semibold text-[15px] transition ${p.popular ? 'gradient-bg text-white hover:opacity-90 shadow-lg shadow-indigo-500/25' : 'bg-white/10 text-white hover:bg-white/15 border border-white/10'}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── LIVE DEMO ───────────────────── */
function LiveDemo() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: "👋 Hi! I'm the BotForge AI Assistant. Ask me anything about our services!" }
  ]);
  const [input, setInput] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);

  const quickQuestions = ['What is BotForge?', 'How much does it cost?', 'How do I get started?'];

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text }]);
    setInput('');

    setTimeout(() => {
      let reply = '';
      const lower = text.toLowerCase();
      if (lower.includes('what') || lower.includes('botforge')) {
        reply = "BotForge AI is a platform that lets you build AI-powered chatbots trained on your website content. It's like having ChatGPT specifically for your product — instantly answering visitor questions 24/7!";
      } else if (lower.includes('cost') || lower.includes('price') || lower.includes('plan')) {
        reply = "We have 3 plans: Starter at $29/mo, Professional at $99/mo (most popular!), and Enterprise with custom pricing. All plans include a 7-day free trial!";
      } else if (lower.includes('start') || lower.includes('begin') || lower.includes('how')) {
        reply = "Getting started is easy! 1) Enter your website URL 2) We train your chatbot on your content 3) Embed it on your site with one line of code. The whole process takes about 5 minutes!";
      } else if (lower.includes('language') || lower.includes('support')) {
        reply = "We support 95+ languages automatically! Your chatbot will respond in whatever language your visitor uses. Pretty cool, right?";
      } else {
        reply = "Great question! BotForge can help you with customer support automation, lead generation, and website optimization. Would you like to start a free trial to see it in action?";
      }
      setMessages(prev => [...prev, { role: 'bot', text: reply }]);
    }, 800);
  };

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  return (
    <section id="demo" className="py-20 lg:py-28 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            See it <span className="gradient-text">in action</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Try our live demo chatbot. Ask it anything about BotForge!</p>
        </div>

        <div className="max-w-lg mx-auto card overflow-hidden shadow-2xl shadow-indigo-500/10">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600/30 to-purple-600/30 px-5 py-4 flex items-center gap-3 border-b border-white/10">
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            </div>
            <div>
              <p className="font-bold text-white">BotForge Assistant</p>
              <p className="text-xs text-green-400">● Online</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={chatRef} className="p-5 space-y-3 h-72 overflow-y-auto">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${m.role === 'user' ? 'bg-indigo-600/40 text-white rounded-tr-sm' : 'bg-white/10 text-gray-200 rounded-tl-sm'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick prompts */}
          <div className="px-5 pb-3 flex flex-wrap gap-2">
            {quickQuestions.map((q, i) => (
              <button key={i} onClick={() => sendMessage(q)} className="px-3 py-1.5 text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-gray-300 transition">{q}</button>
            ))}
          </div>

          {/* Input */}
          <div className="px-5 pb-5">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
                placeholder="Type your message..."
                className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 outline-none"
              />
              <button onClick={() => sendMessage(input)} className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center hover:opacity-90 transition flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── TESTIMONIALS ───────────────────── */
function Testimonials() {
  const reviews = [
    { name: 'Sarah Chen', role: 'CEO, TechStart Inc.', text: '"BotForge transformed our customer support. We went from 500+ daily tickets to under 50. The AI handles everything perfectly."', avatar: '👩‍💼' },
    { name: 'Marcus Johnson', role: 'VP Sales, GrowthCo', text: '"The lead generation alone paid for itself in the first week. Our chatbot captures leads 24/7 and books demos automatically."', avatar: '👨‍💻' },
    { name: 'Emily Rodriguez', role: 'Head of Support, DataFlow', text: '"Setup took 10 minutes. The bot was trained on our entire knowledge base and started answering questions accurately from day one."', avatar: '👩‍🔬' },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Don't just take our <span className="gradient-text">word for it</span>
          </h2>
          <p className="text-lg text-gray-400">See what our customers have to say about BotForge AI.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="card p-7">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-[15px]">{r.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-xl">{r.avatar}</div>
                <div>
                  <p className="font-semibold text-white text-sm">{r.name}</p>
                  <p className="text-xs text-gray-500">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── SECURITY ───────────────────── */
function Security() {
  return (
    <section className="py-20 lg:py-28 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Enterprise-grade <span className="gradient-text">security</span></h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">SOC 2 Type II examined, GDPR certified, and HIPAA assessed. Your data is encrypted, access-controlled, and never used to train AI models.</p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {['SOC 2 Type II', 'GDPR Compliant', 'HIPAA Compliant', '256-bit Encryption'].map((badge, i) => (
            <div key={i} className="card px-6 py-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span className="text-white font-medium text-sm">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── FAQ ───────────────────── */
function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const faqs = [
    { q: 'What type of content can I use to train the chatbot?', a: 'You can use website URLs, sitemaps, PDFs, DOCX files, CSVs, or raw text. The more content you provide, the better your chatbot will perform.' },
    { q: 'How long does training take?', a: 'Usually just a few minutes! It depends on the amount of content, but most websites are fully trained in under 5 minutes.' },
    { q: 'Can I add the chatbot to my existing website?', a: 'Absolutely! Each chatbot gets a unique embed code. Just paste one line of JavaScript into your site and you\'re live. Works with WordPress, Shopify, and any platform.' },
    { q: 'Does it support multiple languages?', a: 'Yes! BotForge supports 95+ languages automatically. Your chatbot detects and responds in whatever language your visitor uses.' },
    { q: 'What happens if the bot can\'t answer a question?', a: 'The bot can seamlessly escalate to a human agent. You can also set up email notifications for unanswered questions so your team can follow up.' },
    { q: 'Is there a free trial?', a: 'Yes! All plans come with a 7-day free trial. No credit card required. You can test everything with your own data before committing.' },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#0B0F1A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="text-lg text-gray-400">Can't find what you're looking for? <a href="#" className="text-indigo-400 hover:text-indigo-300 underline">Contact our team</a>.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="card overflow-hidden">
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left">
                <span className="font-semibold text-white pr-4">{faq.q}</span>
                <svg className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openIdx === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {openIdx === i && (
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

/* ───────────────────── CTA ───────────────────── */
function CTA() {
  return (
    <section className="py-20 lg:py-28 section-alt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="card p-10 md:p-16 border-indigo-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10"></div>
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready to transform your website?</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">Join 10,000+ companies using BotForge AI to deliver exceptional customer experiences 24/7.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 gradient-bg text-white font-bold rounded-full text-lg hover:opacity-90 transition shadow-xl shadow-indigo-500/30">Start Free Trial →</button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold rounded-full text-lg transition">Book a Demo</button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-sm text-gray-400">
              {['✓ 7-day free trial', '✓ No credit card', '✓ Cancel anytime'].map(t => <span key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── FOOTER ───────────────────── */
function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <span className="text-xl font-extrabold text-white">BotForge<span className="gradient-text">AI</span></span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">Build better websites with AI-powered chatbots that engage, support, and convert visitors 24/7.</p>
          </div>
          {[
            { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'API', 'Changelog'] },
            { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact', 'Partners'] },
            { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'GDPR', 'Cookies'] },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="text-sm font-bold text-white mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map(l => <li key={l}><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© 2026 BotForge AI. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {['X', 'In', 'GH'].map((s, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white transition">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────── APP ───────────────────── */
export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0B0F1A' }}>
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
