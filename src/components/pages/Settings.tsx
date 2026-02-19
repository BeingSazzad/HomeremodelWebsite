import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  Bell,
  CreditCard,
  Shield,
  Eye,
  EyeOff,
  Save,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { toast } from 'sonner@2.0.3';

interface SettingsProps {
  userRole: 'homeowner' | 'contractor' | 'admin';
}

export function Settings({ userRole }: SettingsProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    projectUpdates: true,
    newQuotes: true,
    messages: true,
    marketing: false,
  });

  const handleSave = () => {
    toast.success('Settings saved successfully!');
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Settings</h1>
        <p className="text-slate-600">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-white border border-slate-200 p-1 grid grid-cols-2 md:grid-cols-4 gap-1">
          <TabsTrigger value="profile" className="data-[state=active]:bg-[#f9a825] data-[state=active]:text-white">
            Profile
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-[#f9a825] data-[state=active]:text-white">
            Security
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-[#f9a825] data-[state=active]:text-white">
            Notifications
          </TabsTrigger>
          <TabsTrigger value="billing" className="data-[state=active]:bg-[#f9a825] data-[state=active]:text-white">
            Billing
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information and profile picture</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Picture */}
              <div className="flex items-center gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarFallback className="bg-[#f9a825] text-white text-2xl">
                    {userRole === 'homeowner' ? 'JD' : 'PC'}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button className="bg-[#f9a825] hover:bg-[#e39922] mb-2">
                    Upload New Photo
                  </Button>
                  <p className="text-sm text-slate-500">
                    JPG, GIF or PNG. Max size of 5MB.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#f9a825]" />
                    Full Name
                  </Label>
                  <Input
                    defaultValue={userRole === 'homeowner' ? 'John Doe' : 'Premium Contractor Inc.'}
                    className="focus-visible:ring-[#f9a825]"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#f9a825]" />
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    defaultValue="john@example.com"
                    className="focus-visible:ring-[#f9a825]"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#f9a825]" />
                    Phone Number
                  </Label>
                  <Input
                    type="tel"
                    defaultValue="(555) 123-4567"
                    className="focus-visible:ring-[#f9a825]"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#f9a825]" />
                    Location
                  </Label>
                  <Input
                    defaultValue="Los Angeles, CA"
                    className="focus-visible:ring-[#f9a825]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline">Cancel</Button>
                <Button onClick={handleSave} className="bg-[#f9a825] hover:bg-[#e39922]">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Change your password to keep your account secure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Current Password</Label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    className="pr-10 focus-visible:ring-[#f9a825]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>New Password</Label>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  className="focus-visible:ring-[#f9a825]"
                />
              </div>

              <div className="space-y-2">
                <Label>Confirm New Password</Label>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  className="focus-visible:ring-[#f9a825]"
                />
              </div>

              {/* Password Requirements */}
              <div className="bg-slate-50 p-4 rounded-lg space-y-2 text-sm">
                <p className="font-medium text-slate-900">Password Requirements:</p>
                <ul className="space-y-1 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    At least 8 characters
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-slate-300" />
                    One uppercase letter
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-slate-300" />
                    One number
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-slate-300" />
                    One special character
                  </li>
                </ul>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSave} className="bg-[#f9a825] hover:bg-[#e39922]">
                  Update Password
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>Add an extra layer of security to your account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#f9a825]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#f9a825]" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Enable 2FA</p>
                    <p className="text-sm text-slate-500">Protect your account with 2FA security</p>
                  </div>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose how you want to be notified about updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Communication Channels */}
              <div className="space-y-4">
                <h3 className="font-medium text-slate-900">Communication Channels</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-slate-400" />
                      <div>
                        <p className="font-medium text-slate-900">Email Notifications</p>
                        <p className="text-sm text-slate-500">Receive updates via email</p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, email: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="w-5 h-5 text-slate-400" />
                      <div>
                        <p className="font-medium text-slate-900">Push Notifications</p>
                        <p className="text-sm text-slate-500">Receive push notifications</p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, push: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-slate-400" />
                      <div>
                        <p className="font-medium text-slate-900">SMS Notifications</p>
                        <p className="text-sm text-slate-500">Receive updates via text</p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.sms}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, sms: checked })
                      }
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Activity Types */}
              <div className="space-y-4">
                <h3 className="font-medium text-slate-900">Activity Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-900">Project Updates</p>
                      <p className="text-sm text-slate-500">Updates on your projects</p>
                    </div>
                    <Switch
                      checked={notifications.projectUpdates}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, projectUpdates: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-900">New Quotes</p>
                      <p className="text-sm text-slate-500">When you receive new quotes</p>
                    </div>
                    <Switch
                      checked={notifications.newQuotes}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, newQuotes: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-900">Messages</p>
                      <p className="text-sm text-slate-500">New messages from {userRole === 'homeowner' ? 'contractors' : 'homeowners'}</p>
                    </div>
                    <Switch
                      checked={notifications.messages}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, messages: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-900">Marketing & Updates</p>
                      <p className="text-sm text-slate-500">Tips, features, and news</p>
                    </div>
                    <Switch
                      checked={notifications.marketing}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, marketing: checked })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button onClick={handleSave} className="bg-[#f9a825] hover:bg-[#e39922]">
                  <Save className="w-4 h-4 mr-2" />
                  Save Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing" className="space-y-6">
          {userRole === 'contractor' && (
            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle>Subscription Plan</CardTitle>
                <CardDescription>Manage your subscription and billing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-[#f9a825]/10 to-[#f9a825]/5 p-6 rounded-lg border border-[#f9a825]/20">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Professional Plan</h3>
                      <p className="text-slate-600">Unlimited project access</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-slate-900">$99</p>
                      <p className="text-sm text-slate-600">/month</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-slate-600 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#f9a825]" />
                      Access to all project leads
                    </p>
                    <p className="text-sm text-slate-600 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#f9a825]" />
                      Unlimited quote submissions
                    </p>
                    <p className="text-sm text-slate-600 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#f9a825]" />
                      Priority support
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1">Change Plan</Button>
                    <Button variant="outline" className="text-red-600 hover:text-red-700">Cancel Subscription</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>Manage your payment information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Visa ending in 4242</p>
                    <p className="text-sm text-slate-500">Expires 12/2025</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
              <Button className="w-full bg-[#f9a825] hover:bg-[#e39922]">
                Add Payment Method
              </Button>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>View and download your past invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { date: 'Dec 1, 2024', amount: '$99.00', status: 'Paid' },
                  { date: 'Nov 1, 2024', amount: '$99.00', status: 'Paid' },
                  { date: 'Oct 1, 2024', amount: '$99.00', status: 'Paid' },
                ].map((invoice, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-[#f9a825] transition-colors"
                  >
                    <div>
                      <p className="font-medium text-slate-900">{invoice.date}</p>
                      <p className="text-sm text-slate-500">{invoice.amount}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-green-600 font-medium">{invoice.status}</span>
                      <Button variant="ghost" size="sm">Download</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
