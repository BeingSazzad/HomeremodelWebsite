import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form@7.55.0';
import { format } from "date-fns";
import { cn } from "../ui/utils";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter 
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  DollarSign, 
  Paperclip, 
  Upload, 
  X,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface SubmitQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: QuoteFormData) => void;
  projectBudget: string;
}

export interface QuoteFormData {
  price: string;
  startDate: Date | undefined;
  durationValue: string;
  durationUnit: string;
  message: string;
  files: File[];
  confirmed: boolean;
}

export function SubmitQuoteModal({ isOpen, onClose, onSubmit, projectBudget }: SubmitQuoteModalProps) {
  const { register, control, handleSubmit, formState: { errors }, watch, setValue } = useForm<QuoteFormData>({
    defaultValues: {
      durationUnit: 'Weeks',
      files: []
    }
  });

  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onFormSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    onSubmit({ ...data, files });
    setIsSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-2">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold text-slate-900">Submit Your Quote</DialogTitle>
          </div>
          <DialogDescription className="text-slate-500 text-sm mt-1">
            Budget: <span className="font-medium text-slate-900">{projectBudget}</span>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onFormSubmit)} className="px-6 py-4 space-y-5">
          {/* Price and Date Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Your Quote Price <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <span className="text-slate-400">$</span>
                </div>
                <input
                  type="text"
                  className={`w-full pl-7 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f9a825]/50 ${errors.price ? 'border-red-300' : 'border-slate-200'}`}
                  placeholder="0.00"
                  {...register('price', { required: true })}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Start Date <span className="text-red-500">*</span>
              </label>
              <Controller
                control={control}
                name="startDate"
                rules={{ required: true }}
                render={({ field }) => (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal border-slate-200 hover:bg-slate-50 pl-3 h-[38px]",
                          !field.value && "text-slate-500",
                          errors.startDate && "border-red-300"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4 text-slate-400" />
                        {field.value ? (
                          <span className="text-slate-900">{format(field.value, "PPP")}</span>
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
            </div>
          </div>

          {/* Duration Row */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Project Duration <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Clock className="w-4 h-4 text-slate-400" />
                </div>
                <input
                  type="number"
                  className={`w-full pl-9 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f9a825]/50 ${errors.durationValue ? 'border-red-300' : 'border-slate-200'}`}
                  placeholder="Length"
                  {...register('durationValue', { required: true })}
                />
              </div>
              <select
                className="w-[120px] px-3 py-2 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f9a825]/50 bg-white"
                {...register('durationUnit')}
              >
                <option value="Days">Days</option>
                <option value="Weeks">Weeks</option>
                <option value="Months">Months</option>
              </select>
            </div>
          </div>

          {/* Message Area */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Your Proposal Message <span className="text-red-500">*</span>
            </label>
            <textarea
              className={`w-full px-3 py-2 border rounded-md text-sm min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-[#f9a825]/50 ${errors.message ? 'border-red-300' : 'border-slate-200'}`}
              placeholder="Introduce yourself and explain your approach to this project:
- Your experience with similar projects
- Why you're a great fit
- What makes your quote competitive
- Timeline and process overview"
              {...register('message', { required: true })}
            />
          </div>

          {/* Attachments Area */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Attachments (Optional)
            </label>
            <div className="border-2 border-dashed border-slate-200 rounded-lg p-4 transition-colors hover:border-[#f9a825]/50 bg-slate-50">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="bg-white p-2 rounded-full shadow-sm mb-2">
                  <Upload className="w-5 h-5 text-[#f9a825]" />
                </div>
                <label className="cursor-pointer">
                  <span className="text-sm font-medium text-slate-900 hover:text-[#f9a825]">Click to attach files</span>
                  <input 
                    type="file" 
                    multiple 
                    className="hidden" 
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.jpg,.png"
                  />
                </label>
                <p className="text-xs text-slate-400 mt-1">PDF, DOC, JPG, PNG</p>
              </div>
              
              {/* File List */}
              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-white p-2 rounded border border-slate-100 text-xs">
                      <div className="flex items-center gap-2 truncate">
                        <Paperclip className="w-3 h-3 text-slate-400 flex-shrink-0" />
                        <span className="truncate max-w-[200px]">{file.name}</span>
                        <span className="text-slate-400 text-[10px]">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                      </div>
                      <button 
                        type="button" 
                        onClick={() => removeFile(index)}
                        className="text-slate-400 hover:text-red-500"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <p className="text-[10px] text-slate-400">Upload proposals, samples, references, or other documents</p>
          </div>

          {/* Confirmation Checkbox */}
          <div className="bg-blue-50/50 p-3 rounded-md border border-blue-100">
            <label className="flex items-start gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="mt-1 rounded border-slate-300 text-[#f9a825] focus:ring-[#f9a825]"
                {...register('confirmed', { required: true })}
              />
              <span className="text-xs text-slate-600">
                I confirm this quote is accurate and I can deliver the project as described. <span className="text-red-500">*</span>
              </span>
            </label>
          </div>

          <DialogFooter className="gap-2 sm:gap-0 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="w-full sm:w-auto border-slate-200">
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="w-full sm:w-auto bg-[#f9a825] hover:bg-[#e69b20] text-white font-medium"
              disabled={isSubmitting || !watch('confirmed')}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Quote'}
            </Button>
          </DialogFooter>
        </form>

        {/* Pro Tip - Design Match */}
        <div className="bg-blue-50 px-6 py-4 border-t border-blue-100 flex gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <div>
                <h4 className="text-sm font-semibold text-blue-900">Pro Tip</h4>
                <p className="text-xs text-blue-700 mt-0.5">Submit detailed quotes with examples of similar work to stand out.</p>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}