import React from 'react';
import './PricingChart.css';

const PricingChart = () => {
  return (
    <div className="pricing-chart-container">
      {/* Tab Navigation */}
      <div className="pricing-tabs">
        <div className="tab-button active">Web Plans</div>
        <div className="tab-button">E-Commerce</div>
        <div className="tab-button">Maintenance</div>
      </div>

      {/* Main Pricing Chart */}
      <div className="pricing-chart-main">
        {/* Left Sidebar with Features */}
        <div className="features-sidebar">
          <div className="features-header">
            <h2 className="chart-title">Web Plans</h2>
            <p className="chart-description">
              Web plans are for informational sites and can include calls to action (CTAs), forms, and contact information
            </p>
          </div>

          <div className="features-list">
            <div className="feature-row">
              <span className="feature-label">Pages</span>
            </div>
            <div className="feature-row zebra">
              <span className="feature-label">Web Design</span>
            </div>
            <div className="feature-row">
              <span className="feature-label">Responsive Design</span>
            </div>
            <div className="feature-row zebra">
              <span className="feature-label">Form Submissions</span>
            </div>
            <div className="feature-row">
              <span className="feature-label">CMS Integration</span>
            </div>
            <div className="feature-row zebra">
              <span className="feature-label">Social Media Integration</span>
            </div>
            <div className="feature-row">
              <span className="feature-label">SEO Analytics</span>
            </div>
            <div className="feature-row zebra">
              <span className="feature-label">Third Party Interactions</span>
            </div>
            <div className="feature-row">
              <span className="feature-label">Monthly Maintenance</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-cards-container">
          {/* Launch Card */}
          <div className="pricing-card launch-card">
            <div className="card-header">
              <div className="plan-banner">
                <div className="banner-bg"></div>
                <div className="banner-arrow"></div>
                <span className="plan-name">Launch</span>
              </div>
              <div className="plan-icon-container">
                <svg className="plan-icon" viewBox="0 0 32 32">
                  <path d="M0 0H32V32H0V0Z" fill="#E5E5E5"/>
                  <path d="M31.8359 31.9316H0.164062L16 16.0957L31.8359 31.9316ZM15.9043 16L0.0683594 31.8359V0.164062L15.9043 16ZM31.9316 31.8359L16.0957 16L31.9316 0.164062V31.8359ZM31.8359 0.0683594L16 15.9043L0.164062 0.0683594H31.8359Z" stroke="black" strokeOpacity="0.3" strokeWidth="0.13625"/>
                </svg>
              </div>
              <div className="price-circle-container">
                <div className="price-circle">
                  <span className="price-text">$750</span>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="feature-value pages">3</div>
              <div className="feature-value design">
                <span>Minimal</span>
                <div className="help-icon">?</div>
              </div>
              <div className="feature-value responsive">Mobile First</div>
              <div className="feature-value forms">2</div>
              <div className="feature-value cms">
                <div className="unavailable">×</div>
              </div>
              <div className="feature-value social">
                <div className="unavailable">×</div>
              </div>
              <div className="feature-value seo">
                <div className="unavailable">×</div>
              </div>
              <div className="feature-value interactions"></div>
              <div className="feature-value maintenance">1 month</div>
            </div>
          </div>

          {/* Liftoff Card */}
          <div className="pricing-card liftoff-card">
            <div className="card-header">
              <div className="plan-banner">
                <div className="banner-bg"></div>
                <div className="banner-arrow"></div>
                <span className="plan-name">Liftoff</span>
              </div>
              <div className="plan-icon-container">
                <svg className="plan-icon" viewBox="0 0 32 32">
                  <path d="M0 0H32V32H0V0Z" fill="#E5E5E5"/>
                  <path d="M31.8359 31.9316H0.164062L16 16.0957L31.8359 31.9316ZM15.9043 16L0.0683594 31.8359V0.164062L15.9043 16ZM31.9316 31.8359L16.0957 16L31.9316 0.164062V31.8359ZM31.8359 0.0683594L16 15.9043L0.164062 0.0683594H31.8359Z" stroke="black" strokeOpacity="0.3" strokeWidth="0.13625"/>
                </svg>
              </div>
              <div className="price-circle-container">
                <div className="price-circle">
                  <span className="price-text">$1250</span>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="feature-value pages">5</div>
              <div className="feature-value design">
                <span>Basic</span>
                <div className="help-icon">?</div>
              </div>
              <div className="feature-value responsive">Fluid</div>
              <div className="feature-value forms">4</div>
              <div className="feature-value cms">Standard</div>
              <div className="feature-value social">
                <div className="unavailable">×</div>
              </div>
              <div className="feature-value seo">
                <div className="unavailable">×</div>
              </div>
              <div className="feature-value interactions"></div>
              <div className="feature-value maintenance">3 months</div>
            </div>
          </div>

          {/* Orbit Card */}
          <div className="pricing-card orbit-card">
            <div className="card-header">
              <div className="plan-banner">
                <div className="banner-bg"></div>
                <div className="banner-arrow"></div>
                <span className="plan-name">Orbit</span>
              </div>
              <div className="plan-icon-container">
                <svg className="plan-icon" viewBox="0 0 32 32">
                  <path d="M0 0H32V32H0V0Z" fill="#E5E5E5"/>
                  <path d="M31.8359 31.9316H0.164062L16 16.0957L31.8359 31.9316ZM15.9043 16L0.0683594 31.8359V0.164062L15.9043 16ZM31.9316 31.8359L16.0957 16L31.9316 0.164062V31.8359ZM31.8359 0.0683594L16 15.9043L0.164062 0.0683594H31.8359Z" stroke="black" strokeOpacity="0.3" strokeWidth="0.13625"/>
                </svg>
              </div>
              <div className="price-circle-container">
                <div className="price-circle">
                  <span className="price-text">$2499</span>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="feature-value pages">8</div>
              <div className="feature-value design">
                <span>Custom</span>
                <div className="help-icon">?</div>
              </div>
              <div className="feature-value responsive">Adaptive</div>
              <div className="feature-value forms">6</div>
              <div className="feature-value cms">Custom</div>
              <div className="feature-value social"></div>
              <div className="feature-value seo">
                <div className="unavailable">×</div>
              </div>
              <div className="feature-value interactions">2</div>
              <div className="feature-value maintenance">3 months</div>
            </div>
          </div>

          {/* Planetary Card */}
          <div className="pricing-card planetary-card">
            <div className="card-header">
              <div className="plan-banner">
                <div className="banner-bg"></div>
                <div className="banner-arrow"></div>
                <span className="plan-name">Planetary</span>
              </div>
              <div className="plan-icon-container">
                <svg className="plan-icon" viewBox="0 0 34 34">
                  <path d="M0.901855 0.403778H33.5308V33.0327H0.901855V0.403778Z" fill="#E5E5E5"/>
                  <path d="M33.3667 32.9643H1.06592L17.2163 16.8139L33.3667 32.9643ZM17.1206 16.7182L0.970215 32.8686V0.567841L17.1206 16.7182ZM33.4624 32.8686L17.312 16.7182L33.4624 0.567841V32.8686ZM33.3667 0.472137L17.2163 16.6225L1.06592 0.472137H33.3667Z" stroke="black" strokeOpacity="0.3" strokeWidth="0.13625"/>
                </svg>
              </div>
              <div className="price-circle-container">
                <div className="price-circle">
                  <span className="price-text">$3900</span>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="feature-value pages">15</div>
              <div className="feature-value design">
                <span>Bespoke</span>
                <div className="help-icon">?</div>
              </div>
              <div className="feature-value responsive">Full Responsive</div>
              <div className="feature-value forms">10</div>
              <div className="feature-value cms">Advanced</div>
              <div className="feature-value social"></div>
              <div className="feature-value seo"></div>
              <div className="feature-value interactions">4</div>
              <div className="feature-value maintenance">6 months</div>
            </div>
          </div>
        </div>

        {/* Comparison Arrow */}
        <div className="comparison-arrow">
          <div className="arrow-background"></div>
          <svg className="arrow-icon" viewBox="0 0 15 16">
            <path d="M14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289L8.34315 0.928932C7.95262 0.538408 7.31946 0.538408 6.92893 0.928932C6.53841 1.31946 6.53841 1.95262 6.92893 2.34315L12.5858 8L6.92893 13.6569C6.53841 14.0474 6.53841 14.6805 6.92893 15.0711C7.31946 15.4616 7.95262 15.4616 8.34315 15.0711L14.7071 8.70711ZM0 8V9H14V8V7H0V8Z" fill="black" fillOpacity="0.4"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PricingChart;
