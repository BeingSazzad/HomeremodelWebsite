import React, { useState, useEffect } from 'react';
import { ProjectProvider } from './context/ProjectContext';

// Public Components
import { Hero } from './components/landing/Hero';
import { TrustSection } from './components/landing/TrustSection';
import { HowItWorks } from './components/landing/HowItWorks';
import { Categories } from './components/landing/Categories';
import { FeaturedProjects } from './components/landing/FeaturedProjects';
import { Features } from './components/landing/Features';
import { Pricing } from './components/landing/Pricing';
import { FAQ } from './components/landing/FAQ';
import { AppPromo } from './components/landing/AppPromo';
import { Footer } from './components/landing/Footer';
import { Navbar } from './components/landing/Navbar';
import { MarketplaceGallery } from './components/landing/MarketplaceGallery';
import { FindProjects } from './components/pages/FindProjects';
import { FindProfessionals } from './components/pages/FindProfessionals';
import { Messages } from './components/pages/Messages';
import { Settings } from './components/pages/Settings';
import { AboutUs } from './components/pages/AboutUs';
import { Contact } from './components/pages/Contact';
import { TermsOfService } from './components/pages/TermsOfService';
import { PrivacyPolicy } from './components/pages/PrivacyPolicy';
import { RefundPolicy } from './components/pages/RefundPolicy';
import { HelpCenter } from './components/pages/HelpCenter';

// Auth Components
import { Login } from './components/auth/Login';
import { Signup } from './components/auth/Signup';
import { SignupForm } from './components/auth/SignupForm';

// Homeowner Components
import { HomeownerNavbar } from './components/homeowner/HomeownerNavbar';
import { HomeownerLayout } from './components/homeowner/HomeownerLayout';
import { HomeownerDashboardHome } from './components/homeowner/HomeownerDashboardHome';
import { HomeownerProjectsEnhanced } from './components/homeowner/HomeownerProjectsEnhanced'; // Enhanced with auto-close
import { HomeownerReceivedBids } from './components/homeowner/HomeownerReceivedBids';
import { HomeownerPayments } from './components/homeowner/HomeownerPayments';
import { HomeownerActiveWork } from './components/homeowner/HomeownerActiveWork';
import { ProjectDetailsView } from './components/dashboard/homeowner/ProjectDetailsView';
import { ContractorProfileView } from './components/homeowner/ContractorProfileView'; // View contractor profiles
import { EnhancedPostProject } from './components/homeowner/EnhancedPostProject'; // Enhanced project posting

// Contractor Components
import { ContractorLayout } from './components/contractor/ContractorLayout';
import { ContractorDashboardHome } from './components/contractor/ContractorDashboardHome';
import { ContractorBidsEnhanced } from './components/contractor/ContractorBidsEnhanced'; // Enhanced with proper status flow
import { ContractorMyProjects } from './components/contractor/ContractorMyProjects';
import { ContractorProjectDetails } from './components/contractor/ContractorProjectDetails';
import { ContractorSettings } from './components/contractor/ContractorSettings';
import { ContractorReviews } from './components/contractor/ContractorReviews';
import { DocumentUpload } from './components/contractor/DocumentUpload';
import { SubscriptionPlans } from './components/contractor/SubscriptionPlans';
import { TradeAndPricing } from './components/contractor/TradeAndPricing';
import { ContractorBilling } from './components/contractor/ContractorBilling';
import { ProjectDetails } from './components/contractor/ProjectDetails';
import { HomeownerProfileView } from './components/contractor/HomeownerProfileView'; // View homeowner profiles
import { JobRoutingSystem } from './components/routing/JobRoutingSystem'; // Job routing component
import { EnhancedQuoteForm } from './components/contractor/EnhancedQuoteForm'; // Enhanced quote form
import { PhoneVerification } from './components/auth/PhoneVerification'; // Phone verification
import { ContractorNavbar } from './components/contractor/ContractorNavbar'; // Contractor public navbar
import { ContractorBidDetails } from './components/contractor/ContractorBidDetails'; // Bid details view
import { ContractorEarnings } from './components/contractor/ContractorEarnings'; // Earnings page
import { ContractorProfile } from './components/contractor/ContractorProfile'; // Profile management

