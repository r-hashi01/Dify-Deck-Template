import React from 'react';
import { 
  MessageSquare, Bot, PenTool, Workflow, MessageCircle, 
  Brain, Zap, GitBranch, FileText, Sparkles, Settings, ArrowRight
} from 'lucide-react';

// 1. Chatbot: Conversation (Multi-turn)
export const ChatbotIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <MessageSquare className="text-blue-200 absolute top-0 right-0 transform translate-x-1 -translate-y-1" size="60%" />
    <MessageSquare className="text-dify-blue relative z-10 transform -translate-x-1 translate-y-1" size="60%" fill="currentColor" fillOpacity={0.2} />
  </div>
);

// 2. Agent: Brain + Reasoning/Planning (The "Big" one)
export const AgentIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Brain Core */}
    <Brain className="text-indigo-600 relative z-10" size="80%" />
    {/* Thoughts/Sparks */}
    <Zap className="text-yellow-400 absolute -top-1 -right-1 animate-pulse" size="40%" fill="currentColor" />
    {/* Logic Nodes */}
    <div className="absolute bottom-0 left-0 w-2 h-2 bg-indigo-400 rounded-full"></div>
    <div className="absolute top-1/2 -left-2 w-1.5 h-1.5 bg-indigo-300 rounded-full"></div>
  </div>
);

// 3. Text Generator: Writing/Creation
export const TextGenIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <FileText className="text-cyan-200 absolute" size="80%" />
    <PenTool className="text-cyan-600 absolute z-10 bottom-0 right-0 transform rotate-[-15deg]" size="50%" />
    <Sparkles className="text-cyan-400 absolute top-0 left-0" size="30%" />
  </div>
);

// 4. Workflow: Process/Automation
export const WorkflowIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 flex items-center justify-between px-1">
        <div className="w-2 h-2 bg-green-400 rounded-sm"></div>
        <div className="h-0.5 flex-1 bg-green-200 mx-0.5"></div>
        <div className="w-2 h-2 bg-green-600 rounded-sm transform rotate-45"></div>
        <div className="h-0.5 flex-1 bg-green-200 mx-0.5"></div>
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
    </div>
    <Settings className="text-green-500/20 absolute inset-0 m-auto animate-spin-slow" size="100%" />
  </div>
);

// 5. Chatflow: Chat + Logic
export const ChatflowIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Chat bubble input */}
    <MessageCircle className="text-purple-500 absolute top-0 left-0" size="50%" />
    
    {/* Flow arrow */}
    <ArrowRight className="text-purple-300 absolute inset-0 m-auto transform rotate-45" size="40%" />
    
    {/* Logic Branch output */}
    <GitBranch className="text-purple-700 absolute bottom-0 right-0" size="50%" />
  </div>
);

