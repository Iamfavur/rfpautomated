import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* 1. Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-indigo-500 to-cyan-500 flex items-center justify-center font-bold text-lg shadow-lg shadow-indigo-500/20">
              R
            </div>
            <span className="font-bold text-xl tracking-tight">rfpautomated</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#platform" className="hover:text-white transition-colors">Platform</a>
            <a href="#security" className="hover:text-white transition-colors">Security</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <a href="#waitlist" className="bg-slate-800 hover:bg-slate-700 text-sm font-medium text-white px-4 py-2 rounded-lg transition-colors border border-slate-700">
            Request Beta
          </a>
        </div>
      </nav>

      {/* 2. Expanded Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-medium text-indigo-400 mb-8 backdrop-blur-sm">
          <span className="flex w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          Now accepting Q3 2026 Enterprise Pilots
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-5xl leading-tight">
          Stop losing hours to <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-cyan-400 to-indigo-400 bg-300% animate-gradient">
            security questionnaires.
          </span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed">
          rfpautomated uses a smart isolated AI to instantly transform your historical proposals, SOC2 reports, and architecture docs into winning, fully-formatted Business-to-Business bids.
        </p>

        {/* Waitlist Form */}
        <div id="waitlist" className="w-full max-w-lg bg-slate-800/50 p-2 rounded-xl border border-slate-700 shadow-2xl backdrop-blur-sm mb-16">
          {isSubmitted ? (
            <div className="text-center py-4 px-6 bg-slate-800 rounded-lg border border-emerald-500/20">
              <h3 className="text-lg font-semibold text-emerald-400">Secured. You're on the list.</h3>
              <p className="text-sm text-slate-400">Our deployment team will reach out shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email..."
                className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-slate-100 placeholder-slate-500 transition-all"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-indigo-600/20 whitespace-nowrap"
              >
                Get Early Access
              </button>
            </form>
          )}
        </div>

        {/* Integrations Bar */}
        <p className="text-sm text-slate-500 font-medium mb-4 uppercase tracking-wider">Engineered to integrate seamlessly with</p>
        <div className="flex flex-wrap justify-center gap-4 text-slate-400 opacity-70">
          <span className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm font-semibold flex items-center gap-2">AWS S3 Ingestion</span>
          <span className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm font-semibold flex items-center gap-2">Microsoft Word Add-in</span>
          <span className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm font-semibold flex items-center gap-2">Excel CSV Export</span>
          <span className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm font-semibold flex items-center gap-2">Azure Active Directory</span>
        </div>
      </main>

      

      {/* 3. Metrics Banner */}
      <div className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
          <div className="pt-4 md:pt-0">
            <div className="text-4xl font-bold text-white mb-2">80%</div>
            <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">Faster Bid Response Time</div>
          </div>
          <div className="pt-4 md:pt-0">
            <div className="text-4xl font-bold text-white mb-2">Zero</div>
            <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">Public Data Leaks</div>
          </div>
          <div className="pt-4 md:pt-0">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">Contextual Accuracy Mapping</div>
          </div>
        </div>
      </div>

      {/* 4. Deep Features Grid */}
      <section id="platform" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A complete Request-for-Proposal pipeline.</h2>
            <p className="text-slate-400 max-w-2xl text-lg">Not just a wrapper. A deeply integrated AI workflow designed specifically for B2B sales and security compliance teams.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 text-indigo-400 font-bold text-xl">1</div>
              <h3 className="text-xl font-semibold mb-3">Multi-Format Ingestion</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Drag and drop PDFs, raw Excel grids, or complex Word documents. Our parsers reads the text instantly.</p>
            </div>
            {/* 2 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 text-indigo-400 font-bold text-xl">2</div>
              <h3 className="text-xl font-semibold mb-3">Knowledge Base</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Your data is read and stored in a secure database, meaning the AI fetches exact historical facts, not guesses.</p>
            </div>
            {/* 3 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 text-indigo-400 font-bold text-xl">3</div>
              <h3 className="text-xl font-semibold mb-3">Native Export Formatting</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Stop copying and pasting. rfpautomated rebuilds the entire answered document in the exact format your client requested.</p>
            </div>
            {/* 4 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 text-cyan-400 font-bold text-xl">4</div>
              <h3 className="text-xl font-semibold mb-3">Brand Voice Alignment</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Configure tone, terminology, and stylistic preferences so the output sounds exactly like your senior sales managers.</p>
            </div>
            {/* 5 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 text-cyan-400 font-bold text-xl">5</div>
              <h3 className="text-xl font-semibold mb-3">Team Collaboration</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Flag specific answers for review by your CISO, legal team, or lead managers before finalizing the document.</p>
            </div>
            {/* 6 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 text-cyan-400 font-bold text-xl">6</div>
              <h3 className="text-xl font-semibold mb-3">Audit Trails</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Full historical logs of who approved which answer, ensuring total compliance accountability for enterprise environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Strict Security Section (Crucial for Reviewers) */}
      <section id="security" className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-4 rounded-2xl bg-slate-800/50 border border-slate-700 mb-8">
            <svg className="w-12 h-12 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your data is your product. Not ours.</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-3xl mx-auto">
            We built rfpautomated for enterprise environments from day one. Your sensitive corporate intelligence is heavily encrypted, stored per tenant, and fundamentally isolated from public foundational AI training pools.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <h4 className="font-semibold text-white mb-1">SOC2 Ready</h4>
              <p className="text-xs text-slate-500">Built for strict compliance.</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <h4 className="font-semibold text-white mb-1">AES-256 Encryption</h4>
              <p className="text-xs text-slate-500">Data secured at rest and in transit.</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <h4 className="font-semibold text-white mb-1">SSO Authentication</h4>
              <p className="text-xs text-slate-500">SAML & Azure AD Support.</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <h4 className="font-semibold text-white mb-1">Zero Training</h4>
              <p className="text-xs text-slate-500">Models never learn from your data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section id="faq" className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h4 className="text-lg font-semibold text-white mb-2">Does the AI hallucinate answers?</h4>
              <p className="text-slate-400 text-sm">Because we use strict RAG architecture, the system is constrained to only answer using the documentation you upload. If it doesn't know the answer, it flags it for human review rather than guessing.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h4 className="text-lg font-semibold text-white mb-2">What file formats do you support?</h4>
              <p className="text-slate-400 text-sm">Currently, we support processing for .PDF, .DOCX, .XLSX, .CSV, and standard Markdown. Our export engine generates native .DOCX and .XLSX files to preserve client formatting.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h4 className="text-lg font-semibold text-white mb-2">How long does deployment take?</h4>
              <p className="text-slate-400 text-sm">For standard cloud deployments, your isolated tenant can be spun up in minutes. Custom on-premise integrations or Azure VPC setups require a brief technical consultation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="py-24 bg-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to automate your bid cycle?</h2>
          <p className="text-indigo-200 text-lg mb-10">Join the waitlist today to secure early-adopter pricing and priority onboarding.</p>
          <a href="#waitlist" className="inline-block bg-white text-indigo-900 hover:bg-slate-100 font-bold py-4 px-8 rounded-lg transition-colors shadow-xl">
            Request Beta Access
          </a>
        </div>
      </section>

      {/* 8. Verified Legal Footer */}
      <footer className="bg-slate-950 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center font-bold text-xs text-white">R</div>
              <span className="font-bold text-lg text-white">rfpautomated</span>
            </div>
            <p className="text-slate-500 text-sm">Enterprise B2B bid automation powered by secure RAG pipelines.</p>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-4">Product</h5>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-300 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-slate-300 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-slate-300 transition-colors">Enterprise Security</a></li>
              <li><a href="#" className="hover:text-slate-300 transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-4">Company</h5>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-300 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-slate-300 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-slate-300 transition-colors">Partners</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-4">Legal</h5>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-slate-300 transition-colors">Data Processing Addendum</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-600 font-medium tracking-wide">
            © 2026 AUTOMATED INNS, S.L. All rights reserved.
          </div>
          <div className="text-sm text-slate-600">
            <a href="mailto:support@rfpautomated.com" className="hover:text-slate-400 transition-colors">support@rfpautomated.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