export default function App() {
  const [auth, setAuth] = useState<{
    isAuthenticated: boolean;
    role: 'homeowner' | 'contractor' | 'admin' | null;
  }>({ isAuthenticated: false, role: null });

  const [currentPage, setCurrentPage] = useState('home'); // Show home page by default
  const [isSigningUp, setIsSigningUp] = useState<string | null>(null);
  const [redirectAfterLogin, setRedirectAfterLogin] = useState<string | null>(null); // Track redirect destination

  // Quick demo: Auto-login as homeowner and show project details
  // useEffect(() => {
  //   // Uncomment the following lines to demo the homeowner project details view
  //   setAuth({ isAuthenticated: true, role: 'homeowner' });
  //   setCurrentPage('project-details-view');
  // }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, auth.isAuthenticated]);

  // Login Handler with redirect support
  const handleLogin = (role: string) => {
    setAuth({ isAuthenticated: true, role: role as any });
    
    // If there's a redirect destination, go there instead of dashboard
    if (redirectAfterLogin) {
      setCurrentPage(redirectAfterLogin);
      setRedirectAfterLogin(null); // Clear redirect
    } else {
      setCurrentPage('dashboard');
    }
  };

  const handleLogout = () => {
    setAuth({ isAuthenticated: false, role: null });
    setCurrentPage('home');
    setRedirectAfterLogin(null); // Clear any pending redirects
  };

  // Handler for when login is required
  const handleLoginRequired = (intendedDestination?: string) => {
    if (intendedDestination) {
      setRedirectAfterLogin(intendedDestination);
    }
    setCurrentPage('login');
  };

  // ----------------------------------------------------------------
  // AUTHENTICATED VIEW
  // ----------------------------------------------------------------
  if (auth.isAuthenticated && auth.role) {
    
    // HOMEOWNER FLOW - New Dashboard Layout
    if (auth.role === 'homeowner') {
        // Public pages for homeowners (without sidebar)
        const publicPages = ['home', 'projects', 'project-details', 'about', 'contact'];
        
        if (publicPages.includes(currentPage)) {
          const renderPublicContent = () => {
            switch (currentPage) {
              case 'projects':
                return <FindProjects onNavigate={setCurrentPage} userRole="homeowner" />;
              case 'project-details':
                return <ProjectDetails 
                  onBack={() => setCurrentPage('projects')} 
                  onSubmitQuote={() => setCurrentPage('my-projects')}
                  onMessageUser={() => setCurrentPage('messages')}
                />;
              case 'about':
                return <AboutUs />;
              case 'contact':
                return <Contact />;
              case 'home':
              default:
                return (
                  <>
                    <Hero onSearch={() => setCurrentPage('projects')} />
                    <TrustSection />
                    <Features />
                    <HowItWorks />
                    <Categories onViewCategory={() => setCurrentPage('projects')} />
                    <FeaturedProjects onViewAll={() => setCurrentPage('projects')} />
                    <Pricing onGetStarted={() => setCurrentPage('signup')} />
                    <FAQ />
                    <MarketplaceGallery />
                    <AppPromo />
                  </>
                );
            }
          };

          return (
            <div className="min-h-screen bg-white font-sans text-slate-900">
              <HomeownerNavbar onNavigate={setCurrentPage} onLogout={handleLogout} />
              <main>
                {renderPublicContent()}
              </main>
              <Footer onNavigate={setCurrentPage} />
            </div>
          );
        }

        // Dashboard pages for homeowners (with sidebar)
        const renderHomeownerContent = () => {
          switch (currentPage) {
            case 'my-projects':
              return <HomeownerProjectsEnhanced onViewProject={(id) => setCurrentPage('project-details-view')} />;
            case 'project-details-view':
              return <ProjectDetailsView onBack={() => setCurrentPage('my-projects')} onMessageContractor={(id) => setCurrentPage('messages')} />;
            case 'received-bids':
              return <HomeownerReceivedBids onViewBid={(id) => setCurrentPage('bid-details')} />;
            case 'bid-details':
              return <ProjectDetailsView onBack={() => setCurrentPage('received-bids')} onMessageContractor={(id) => setCurrentPage('messages')} />;
            case 'contractor-profile-view': // View contractor profile
              return <ContractorProfileView onBack={() => setCurrentPage('received-bids')} onMessage={() => setCurrentPage('messages')} />;
            case 'payments':
              return <HomeownerPayments />;
            case 'active-work':
              return <HomeownerActiveWork onViewProject={(id) => setCurrentPage('project-details-view')} />;
            case 'reviews':
              return <ContractorReviews />; // Reuse contractor reviews component
            case 'messages':
              return <Messages userRole="homeowner" />;
            case 'settings':
              return <Settings userRole="homeowner" />;
            case 'post-project':
              return <EnhancedPostProject isPhoneVerified={true} onSubmit={() => setCurrentPage('my-projects')} onCancel={() => setCurrentPage('dashboard')} />;
            case 'phone-verify':
              return <PhoneVerification userType="homeowner" />;
            case 'dashboard':
            default:
              return <HomeownerDashboardHome onNavigate={setCurrentPage} />;
          }
        };

        return (
          <HomeownerLayout
            activePage={currentPage}
            onNavigate={setCurrentPage}
            onLogout={handleLogout}
          >
            {renderHomeownerContent()}
          </HomeownerLayout>
        );
     }

    // CONTRACTOR & ADMIN FLOW (Dashboard Sidebar Layout)
    const renderDashboardContent = () => {
      // ADMIN FLOW - Not implemented yet
      if (auth.role === 'admin') {
        return (
          <div className="min-h-screen bg-slate-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
              <h1 className="text-2xl font-bold text-slate-900 mb-4">Admin Dashboard</h1>
              <p className="text-slate-600 mb-6">Admin panel is under development.</p>
              <button 
                onClick={handleLogout}
                className="bg-[#f9a825] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e69b20] transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        );
      }

      // CONTRACTOR FLOW - New Layout
      if (auth.role === 'contractor') {
        // Public pages for contractors (without sidebar)
        const publicPages = ['home', 'projects', 'project-details', 'about', 'contact'];
        
        if (publicPages.includes(currentPage)) {
          const renderPublicContent = () => {
            switch (currentPage) {
              case 'projects':
                return <FindProjects onNavigate={setCurrentPage} userRole="contractor" />;
              case 'project-details':
                return <ProjectDetails 
                  onBack={() => setCurrentPage('projects')} 
                  onSubmitQuote={() => setCurrentPage('dashboard')}
                  onMessageUser={() => setCurrentPage('messages')}
                />;
              case 'about':
                return <AboutUs />;
              case 'contact':
                return <Contact />;
              case 'home':
              default:
                return (
                  <>
                    <Hero onSearch={() => setCurrentPage('projects')} />
                    <TrustSection />
                    <Features />
                    <HowItWorks />
                    <Categories onViewCategory={() => setCurrentPage('projects')} />
                    <FeaturedProjects onViewAll={() => setCurrentPage('projects')} />
                    <Pricing onGetStarted={() => setCurrentPage('signup')} />
                    <FAQ />
                    <MarketplaceGallery />
                    <AppPromo />
                  </>
                );
            }
          };

          return (
            <div className="min-h-screen bg-white font-sans text-slate-900">
              <ContractorNavbar onNavigate={setCurrentPage} onLogout={handleLogout} />
              <main>
                {renderPublicContent()}
              </main>
              <Footer onNavigate={setCurrentPage} />
            </div>
          );
        }

        // Dashboard pages for contractors (with sidebar)
        const renderContractorContent = () => {
          switch (currentPage) {
            case 'job-feed':
              return <JobRoutingSystem currentContractorId="contractor-123" />;
            case 'my-bids':
              return <ContractorBidsEnhanced onViewBid={(id) => setCurrentPage('bid-details')} />;
            case 'bid-details':
              return <ContractorBidDetails 
                onBack={() => setCurrentPage('my-bids')} 
                onEditQuote={() => setCurrentPage('enhanced-quote')}
                onViewHomeownerProfile={() => setCurrentPage('homeowner-profile-view')} // NEW
              />;
            case 'homeowner-profile-view': // NEW: View homeowner profile
              return <HomeownerProfileView onBack={() => setCurrentPage('bid-details')} onMessage={() => setCurrentPage('messages')} />;
            case 'my-projects':
              return <ContractorMyProjects onViewProject={(id) => setCurrentPage('contractor-project-details')} />;
            case 'contractor-project-details':
              return <ContractorProjectDetails onBack={() => setCurrentPage('my-projects')} />;
            case 'projects':
            case 'available-projects':
              return <FindProjects onNavigate={setCurrentPage} userRole="contractor" />;
            case 'submit-quote':
            case 'enhanced-quote':
              return <EnhancedQuoteForm projectTitle="Bathroom Remodel" onCancel={() => setCurrentPage('projects')} onSubmit={() => setCurrentPage('dashboard')} />;
            case 'documents':
              return <DocumentUpload />;
            case 'subscription':
              return <SubscriptionPlans currentPlan="none" currentBilling="monthly" />;
            case 'billing':
              return <ContractorBilling currentPlan="none" currentBilling="monthly" onNavigate={setCurrentPage} />;
            case 'trade-pricing':
              return <TradeAndPricing />;
            case 'phone-verify':
              return <PhoneVerification userType="contractor" />;
            case 'messages':
              return <Messages userRole="contractor" />;
            case 'earnings':
              return <ContractorEarnings />;
            case 'reviews':
              return <ContractorReviews />;
            case 'settings':
              return <ContractorSettings />;
            case 'profile':
              return <ContractorProfile />;
            case 'dashboard':
            default:
              return <ContractorDashboardHome onNavigate={setCurrentPage} currentPlan="none" currentBilling="monthly" />;
          }
        };

        return (
          <ContractorLayout
            activePage={currentPage}
            onNavigate={setCurrentPage}
            onLogout={handleLogout}
          >
            {renderContractorContent()}
          </ContractorLayout>
        );
      }
    };

    return renderDashboardContent();
  }

  // ----------------------------------------------------------------
  // AUTH FLOW (LOGIN & SIGNUP)
  // ----------------------------------------------------------------
  if (currentPage === 'login') {
    return (
      <Login
        onLogin={(role) => handleLogin(role)}
        onNavigateToSignup={() => setCurrentPage('signup')}
      />
    );
  }

  if (currentPage === 'signup') {
    return (
      <Signup
        onSignup={(role) => {
          setIsSigningUp(role);
          setCurrentPage('signup-flow');
        }}
        onNavigateToLogin={() => setCurrentPage('login')}
      />
    );
  }

  if (currentPage === 'signup-flow' && isSigningUp) {
    return (
      <SignupForm 
        role={isSigningUp as 'homeowner' | 'contractor'} 
        onBack={() => {
          setIsSigningUp(null);
          setCurrentPage('signup');
        }}
        onComplete={() => {
          const role = isSigningUp;
          setIsSigningUp(null);
          handleLogin(role);
        }}
      />
    );
  }

  // ----------------------------------------------------------------
  // PUBLIC VIEW
  // ----------------------------------------------------------------
  const renderPublicPage = () => {
    switch (currentPage) {
      case 'projects':
        return <FindProjects onNavigate={setCurrentPage} />;
      case 'project-details':
        return <ProjectDetails 
          onBack={() => setCurrentPage('projects')} 
          isAuthenticated={false}
          onLoginRequired={() => handleLoginRequired('project-details')}
        />;
      case 'about':
        return <AboutUs />;
      case 'contact':
        return <Contact />;
      case 'terms':
        return <TermsOfService />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'refund-policy':
        return <RefundPolicy />;
      case 'help':
        return <HelpCenter />;
      case 'home':
      default:
        return (
          <>
            <Hero onSearch={() => setCurrentPage('projects')} />
            <TrustSection />
            <Features />
            <HowItWorks />
            <Categories onViewCategory={() => setCurrentPage('projects')} />
            <FeaturedProjects onViewAll={() => setCurrentPage('projects')} />
            <Pricing onGetStarted={() => setCurrentPage('signup')} />
            <FAQ />
            <MarketplaceGallery />
            <AppPromo />
          </>
        );
    }
  };

  return (
    <ProjectProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
        <Navbar 
          onNavigate={setCurrentPage} 
          currentPage={currentPage} 
          onLogin={handleLogin}
        />
        <main className="flex-grow">
          {renderPublicPage()}
        </main>
        <Footer onNavigate={setCurrentPage} />
        
        {/* Call to Action for Signup when not logged in */}
        {!auth.isAuthenticated && currentPage === 'home' && (
          <div className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur text-white p-4 flex justify-center items-center gap-4 z-40 md:hidden">
             <span className="text-sm font-medium">Join Homzz Today</span>
             <button onClick={() => setCurrentPage('signup')} className="bg-[#f9a825] text-white px-4 py-2 rounded-lg font-bold text-sm">Sign Up</button>
          </div>
        )}
      </div>
    </ProjectProvider>
  );
}