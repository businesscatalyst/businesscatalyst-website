import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  if (page === "pay") {
    return <PaymentPage onBack={() => setPage("home")} />;
  }

  return (
    <div>
      {/* Header */}
      <div className="header">
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src="/logo.png" alt="Business Catalyst" style={{ height: 40 }} />
            <div>
              <div style={{ fontSize: 20, fontWeight: 700 }}>Saurav Raj</div>
              <div style={{ fontSize: 14, color: "#64748b" }}>
                Founder, <span style={{ color: "#16a34a", fontWeight: 600 }}>Business Catalyst</span>
              </div>
            </div>
          </div>
          <button className="button-primary" onClick={() => setPage("pay")}>
            Book Diagnostic
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="container">
        <div className="hero">
          <div>
            <h1 style={{ fontSize: 44, lineHeight: 1.2 }}>
              Fix Growth Bottlenecks in Your Amazon & Marketplace Business
            </h1>
            <p style={{ marginTop: 20, fontSize: 18, color: "#334155" }}>
              I’m Saurav Raj, ex-Amazon consultant with 9+ years in eCommerce. I help
              sellers identify what’s broken, what’s working, and what to do next —
              with a clear, practical growth roadmap.
            </p>

            <button
              className="button-primary"
              style={{ marginTop: 24, padding: "14px 24px", fontSize: 16 }}
              onClick={() => setPage("pay")}
            >
              Book Amazon & Marketplace Growth Diagnostic – ₹4,999
            </button>

            <div style={{ marginTop: 12, fontSize: 14, color: "#64748b" }}>
              Trusted by sellers • Practical advice • No fluff
            </div>

            <div style={{ marginTop: 10, fontSize: 14 }}>
              <a
                href="https://calendly.com/connect-businesscatalyst/60min"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#1d4ed8", fontWeight: 600, textDecoration: "none" }}
              >
                Prefer to talk first? Book a free intro call →
              </a>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: 12 }}>What you get in this session</h3>
            <ul style={{ lineHeight: 1.8, paddingLeft: 16 }}>
              <li>✅ Clear business diagnosis</li>
              <li>✅ 90-day action plan</li>
              <li>✅ Ads & listing direction</li>
              <li>✅ Profit-focused growth strategy</li>
            </ul>

            <div
              style={{
                marginTop: 20,
                padding: 16,
                background: "#ecfdf5",
                border: "1px solid #bbf7d0",
                borderRadius: 8,
                color: "#065f46",
                fontSize: 14,
              }}
            >
              <strong>Business Catalyst Promise:</strong> Clarity, honesty, and a
              practical plan you can actually execute.
            </div>
          </div>
        </div>
      </div>

      {/* Why Me Section */}
      <div className="section" style={{ background: "white" }}>
        <div className="container">
          <div className="section-title">Why Work With Me?</div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            <div className="card">
              <h3>Ex-Amazonian</h3>
              <p>
                I’ve worked from inside the ecosystem and understand how Amazon and
                marketplaces actually think, operate, and reward sellers.
              </p>
            </div>

            <div className="card">
              <h3>9+ Years in eCommerce</h3>
              <p>
                From operations to growth to ads and scaling — I’ve seen what works,
                what breaks, and what silently kills profitability.
              </p>
            </div>

            <div className="card">
              <h3>Strategy, Not Execution Selling</h3>
              <p>
                I don’t sell you services. I give you clarity, priorities, and a
                roadmap so you can make the right decisions.
              </p>
            </div>

            <div className="card">
              <h3>Profit-Focused Thinking</h3>
              <p>
                I don’t chase GMV screenshots. Every recommendation is filtered
                through one lens: sustainable profit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="section-title">Frequently Asked Questions</div>

          <div style={{ display: "grid", gap: 16 }}>
            <div className="card">
              <h3>Is this for new sellers or established brands?</h3>
              <p>
                Both. This works best if you already have some sales and want clarity
                on what’s holding growth back. Even if you’re early, this will save
                you months of wrong decisions.
              </p>
            </div>

            <div className="card">
              <h3>Will you execute things for me?</h3>
              <p>
                No. This is a strategy and diagnosis session. I’ll give you a clear
                action plan and priorities. You can execute yourself or with your
                team/agency.
              </p>
            </div>

            <div className="card">
              <h3>What exactly happens in the session?</h3>
              <p>
                We go through your business, identify bottlenecks, and build a
                practical 90-day action plan. You’ll leave with clarity, not generic
                advice.
              </p>
            </div>

            <div className="card">
              <h3>Is this refundable?</h3>
              <p>
                If you feel the session didn’t give you clarity or value, just tell
                me after the call. I’m not here to make money from unhappy clients.
              </p>
            </div>

            <div className="card">
              <h3>What should I prepare before the call?</h3>
              <p>
                Nothing fancy. Just have access to your seller account data and be
                clear about what you want to improve.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="section">
        <div className="container">
          <div className="section-title">How It Works</div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            <div className="card">
              <h3>1. Pay Securely</h3>
              <p>Complete payment via Razorpay.</p>
            </div>
            <div className="card">
              <h3>2. Book Your Slot</h3>
              <p>Choose your time on Calendly.</p>
            </div>
            <div className="card">
              <h3>3. Get Your Roadmap</h3>
              <p>We meet and build your plan.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        © {new Date().getFullYear()} Saurav Raj • Business Catalyst Consultants • Trust Leads Growth
      </div>
    </div>
  );
}

function PaymentPage({ onBack }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8fafc" }}>
      <div className="card" style={{ width: 420 }}>
        <h2>Amazon & Marketplace Growth Diagnostic</h2>
        <p style={{ color: "#64748b" }}>60-minute 1:1 session</p>

        <div style={{ marginTop: 20, padding: 16, border: "1px solid #e5e7eb", borderRadius: 8, display: "flex", justifyContent: "space-between" }}>
          <span>Price</span>
          <strong>₹4,999</strong>
        </div>

        <button className="button-primary" style={{ width: "100%", marginTop: 20 }}>
          Pay with Razorpay (will connect soon)
        </button>

        <button
          onClick={onBack}
          style={{
            width: "100%",
            marginTop: 12,
            padding: "12px",
            borderRadius: 8,
            border: "1px solid #cbd5f5",
            background: "white",
            cursor: "pointer",
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}