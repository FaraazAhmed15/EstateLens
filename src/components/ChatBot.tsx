'use client';

import { useChat } from '@ai-sdk/react';
import { Bot, Send, X } from 'lucide-react';
import { useState } from 'react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Destructure with isLoading for better UX
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
  api: '/api/chat',
});


  return (
    <div className="fixed bottom-5 right-5 z-50">
       {/* UI Toggle logic remains the same */}
       <button onClick={() => setIsOpen(!isOpen)}>
         {isOpen ? <X /> : <Bot />}
       </button>

       {isOpen && (
         <div className="w-80 h-96 bg-white shadow-xl rounded-xl flex flex-col overflow-hidden border">
           <div className="flex-1 overflow-y-auto p-4 space-y-4">
             {messages.map(m => (
               <div key={m.id} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                 <div className={`inline-block p-2 rounded-lg text-sm ${
                   m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
                 }`}>
                   {/* CORRECT WAY TO RENDER IN V5/V6 */}
                   {m.content || m.parts?.map((part, i) => (
                     part.type === 'text' ? part.text : null
                   ))}
                 </div>
               </div>
             ))}
             {isLoading && <div className="text-xs text-gray-400">Assistant is typing...</div>}
           </div>

           <form onSubmit={handleSubmit} className="p-2 border-t flex gap-2">
             <input 
               value={input} 
               onChange={handleInputChange} 
               className="flex-1 border p-1 rounded text-black" 
               placeholder="Ask about houses..."
             />
             <button type="submit" disabled={isLoading} className="bg-blue-600 text-white p-1 rounded">
               <Send size={16} />
             </button>
           </form>
         </div>
       )}
    </div>
  );
}