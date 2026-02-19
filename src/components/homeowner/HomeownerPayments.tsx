import { DollarSign, Clock, CheckCircle, AlertCircle, Calendar, Download, FileText, CreditCard } from 'lucide-react';
import { Button } from '../ui/button';

const paymentHistory = [
  {
    id: 1,
    projectTitle: 'Modern Kitchen Renovation',
    contractor: 'BuildPro Inc.',
    amount: 15000,
    type: 'Milestone Payment',
    milestone: 'Framing Complete',
    status: 'Completed',
    date: 'Feb 10, 2026',
    method: 'Credit Card',
    transactionId: 'TXN-2026-001234'
  },
  {
    id: 2,
    projectTitle: 'Modern Kitchen Renovation',
    contractor: 'BuildPro Inc.',
    amount: 12000,
    type: 'Milestone Payment',
    milestone: 'Electrical & Plumbing',
    status: 'Pending',
    date: 'Feb 18, 2026',
    dueDate: 'Feb 25, 2026',
    method: 'Bank Transfer',
    transactionId: null
  },
  {
    id: 3,
    projectTitle: 'Deck Installation',
    contractor: 'Elite Builders',
    amount: 16000,
    type: 'Initial Deposit',
    milestone: 'Project Start',
    status: 'Completed',
    date: 'Jan 30, 2026',
    method: 'Credit Card',
    transactionId: 'TXN-2026-000987'
  },
  {
    id: 4,
    projectTitle: 'Living Room Painting',
    contractor: 'Color Masters',
    amount: 3500,
    type: 'Final Payment',
    milestone: 'Project Completion',
    status: 'Completed',
    date: 'Dec 20, 2025',
    method: 'Bank Transfer',
    transactionId: 'TXN-2025-009876'
  }
];

const upcomingPayments = [
  {
    id: 1,
    projectTitle: 'Modern Kitchen Renovation',
    contractor: 'BuildPro Inc.',
    amount: 12000,
    milestone: 'Cabinet Installation',
    dueDate: 'Mar 1, 2026',
    daysUntilDue: 10,
    status: 'Pending Approval'
  },
  {
    id: 2,
    projectTitle: 'Deck Installation',
    contractor: 'Elite Builders',
    amount: 8000,
    milestone: 'Structural Complete',
    dueDate: 'Mar 15, 2026',
    daysUntilDue: 24,
    status: 'Upcoming'
  }
];

export function HomeownerPayments() {
  const totalSpent = paymentHistory.filter(p => p.status === 'Completed').reduce((sum, p) => sum + p.amount, 0);
  const pendingAmount = paymentHistory.filter(p => p.status === 'Pending').reduce((sum, p) => sum + p.amount, 0);
  const upcomingAmount = upcomingPayments.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="bg-white rounded-xl p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Payments & Billing</h1>
        <p className="text-slate-500">Track all your project payments and financial transactions.</p>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="size-12 bg-green-500 rounded-lg flex items-center justify-center">
              <CheckCircle className="size-6 text-white" />
            </div>
          </div>
          <p className="text-sm text-slate-600 mb-1">Total Spent</p>
          <p className="text-3xl font-bold text-slate-900">${totalSpent.toLocaleString()}</p>
        </div>

        <div className="bg-gradient-to-br from-[#fffbf0] to-[#fff8e1] border border-[#f9a825]/30 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="size-12 bg-[#f9a825] rounded-lg flex items-center justify-center">
              <Clock className="size-6 text-white" />
            </div>
          </div>
          <p className="text-sm text-slate-600 mb-1">Pending</p>
          <p className="text-3xl font-bold text-slate-900">${pendingAmount.toLocaleString()}</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="size-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <Calendar className="size-6 text-white" />
            </div>
          </div>
          <p className="text-sm text-slate-600 mb-1">Upcoming</p>
          <p className="text-3xl font-bold text-slate-900">${upcomingAmount.toLocaleString()}</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="size-12 bg-purple-500 rounded-lg flex items-center justify-center">
              <FileText className="size-6 text-white" />
            </div>
          </div>
          <p className="text-sm text-slate-600 mb-1">Transactions</p>
          <p className="text-3xl font-bold text-slate-900">{paymentHistory.length}</p>
        </div>
      </div>

      {/* Upcoming Payments */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-slate-900 mb-5">Upcoming Payments</h2>
        <div className="space-y-4">
          {upcomingPayments.map((payment) => (
            <div 
              key={payment.id}
              className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-1">{payment.projectTitle}</h3>
                  <p className="text-sm text-slate-600">{payment.contractor}</p>
                  <p className="text-sm text-slate-500 mt-1">Milestone: {payment.milestone}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-[#f9a825]">${payment.amount.toLocaleString()}</p>
                  <p className="text-xs text-slate-500 mt-1">Due {payment.dueDate}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  {payment.daysUntilDue <= 7 ? (
                    <AlertCircle className="size-4 text-red-500" />
                  ) : (
                    <Clock className="size-4 text-blue-500" />
                  )}
                  <span className={`text-sm font-medium ${
                    payment.daysUntilDue <= 7 ? 'text-red-600' : 'text-blue-600'
                  }`}>
                    {payment.daysUntilDue} days until due
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                  {payment.status === 'Pending Approval' && (
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                      <CheckCircle className="size-4 mr-2" />
                      Release Payment
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-slate-900">Payment History</h2>
          <Button variant="outline" size="sm">
            <Download className="size-4 mr-2" />
            Export
          </Button>
        </div>

        <div className="space-y-3">
          {paymentHistory.map((payment) => (
            <div 
              key={payment.id}
              className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className={`size-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    payment.status === 'Completed' 
                      ? 'bg-green-100' 
                      : 'bg-[#fffbf0]'
                  }`}>
                    {payment.status === 'Completed' ? (
                      <CheckCircle className="size-6 text-green-600" />
                    ) : (
                      <Clock className="size-6 text-[#f9a825]" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-slate-900">{payment.projectTitle}</h3>
                        <p className="text-sm text-slate-600">{payment.contractor}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-slate-900">${payment.amount.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                      <div>
                        <p className="text-slate-500 text-xs mb-1">Payment Type</p>
                        <p className="font-medium text-slate-900">{payment.type}</p>
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs mb-1">Milestone</p>
                        <p className="font-medium text-slate-900">{payment.milestone}</p>
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs mb-1">Method</p>
                        <div className="flex items-center gap-1">
                          <CreditCard className="size-3 text-slate-500" />
                          <p className="font-medium text-slate-900">{payment.method}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs mb-1">Date</p>
                        <p className="font-medium text-slate-900">{payment.date}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          payment.status === 'Completed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-[#fffbf0] text-[#f9a825]'
                        }`}>
                          {payment.status}
                        </span>
                        {payment.transactionId && (
                          <span className="text-xs text-slate-500">ID: {payment.transactionId}</span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Download className="size-4 mr-2" />
                          Receipt
                        </Button>
                        {payment.status === 'Pending' && (
                          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                            Pay Now
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
