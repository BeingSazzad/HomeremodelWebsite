import { useState } from 'react';
import { MapPin, Mail, Phone, User, Award, Briefcase, Upload, X, CheckCircle, Plus, Edit2, Shield } from 'lucide-react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

interface Skill {
  id: string;
  name: string;
  level: 'expert' | 'intermediate' | 'beginner';
  yearsOfExperience: number;
}

interface License {
  id: string;
  type: string;
  number: string;
  state: string;
  expirationDate: string;
  verified: boolean;
}

interface Certification {
  id: string;
  name: string;
  issuingOrganization: string;
  issueDate: string;
  expirationDate?: string;
}

export function ContractorProfile() {
  const [activeTab, setActiveTab] = useState<'personal' | 'professional' | 'credentials' | 'pricing'>('personal');
  const [isEditing, setIsEditing] = useState(false);

  // Mock data
  const [skills, setSkills] = useState<Skill[]>([
    { id: '1', name: 'Kitchen Remodeling', level: 'expert', yearsOfExperience: 15 },
    { id: '2', name: 'Bathroom Renovation', level: 'expert', yearsOfExperience: 12 },
    { id: '3', name: 'Custom Carpentry', level: 'expert', yearsOfExperience: 10 },
    { id: '4', name: 'Tile Installation', level: 'intermediate', yearsOfExperience: 8 },
    { id: '5', name: 'Plumbing', level: 'intermediate', yearsOfExperience: 6 },
  ]);

  const [licenses, setLicenses] = useState<License[]>([
    {
      id: '1',
      type: 'General Contractor',
      number: 'CA-123456789',
      state: 'California',
      expirationDate: '2027-12-31',
      verified: true
    },
    {
      id: '2',
      type: 'Plumbing Contractor',
      number: 'CA-PLB-987654',
      state: 'California',
      expirationDate: '2026-08-15',
      verified: true
    }
  ]);

  const [certifications, setCertifications] = useState<Certification[]>([
    {
      id: '1',
      name: 'OSHA 30-Hour Construction',
      issuingOrganization: 'OSHA',
      issueDate: '2023-03-15',
    },
    {
      id: '2',
      name: 'Lead-Safe Certified',
      issuingOrganization: 'EPA',
      issueDate: '2022-06-20',
      expirationDate: '2027-06-20'
    }
  ]);

  const specialties = [
    'Kitchen Remodeling',
    'Bathroom Renovation',
    'Basement Finishing',
    'Home Additions',
    'Custom Carpentry',
    'Deck & Patio Construction'
  ];

  const serviceAreas = ['Los Angeles', 'Santa Monica', 'Beverly Hills', 'Pasadena', 'Glendale'];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'intermediate':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'beginner':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="flex-1 bg-white rounded-xl">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Profile Settings</h1>
            <p className="text-slate-500">Manage your professional profile and credentials</p>
          </div>
          <Button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-[#f9a825] hover:bg-[#e69b20] text-white"
          >
            <Edit2 className="size-4 mr-2" />
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </Button>
        </div>

        {/* Profile Completion Badge */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-12 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="size-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Profile 95% Complete</h3>
                <p className="text-sm text-slate-600">Add insurance information to complete your profile</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: '95%' }} />
              </div>
              <span className="text-sm font-semibold text-slate-700">95%</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-[#fef6e9] rounded-2xl p-1.5 inline-flex mb-8">
          <button
            onClick={() => setActiveTab('personal')}
            className={`px-6 py-2 rounded-xl transition-all font-medium ${
              activeTab === 'personal'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            Personal Info
          </button>
          <button
            onClick={() => setActiveTab('professional')}
            className={`px-6 py-2 rounded-xl transition-all font-medium ${
              activeTab === 'professional'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            Professional
          </button>
          <button
            onClick={() => setActiveTab('credentials')}
            className={`px-6 py-2 rounded-xl transition-all font-medium ${
              activeTab === 'credentials'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            Credentials
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className={`px-6 py-2 rounded-xl transition-all font-medium ${
              activeTab === 'pricing'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            Pricing
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'personal' && (
          <div className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-slate-900">
                  <User className="size-4 text-[#f9a825]" />
                  Full Name
                </Label>
                <Input 
                  defaultValue="John Doe" 
                  disabled={!isEditing}
                  className="h-12 bg-[#f9fafb] border-slate-200 text-slate-700"
                />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-slate-900">
                  <Mail className="size-4 text-[#f9a825]" />
                  Email Address
                </Label>
                <Input 
                  defaultValue="john@premiumrenovations.com" 
                  type="email"
                  disabled={!isEditing}
                  className="h-12 bg-[#f9fafb] border-slate-200 text-slate-700"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-slate-900">
                  <Phone className="size-4 text-[#f9a825]" />
                  Phone Number
                </Label>
                <Input 
                  defaultValue="(555) 123-4567" 
                  type="tel"
                  disabled={!isEditing}
                  className="h-12 bg-[#f9fafb] border-slate-200 text-slate-700"
                />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-slate-900">
                  <MapPin className="size-4 text-[#f9a825]" />
                  Location
                </Label>
                <Input 
                  defaultValue="123 Main Street, Los Angeles, CA 90001" 
                  disabled={!isEditing}
                  className="h-12 bg-[#f9fafb] border-slate-200 text-slate-700"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-slate-900">
                Professional Bio
              </Label>
              <textarea 
                defaultValue="Professional contractor with over 15 years of experience in residential and commercial renovations. Specializing in kitchen and bathroom remodeling, custom carpentry, and general contracting services."
                disabled={!isEditing}
                className="w-full min-h-[120px] p-3 bg-[#f9fafb] border border-slate-200 rounded-lg text-slate-700 resize-none focus:ring-2 focus:ring-[#f9a825] focus:border-transparent outline-none disabled:opacity-70"
              />
            </div>

            {isEditing && (
              <div className="flex justify-end pt-4">
                <Button className="bg-[#f9a825] hover:bg-[#e69b20] text-white px-8">
                  Save Changes
                </Button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'professional' && (
          <div className="space-y-8">
            {/* Business Information */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Briefcase className="size-5 text-[#f9a825]" />
                Business Information
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Business Name</Label>
                  <Input 
                    defaultValue="Premium Renovations LLC" 
                    disabled={!isEditing}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Years in Business</Label>
                  <Input 
                    defaultValue="15" 
                    type="number"
                    disabled={!isEditing}
                    className="h-12"
                  />
                </div>
              </div>
            </div>

            {/* Skills & Expertise */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Award className="size-5 text-[#f9a825]" />
                  Skills & Expertise
                </h2>
                {isEditing && (
                  <Button variant="outline" size="sm">
                    <Plus className="size-4 mr-2" />
                    Add Skill
                  </Button>
                )}
              </div>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">{skill.name}</h3>
                        <p className="text-sm text-slate-500">{skill.yearsOfExperience} years of experience</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(skill.level)}`}>
                        {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                      </span>
                      {isEditing && (
                        <button className="text-red-600 hover:text-red-700">
                          <X className="size-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-5">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center gap-2 bg-[#fffbf0] border border-[#f9a825]/30 text-slate-900 px-4 py-2 rounded-full">
                    <span className="font-medium">{specialty}</span>
                    {isEditing && (
                      <button className="text-slate-400 hover:text-red-600">
                        <X className="size-3" />
                      </button>
                    )}
                  </div>
                ))}
                {isEditing && (
                  <button className="flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full hover:bg-slate-200 transition-colors">
                    <Plus className="size-4" />
                    <span className="font-medium">Add Specialty</span>
                  </button>
                )}
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                <MapPin className="size-5 text-[#f9a825]" />
                Service Areas
              </h2>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full">
                    <span className="font-medium">{area}</span>
                    {isEditing && (
                      <button className="text-blue-400 hover:text-red-600">
                        <X className="size-3" />
                      </button>
                    )}
                  </div>
                ))}
                {isEditing && (
                  <button className="flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full hover:bg-slate-200 transition-colors">
                    <Plus className="size-4" />
                    <span className="font-medium">Add Area</span>
                  </button>
                )}
              </div>
            </div>

            {isEditing && (
              <div className="flex justify-end">
                <Button className="bg-[#f9a825] hover:bg-[#e69b20] text-white px-8">
                  Save Changes
                </Button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'credentials' && (
          <div className="space-y-8">
            {/* Licenses */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Shield className="size-5 text-[#f9a825]" />
                  Professional Licenses
                </h2>
                {isEditing && (
                  <Button variant="outline" size="sm">
                    <Plus className="size-4 mr-2" />
                    Add License
                  </Button>
                )}
              </div>
              <div className="space-y-4">
                {licenses.map((license) => (
                  <div key={license.id} className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <div className="size-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Shield className="size-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                            {license.type}
                            {license.verified && (
                              <CheckCircle className="size-4 text-green-600" />
                            )}
                          </h3>
                          <p className="text-sm text-slate-500 mt-1">License #{license.number}</p>
                        </div>
                      </div>
                      {license.verified && (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium border border-green-200">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-slate-500">State</p>
                        <p className="font-medium text-slate-900">{license.state}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Expires</p>
                        <p className="font-medium text-slate-900">{new Date(license.expirationDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Award className="size-5 text-[#f9a825]" />
                  Certifications
                </h2>
                {isEditing && (
                  <Button variant="outline" size="sm">
                    <Plus className="size-4 mr-2" />
                    Add Certification
                  </Button>
                )}
              </div>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.id} className="border border-slate-200 rounded-lg p-5">
                    <div className="flex items-start gap-3">
                      <div className="size-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="size-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">{cert.name}</h3>
                        <p className="text-sm text-slate-500 mt-1">{cert.issuingOrganization}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-slate-600">
                          <span>Issued: {new Date(cert.issueDate).toLocaleDateString()}</span>
                          {cert.expirationDate && (
                            <span>• Expires: {new Date(cert.expirationDate).toLocaleDateString()}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Insurance */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Shield className="size-5 text-[#f9a825]" />
                Insurance Information
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>General Liability Insurance</Label>
                  <Input 
                    defaultValue="$2,000,000 Coverage" 
                    disabled={!isEditing}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Workers Compensation</Label>
                  <Input 
                    defaultValue="$1,000,000 Coverage" 
                    disabled={!isEditing}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Policy Number</Label>
                  <Input 
                    defaultValue="INS-2024-789456" 
                    disabled={!isEditing}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Expiration Date</Label>
                  <Input 
                    type="date"
                    defaultValue="2026-12-31" 
                    disabled={!isEditing}
                    className="h-12"
                  />
                </div>
              </div>
              {isEditing && (
                <div className="mt-4">
                  <Button variant="outline" className="w-full border-dashed">
                    <Upload className="size-4 mr-2" />
                    Upload Insurance Certificate
                  </Button>
                </div>
              )}
            </div>

            {isEditing && (
              <div className="flex justify-end">
                <Button className="bg-[#f9a825] hover:bg-[#e69b20] text-white px-8">
                  Save Changes
                </Button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="space-y-8">
            {/* Pricing Information */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Award className="size-5 text-[#f9a825]" />
                Pricing Information
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Hourly Rate</Label>
                  <Input 
                    defaultValue="$100/hour" 
                    disabled={!isEditing}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Minimum Project Size</Label>
                  <Input 
                    defaultValue="$5,000" 
                    disabled={!isEditing}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Maximum Project Size</Label>
                  <Input 
                    defaultValue="$500,000" 
                    disabled={!isEditing}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Payment Terms</Label>
                  <Input 
                    defaultValue="50% upfront, 50% upon completion" 
                    disabled={!isEditing}
                    className="h-12"
                  />
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="flex justify-end">
                <Button className="bg-[#f9a825] hover:bg-[#e69b20] text-white px-8">
                  Save Changes
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}