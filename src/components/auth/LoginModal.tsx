import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Facebook, Mail } from 'lucide-react';

export function LoginModal({ children, onLogin }: { children: React.ReactNode, onLogin: (role: string) => void }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">Welcome Back</DialogTitle>
          <DialogDescription className="text-center">
            Login to your account to manage projects or view quotes.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="login" className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="hello@example.com" defaultValue="homeowner@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" defaultValue="password" />
            </div>
            <Button className="w-full bg-[#f9a825] hover:bg-[#e39922]" onClick={() => onLogin('homeowner')}>Login as Homeowner</Button>
            <Button variant="outline" className="w-full" onClick={() => onLogin('contractor')}>Login as Contractor</Button>
            <Button variant="ghost" className="w-full text-xs" onClick={() => onLogin('admin')}>Login as Admin (Demo)</Button>
            
            <div className="relative my-4">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
                <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-500">Or continue with</span></div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="w-full gap-2"><Facebook className="w-4 h-4 text-blue-600"/> Facebook</Button>
                <Button variant="outline" className="w-full gap-2"><Mail className="w-4 h-4"/> Google</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="register" className="space-y-4">
             {/* Register content remains mostly same but buttons trigger flows */}
             <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="r-email">Email</Label>
              <Input id="r-email" type="email" placeholder="hello@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="r-password">Password</Label>
              <Input id="r-password" type="password" />
            </div>
             <Button className="w-full bg-[#f9a825] hover:bg-[#e39922] text-white" onClick={() => onLogin('homeowner')}>Create Account</Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
