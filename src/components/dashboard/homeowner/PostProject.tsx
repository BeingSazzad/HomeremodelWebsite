import React, { useState } from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Label } from '../../ui/label';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { 
  ImagePlus, 
  X, 
  Upload, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  MapPin,
  DollarSign,
  Calendar,
  FileText,
  Lightbulb
} from 'lucide-react';
import { Badge } from '../../ui/badge';
import { Progress } from '../../ui/progress';
import { toast } from 'sonner@2.0.3';

interface PostProjectProps {
  onCancel: () => void;
  onSubmit: () => void;
}

export function PostProject({ onCancel, onSubmit }: PostProjectProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    location: '',
    budget: '',
    timeline: '',
    completionDate: '',
  });

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  const categories = [
    'Kitchen Remodeling',
    'Bathroom Renovation',
    'Basement Finishing',
    'Home Addition',
    'Flooring',
    'Painting',
    'Roofing',
    'Landscaping',
    'Other'
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // In real app, upload to server and get URLs
      const mockUrls = Array.from(files).map(() => 
        `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop`
      );
      setUploadedImages([...uploadedImages, ...mockUrls]);
      toast.success(`${files.length} image(s) uploaded successfully`);
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(uploadedImages.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    toast.success('Project posted successfully! Contractors will start sending quotes soon.');
    onSubmit();
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.title && formData.category && formData.description;
      case 2:
        return formData.location && formData.budget;
      case 3:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-slate-900">Post a New Project</h1>
          <Badge variant="secondary" className="text-sm">
            Step {currentStep} of {totalSteps}
          </Badge>
        </div>
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between mt-3 text-sm">
          <span className={currentStep >= 1 ? 'text-[#f9a825] font-medium' : 'text-slate-400'}>
            Project Details
          </span>
          <span className={currentStep >= 2 ? 'text-[#f9a825] font-medium' : 'text-slate-400'}>
            Budget & Timeline
          </span>
          <span className={currentStep >= 3 ? 'text-[#f9a825] font-medium' : 'text-slate-400'}>
            Photos & Review
          </span>
        </div>
      </div>

      <Card className="border-slate-200 shadow-lg">
        <CardContent className="p-8">
          {/* Step 1: Project Details */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-900 mb-1">Tip for better responses</h4>
                  <p className="text-sm text-blue-700">
                    Be specific about your project. Include materials, dimensions, and any special requirements to get accurate quotes.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-base flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#f9a825]" />
                  Project Title *
                </Label>
                <Input
                  placeholder="e.g., Modern Kitchen Renovation with Island"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="text-base h-12 focus-visible:ring-[#f9a825]"
                />
                <p className="text-sm text-slate-500">
                  Make it descriptive and specific
                </p>
              </div>

              <div className="space-y-2">
                <Label className="text-base">Project Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger className="h-12 text-base focus:ring-[#f9a825]">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-base">Project Description *</Label>
                <Textarea
                  placeholder="Describe your project in detail. Include:&#10;• What needs to be done&#10;• Current condition&#10;• Materials or finishes you prefer&#10;• Any specific requirements"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="min-h-[200px] text-base focus-visible:ring-[#f9a825]"
                />
                <p className="text-sm text-slate-500">
                  {formData.description.length} characters (recommended: 100+)
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Budget & Timeline */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-900 mb-1">Budget tip</h4>
                  <p className="text-sm text-amber-700">
                    Setting a realistic budget helps contractors provide accurate quotes. You can always negotiate later.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-base flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#f9a825]" />
                  Project Location *
                </Label>
                <Input
                  placeholder="Enter your city or zip code"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="text-base h-12 focus-visible:ring-[#f9a825]"
                />
                <p className="text-sm text-slate-500">
                  This helps us find local contractors near you
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-base flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#f9a825]" />
                    Budget Range *
                  </Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => setFormData({ ...formData, budget: value })}
                  >
                    <SelectTrigger className="h-12 text-base focus:ring-[#f9a825]">
                      <SelectValue placeholder="Select your budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-1k">Under $1,000</SelectItem>
                      <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                      <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                      <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                      <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                      <SelectItem value="50k-plus">$50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-base">Project Timeline</Label>
                  <Select
                    value={formData.timeline}
                    onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                  >
                    <SelectTrigger className="h-12 text-base focus:ring-[#f9a825]">
                      <SelectValue placeholder="How soon?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">As soon as possible</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="3-months">Within 3 months</SelectItem>
                      <SelectItem value="6-months">Within 6 months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-base flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#f9a825]" />
                  Preferred Completion Date (Optional)
                </Label>
                <Input
                  type="date"
                  value={formData.completionDate}
                  onChange={(e) => setFormData({ ...formData, completionDate: e.target.value })}
                  className="text-base h-12 focus-visible:ring-[#f9a825]"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>
          )}

          {/* Step 3: Photos & Review */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                <Lightbulb className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-green-900 mb-1">Photos help get better quotes</h4>
                  <p className="text-sm text-green-700">
                    Projects with photos receive 40% more quotes. Add images of the space, current condition, or inspiration.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-base flex items-center gap-2">
                  <ImagePlus className="w-4 h-4 text-[#f9a825]" />
                  Upload Project Photos
                </Label>

                <input
                  type="file"
                  id="file-upload"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />

                <label
                  htmlFor="file-upload"
                  className="border-2 border-dashed border-slate-300 rounded-xl p-12 flex flex-col items-center justify-center text-slate-500 hover:border-[#f9a825] hover:bg-[#f9a825]/5 transition-all cursor-pointer"
                >
                  <Upload className="w-12 h-12 mb-4 text-[#f9a825]" />
                  <p className="font-medium text-lg mb-1">Click to upload or drag and drop</p>
                  <p className="text-sm">PNG, JPG, GIF up to 10MB (Max 10 images)</p>
                </label>

                {uploadedImages.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    {uploadedImages.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image}
                          alt={`Upload ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg border-2 border-slate-200"
                        />
                        <button
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Review Summary */}
              <div className="space-y-4 pt-6 border-t border-slate-200">
                <h3 className="text-lg font-medium text-slate-900 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#f9a825]" />
                  Review Your Project
                </h3>

                <div className="space-y-3 bg-slate-50 p-6 rounded-lg">
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Project Title</p>
                    <p className="font-medium text-slate-900">{formData.title || 'Not specified'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Category</p>
                    <p className="font-medium text-slate-900">{formData.category || 'Not specified'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Location</p>
                    <p className="font-medium text-slate-900">{formData.location || 'Not specified'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Budget Range</p>
                    <p className="font-medium text-slate-900">{formData.budget || 'Not specified'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Description</p>
                    <p className="font-medium text-slate-900 line-clamp-3">
                      {formData.description || 'Not specified'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Photos Uploaded</p>
                    <p className="font-medium text-slate-900">{uploadedImages.length} image(s)</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex justify-between border-t p-6 bg-slate-50">
          <Button
            variant="outline"
            onClick={currentStep === 1 ? onCancel : handleBack}
            className="gap-2"
          >
            {currentStep === 1 ? (
              <>
                <X className="w-4 h-4" />
                Cancel
              </>
            ) : (
              <>
                <ArrowLeft className="w-4 h-4" />
                Back
              </>
            )}
          </Button>

          {currentStep < totalSteps ? (
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="bg-[#f9a825] hover:bg-[#e39922] text-white px-8 gap-2"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="bg-[#f9a825] hover:bg-[#e39922] text-white px-8 gap-2"
            >
              <CheckCircle className="w-4 h-4" />
              Publish Project
            </Button>
          )}
        </CardFooter>
      </Card>

      {/* What happens next */}
      <Card className="mt-6 border-slate-200 bg-gradient-to-br from-[#f9a825]/5 to-transparent">
        <CardContent className="p-6">
          <h3 className="font-medium text-slate-900 mb-4">What happens next?</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-[#f9a825] text-white rounded-full flex items-center justify-center flex-shrink-0 font-medium">
                1
              </div>
              <div>
                <p className="font-medium text-slate-900 mb-1">Review & Publish</p>
                <p className="text-slate-600">Your project will be reviewed and published within 24 hours</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-[#f9a825] text-white rounded-full flex items-center justify-center flex-shrink-0 font-medium">
                2
              </div>
              <div>
                <p className="font-medium text-slate-900 mb-1">Get Quotes</p>
                <p className="text-slate-600">Receive quotes from verified contractors in your area</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-[#f9a825] text-white rounded-full flex items-center justify-center flex-shrink-0 font-medium">
                3
              </div>
              <div>
                <p className="font-medium text-slate-900 mb-1">Choose & Start</p>
                <p className="text-slate-600">Compare, communicate, and hire the best contractor</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
