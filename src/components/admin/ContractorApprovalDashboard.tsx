import { useState } from 'react';
import { CheckCircle, X, Clock, FileText, Eye, Download, Calendar } from 'lucide-react';

interface ContractorApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  trades: string[];
  submittedAt: string;
  status: 'pending' | 'approved' | 'rejected';
  documents: {
    license: { file: string; number: string; expiry: string };
    insurance: { file: string; expiry: string };
    bond: { file: string; expiry: string };
  };
  workersComp: 'yes' | 'no';
}

export function ContractorApprovalDashboard() {
  const [applications, setApplications] = useState<ContractorApplication[]>([
    {
      id: '1',
      name: 'John Smith',
      email: 'john@abcconstruction.com',
      phone: '(555) 123-4567',
      trades: ['Kitchen Remodeling', 'Bathroom Remodeling'],
      submittedAt: 'Feb 18, 2026',
      status: 'pending',
      documents: {
        license: { file: 'license_CA123456.pdf', number: 'CA-123456', expiry: '2027-12-31' },
        insurance: { file: 'insurance_cert.pdf', expiry: '2026-12-31' },
        bond: { file: 'bond_cert.pdf', expiry: '2027-06-30' },
      },
      workersComp: 'yes',
    },
    {
      id: '2',
      name: 'Sarah Williams',
      email: 'sarah@probuilders.com',
      phone: '(555) 987-6543',
      trades: ['Deck Installation', 'Roofing'],
      submittedAt: 'Feb 17, 2026',
      status: 'approved',
      documents: {
        license: { file: 'license_CA789012.pdf', number: 'CA-789012', expiry: '2028-03-15' },
        insurance: { file: 'insurance_cert.pdf', expiry: '2027-01-31' },
        bond: { file: 'bond_cert.pdf', expiry: '2027-12-31' },
      },
      workersComp: 'yes',
    },
  ]);

  const [selectedApp, setSelectedApp] = useState<ContractorApplication | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');

  const handleApprove = (id: string) => {
    setApplications(prev =>
      prev.map(app => app.id === id ? { ...app, status: 'approved' as const } : app)
    );
    alert('Contractor approved! They can now receive job notifications.');
  };

  const handleReject = (id: string) => {
    const reason = prompt('Enter rejection reason (will be sent to contractor):');
    if (reason) {
      setApplications(prev =>
        prev.map(app => app.id === id ? { ...app, status: 'rejected' as const } : app)
      );
      alert('Contractor rejected. Notification sent with reason.');
    }
  };

  const filteredApps = applications.filter(app => 
    filter === 'all' ? true : app.status === filter
  );

  const pendingCount = applications.filter(app => app.status === 'pending').length;
  const approvedCount = applications.filter(app => app.status === 'approved').length;
  const rejectedCount = applications.filter(app => app.status === 'rejected').length;

  return (
    <div className="bg-white rounded-xl p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Contractor Approvals</h1>
        <p className="text-slate-600">Review and approve contractor applications</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-amber-50 border-2 border-amber-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-amber-700 font-medium">Pending Review</p>
              <p className="text-3xl font-bold text-amber-900">{pendingCount}</p>
            </div>
            <Clock className="size-8 text-amber-600" />
          </div>
        </div>
        <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-700 font-medium">Approved</p>
              <p className="text-3xl font-bold text-green-900">{approvedCount}</p>
            </div>
            <CheckCircle className="size-8 text-green-600" />
          </div>
        </div>
        <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-red-700 font-medium">Rejected</p>
              <p className="text-3xl font-bold text-red-900">{rejectedCount}</p>
            </div>
            <X className="size-8 text-red-600" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            filter === 'all'
              ? 'bg-[#f9a825] text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          All ({applications.length})
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            filter === 'pending'
              ? 'bg-[#f9a825] text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Pending ({pendingCount})
        </button>
        <button
          onClick={() => setFilter('approved')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            filter === 'approved'
              ? 'bg-[#f9a825] text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Approved ({approvedCount})
        </button>
        <button
          onClick={() => setFilter('rejected')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            filter === 'rejected'
              ? 'bg-[#f9a825] text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Rejected ({rejectedCount})
        </button>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApps.map(app => (
          <div
            key={app.id}
            className={`border-2 rounded-xl p-6 ${
              app.status === 'pending' ? 'border-amber-200 bg-amber-50/30' :
              app.status === 'approved' ? 'border-green-200 bg-green-50/30' :
              'border-red-200 bg-red-50/30'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{app.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    app.status === 'pending' ? 'bg-amber-500 text-white' :
                    app.status === 'approved' ? 'bg-green-600 text-white' :
                    'bg-red-600 text-white'
                  }`}>
                    {app.status.toUpperCase()}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-2 text-sm text-slate-600">
                  <p><strong>Email:</strong> {app.email}</p>
                  <p><strong>Phone:</strong> {app.phone}</p>
                  <p><strong>Submitted:</strong> {app.submittedAt}</p>
                  <p><strong>Workers Comp:</strong> {app.workersComp === 'yes' ? 'Yes' : 'Exempt'}</p>
                </div>
                <div className="mt-2">
                  <p className="text-sm font-semibold text-slate-700">Trades:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {app.trades.map((trade, idx) => (
                      <span key={idx} className="px-2 py-1 bg-[#f9a825]/20 text-[#f9a825] rounded text-xs font-medium">
                        {trade}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="p-3 bg-white border border-slate-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="size-4 text-[#f9a825]" />
                  <p className="font-semibold text-slate-900 text-sm">License</p>
                </div>
                <p className="text-xs text-slate-600 mb-1">#{app.documents.license.number}</p>
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <Calendar className="size-3" />
                  <span>Expires: {app.documents.license.expiry}</span>
                </div>
                <button className="mt-2 text-xs text-blue-600 hover:underline flex items-center gap-1">
                  <Download className="size-3" /> Download
                </button>
              </div>

              <div className="p-3 bg-white border border-slate-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="size-4 text-blue-600" />
                  <p className="font-semibold text-slate-900 text-sm">Insurance</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
                  <Calendar className="size-3" />
                  <span>Expires: {app.documents.insurance.expiry}</span>
                </div>
                <button className="mt-2 text-xs text-blue-600 hover:underline flex items-center gap-1">
                  <Download className="size-3" /> Download
                </button>
              </div>

              <div className="p-3 bg-white border border-slate-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="size-4 text-green-600" />
                  <p className="font-semibold text-slate-900 text-sm">Bond</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
                  <Calendar className="size-3" />
                  <span>Expires: {app.documents.bond.expiry}</span>
                </div>
                <button className="mt-2 text-xs text-blue-600 hover:underline flex items-center gap-1">
                  <Download className="size-3" /> Download
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedApp(app)}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-all flex items-center gap-2"
              >
                <Eye className="size-4" />
                View Full Details
              </button>
              
              {app.status === 'pending' && (
                <>
                  <button
                    onClick={() => handleApprove(app.id)}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all flex items-center gap-2"
                  >
                    <CheckCircle className="size-4" />
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(app.id)}
                    className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all flex items-center gap-2"
                  >
                    <X className="size-4" />
                    Reject
                  </button>
                </>
              )}

              {app.status === 'approved' && (
                <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg">
                  <CheckCircle className="size-4" />
                  <span className="font-medium text-sm">Active in job routing</span>
                </div>
              )}
            </div>
          </div>
        ))}

        {filteredApps.length === 0 && (
          <div className="text-center py-12">
            <Clock className="size-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 text-lg">No applications found</p>
          </div>
        )}
      </div>
    </div>
  );
}
