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
import { HomeownerHome } from './components/homeowner/HomeownerHome';
import { HomeownerLayout } from './components/homeowner/HomeownerLayout';
import { HomeownerDashboardHome } from './components/homeowner/HomeownerDashboardHome';
import { HomeownerProjects } from './components/homeowner/HomeownerProjects';
import { HomeownerReceivedBids } from './components/homeowner/HomeownerReceivedBids';
import { HomeownerPayments } from './components/homeowner/HomeownerPayments';
import { HomeownerActiveWork } from './components/homeowner/HomeownerActiveWork';
import { PostProject } from './components/dashboard/homeowner/PostProject';
import { ProjectDetailsView } from './components/dashboard/homeowner/ProjectDetailsView';

// Dashboard Components (Legacy/Contractor/Admin)
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { HomeownerDashboard } from './components/dashboard/homeowner/HomeownerDashboard';
import { ContractorDashboard } from './components/dashboard/contractor/ContractorDashboard';
import { AvailableProjects } from './components/dashboard/contractor/AvailableProjects';
import { SubmitQuote } from './components/dashboard/contractor/SubmitQuote';
import { Subscription } from './components/dashboard/contractor/Subscription';
import { AdminDashboard } from './components/dashboard/admin/AdminDashboard';
import { ProjectDetails } from './components/contractor/ProjectDetails';

// Contractor Layout Components
import { ContractorLayout } from './components/contractor/ContractorLayout';
import { ContractorProfile } from './components/contractor/ContractorProfile';
import { ContractorMyProjects } from './components/contractor/ContractorMyProjects';
import { ContractorProjectDetails } from './components/contractor/ContractorProjectDetails';
import { ContractorBids } from './components/contractor/ContractorBids';
import { ContractorBidDetails } from './components/contractor/ContractorBidDetails';
import { ContractorSettings } from './components/contractor/ContractorSettings';
import { ContractorReviews } from './components/contractor/ContractorReviews';
import { ContractorDashboardHome } from './components/contractor/ContractorDashboardHome';
import { ContractorEarnings } from './components/contractor/ContractorEarnings';

export default function App() {
  const [auth, setAuth] = useState<{
    isAuthenticated: boolean;
    role: 'homeowner' | 'contractor' | 'admin' | null;
  }>({ isAuthenticated: false, role: null });

  const [currentPage, setCurrentPage] = useState('home'); // Show home page by default
  const [isSigningUp, setIsSigningUp] = useState<string | null>(null);

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

  // Login Handler
  const handleLogin = (role: string) => {
    setAuth({ isAuthenticated: true, role: role as any });
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setAuth({ isAuthenticated: false, role: null });
    setCurrentPage('home');
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
                return <FindProjects onNavigate={setCurrentPage} />;
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
              return <HomeownerProjects onViewProject={(id) => setCurrentPage('project-details-view')} />;
            case 'project-details-view':
              return <ProjectDetailsView onBack={() => setCurrentPage('my-projects')} onMessageContractor={(id) => setCurrentPage('messages')} />;
            case 'received-bids':
              return <HomeownerReceivedBids onViewBid={(id) => setCurrentPage('bid-details')} />;
            case 'bid-details':
              return <ProjectDetailsView onBack={() => setCurrentPage('received-bids')} onMessageContractor={(id) => setCurrentPage('messages')} />;
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
              return <PostProject onCancel={() => setCurrentPage('dashboard')} onSubmit={() => setCurrentPage('my-projects')} />;
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
      // ADMIN FLOW
      if (auth.role === 'admin') {
        return (
          <DashboardLayout 
            role={auth.role} 
            activePage={currentPage} 
            onNavigate={setCurrentPage} 
            onLogout={handleLogout}
          >
            <AdminDashboard />
          </DashboardLayout>
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
                return <FindProjects onNavigate={setCurrentPage} />;
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
              <HomeownerNavbar onNavigate={setCurrentPage} onLogout={handleLogout} />
              <main>
                {renderPublicContent()}
              </main>
              <Footer />
            </div>
          );
        }

        // Dashboard pages for contractors (with sidebar)
        const renderContractorContent = () => {
          switch (currentPage) {
            case 'my-bids':
              return <ContractorBids onViewBid={(id) => setCurrentPage('bid-details')} />;
            case 'bid-details':
              return <ContractorBidDetails onBack={() => setCurrentPage('my-bids')} onEditQuote={() => setCurrentPage('submit-quote')} />;
            case 'my-projects':
              return <ContractorMyProjects onViewProject={(id) => setCurrentPage('contractor-project-details')} />;
            case 'contractor-project-details':
              return <ContractorProjectDetails onBack={() => setCurrentPage('my-projects')} />;
            case 'available-projects':
              return <AvailableProjects onViewDetails={() => setCurrentPage('project-details')} />;
            case 'submit-quote':
              return <SubmitQuote onBack={() => setCurrentPage('available-projects')} onSubmit={() => setCurrentPage('dashboard')} />;
            case 'subscription':
              return <Subscription onSubscribe={() => setCurrentPage('dashboard')} />;
            case 'my-quotes':
              return <div className="p-8 text-center text-slate-500">My Quotes page is under construction</div>;
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
              return <ContractorDashboardHome onNavigate={setCurrentPage} />;
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
          onLoginRequired={() => setCurrentPage('login')}
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