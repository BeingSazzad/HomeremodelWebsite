import React from 'react';
import { MessagingSystem } from '../messaging/MessagingSystem';

interface MessagesProps {
  userRole: 'homeowner' | 'contractor' | 'admin';
}

export function Messages({ userRole }: MessagesProps) {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Messages</h1>
        <p className="text-slate-600">
          Communicate with {userRole === 'homeowner' ? 'contractors' : 'homeowners'} about your projects
        </p>
      </div>
      <MessagingSystem 
        currentUserId="current-user" 
        userRole={userRole === 'admin' ? 'contractor' : userRole}
      />
    </div>
  );
}
